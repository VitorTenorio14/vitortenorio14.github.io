import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  private translationService = inject(TranslationService);

  // Ano atual
  year = new Date().getFullYear();

  // Idioma atual
  currentLanguage = this.translationService.currentLanguage;

  private getLang(): 'pt' | 'en' {
    return this.currentLanguage();
  }

  // Traduções
  name = computed(() =>
    this.getLang() === 'pt' ? 'Vitor Tenorio' : 'Vitor Tenorio'
  );

  aboutLabel = computed(() =>
    this.getLang() === 'pt' ? 'Sobre' : 'About'
  );

  skillsLabel = computed(() =>
    this.getLang() === 'pt' ? 'Skills' : 'Skills'
  );

  projectsLabel = computed(() =>
    this.getLang() === 'pt' ? 'Projetos' : 'Projects'
  );

  educationLabel = computed(() =>
    this.getLang() === 'pt' ? 'Formações' : 'Education'
  );

  experienceLabel = computed(() =>
    this.getLang() === 'pt' ? 'Experiência' : 'Experience'
  );

  casesLabel = computed(() =>
    this.getLang() === 'pt' ? 'Cases' : 'Cases'
  );

  rightsLabel = computed(() =>
    this.getLang() === 'pt'
      ? 'Todos os direitos reservados'
      : 'All rights reserved'
  );
}
