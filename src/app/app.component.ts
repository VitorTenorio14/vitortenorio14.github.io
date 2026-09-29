import { Component, HostListener, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfessionsComponent } from './components/professions/professions.component';
import { ProblemsComponent } from './components/problems/problems.component';
import { ThemeService } from './services/theme.service';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    ProfessionsComponent,
    ProblemsComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen">
      <app-header></app-header>
      
      <main>
        <app-hero></app-hero>
        <app-about></app-about>
        <app-skills></app-skills>
        <app-projects></app-projects>
        <app-education></app-education>
        <app-professions></app-professions>
        <app-problems></app-problems>
      </main>
      
      <app-footer></app-footer>
      
      <!-- Scroll to top button -->
      <button
        *ngIf="showScrollTop"
        (click)="scrollToTop()"
        class="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary-600 text-white shadow-neon-sm hover:bg-primary-500 hover:shadow-neon-cyan transition-all duration-300 hover:scale-110"
        aria-label="Voltar ao topo"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </button>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    
    /* Garante que o tema seja aplicado ao HTML também */
    :host-context(.dark) {
      color-scheme: dark;
    }
  `]
})
export class AppComponent implements OnInit {
  private themeService = inject(ThemeService);
  private translationService = inject(TranslationService);
  
  showScrollTop = false;
  
  // Computed signal para verificar se é dark mode
  isDark = this.themeService.isDark;

  ngOnInit(): void {
    // Inicializa os serviços
    this.initializeTheme();
    this.initializeLanguage();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.showScrollTop = window.pageYOffset > 300;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  /**
   * Inicializa o tema
   */
  private initializeTheme(): void {
    // Aplica a classe dark ao HTML se necessário
    if (this.isDark()) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Observa mudanças no tema
    this.themeService.currentTheme();
  }

  /**
   * Inicializa o idioma
   */
  private initializeLanguage(): void {
    // Define o atributo lang no HTML
    document.documentElement.lang = this.translationService.currentLanguage();
    
    // Observa mudanças no idioma
    this.translationService.currentLanguage();
  }
}