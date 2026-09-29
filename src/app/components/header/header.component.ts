import { Component, HostListener, signal, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private themeService = inject(ThemeService);
  private translationService = inject(TranslationService);

  // UI state
  isScrolled = signal(false);
  mobileOpen = signal(false);
  activeSection = signal('home');

  // Signals do serviço
  isDark = this.themeService.isDark;
  currentTheme = this.themeService.currentTheme;
  currentLanguage = this.translationService.currentLanguage;

  // Traduções
  translations = computed(() => this.translationService.translations());

  // Itens do menu (traduzíveis)
  navItems = computed(() => {
    const lang = this.currentLanguage();

    return [
      { id: 'home', label: lang === 'pt' ? 'Home' : 'Home', href: '#home' },
      { id: 'about', label: lang === 'pt' ? 'Sobre' : 'About', href: '#about' },
      { id: 'skills', label: 'Skills', href: '#skills' },
      { id: 'projects', label: lang === 'pt' ? 'Projetos' : 'Projects', href: '#projects' },
      { id: 'education', label: lang === 'pt' ? 'Formações' : 'Education', href: '#education' },
      { id: 'professions', label: lang === 'pt' ? 'Experiência' : 'Experience', href: '#professions' },
      { id: 'problems',   label: lang === 'pt' ? 'Cases' : 'Cases',          href: '#problems' }
    ];
  });

  // Scroll
  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
    this.updateActiveSection();
  }

  // Ações
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleMobile(): void {
    this.mobileOpen.update(v => !v);
  }

  closeMobile(): void {
    this.mobileOpen.set(false);
  }

  toggleLanguage(): void {
    this.translationService.toggleLanguage();
  }

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection.set(sectionId);
      this.closeMobile();
    }
  }

  private updateActiveSection(): void {
    const scrollPosition = window.scrollY + 100;

    for (const item of this.navItems()) {
      const element = document.getElementById(item.id);
      if (!element) continue;

      const top = element.offsetTop;
      const bottom = top + element.offsetHeight;

      if (scrollPosition >= top && scrollPosition <= bottom) {
        this.activeSection.set(item.id);
        break;
      }
    }
  }
}
