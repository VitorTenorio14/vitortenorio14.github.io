import { Component, ChangeDetectionStrategy, inject, computed, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationComponent {
  private translationService = inject(TranslationService);

  // Idioma atual
  currentLanguage = this.translationService.currentLanguage;

  // Método helper para obter o valor atual do idioma
  private getCurrentLangValue(): 'pt' | 'en' {
    return this.currentLanguage();
  }

  // Dados de educação
  educations = computed(() => {
    const lang = this.getCurrentLangValue();
    return [
      {
        institution: lang === 'pt' 
          ? 'Faculdade de Tecnologia e Inovação SENAC' 
          : 'SENAC Technology and Innovation College',
        degree: lang === 'pt'
          ? 'Análise e Desenvolvimento de Sistemas'
          : 'Systems Analysis and Development',
        period: '2022 - 2024',
        description: lang === 'pt'
          ? 'Graduação em Análise e Desenvolvimento de Sistemas. Especialista em transformar requisitos de negócio em software robusto através de metodologias ágeis.'
          : 'Bachelor\'s degree in Systems Analysis and Development. Specialist in transforming business requirements into robust software through agile methodologies.',
        skills: lang === 'pt'
          ? [
              'Algoritmos Avançados', 
              'Estrutura de Dados', 
              'Desenvolvimento Backend e Frontend',
              'HTML, CSS, JavaScript, PHP, PostgreSQL, Python',
              'Arquitetura de APIs & Bancos de Dados',
              'Engenharia de Software', 
              'Gestão de Projetos Ágeis',
              'Cloud Computing'
            ]
          : [
              'Advanced Algorithms', 
              'Data Structures', 
              'Backend and Frontend Development',
              'HTML, CSS, JavaScript, PHP, PostgreSQL, Python',
              'API & Database Architecture',
              'Software Engineering', 
              'Agile Project Management',
              'Cloud Computing'
            ]
      },
      {
        institution: lang === 'pt'
          ? 'IBMEC'
          : 'IBMEC',
        degree: lang === 'pt'
          ? 'Gestão de Projetos com IA'
          : 'Project Management with AI',
        period: '2026 - 2027',
        description: lang === 'pt'
          ? 'Pós-graduação em Gestão de Projetos com foco em Inteligência Artificial aplicada ao planejamento, execução e monitoramento de projetos de tecnologia e inovação.'
          : 'Postgraduate degree in Project Management with a focus on Artificial Intelligence applied to planning, execution and monitoring of technology and innovation projects.',
        skills: lang === 'pt'
          ? [
              'Gestão de Projetos com IA',
              'Planejamento Estratégico',
              'Liderança de Equipes',
              'Machine Learning aplicado',
              'Análise de Dados',
              'Inovação e Transformação Digital'
            ]
          : [
              'AI-driven Project Management',
              'Strategic Planning',
              'Team Leadership',
              'Applied Machine Learning',
              'Data Analysis',
              'Innovation and Digital Transformation'
            ]
      }
    ];
  });

  // Dados de certificações
  certifications = computed(() => {
    const lang = this.getCurrentLangValue();
    return [
      {
        title: lang === 'pt'
          ? 'Administrador de Banco de Dados'
          : 'Database Administrator',
        issuer: 'SENAC',
        date: '2023',
        credentialUrl: ''
      },
      {
        title: lang === 'pt'
          ? 'Programador WEB'
          : 'Web Programmer',
        issuer: 'SENAC',
        date: '2023',
        credentialUrl: ''
      },
      {
        title: 'MySQL Explorer',
        issuer: 'Oracle',
        date: '2023',
        credentialUrl: ''
      },
      {
        title: lang === 'pt'
          ? 'Mentoria ADAPTA com IA'
          : 'ADAPTA Mentorship with AI',
        issuer: 'ADAPTA Company',
        date: '2025',
        credentialUrl: ''
      },
      {
        title: lang === 'pt'
          ? 'Desenvolvimento WEB com GO'
          : 'Web Development with GO',
        issuer: 'Udemy',
        date: '2026',
        credentialUrl: ''
      }
    ];
  });

  // Dados de idiomas
  languages = computed(() => {
    const lang = this.getCurrentLangValue();
    return [
      {
        flag: '🇧🇷',
        name: lang === 'pt' ? 'Português' : 'Portuguese',
        level: lang === 'pt' ? 'Nativo' : 'Native',
        proficiency: 1.0
      },
      {
        flag: '🇪🇸',
        name: lang === 'pt' ? 'Espanhol' : 'Spanish',
        level: lang === 'pt' ? 'Avançado' : 'Advanced',
        proficiency: 0.8
      },
      {
        flag: '🇺🇸',
        name: lang === 'pt' ? 'Inglês' : 'English',
        level: lang === 'pt' ? 'Intermediário' : 'Intermediate',
        proficiency: 0.65
      }
    ];
  });

  // Métodos auxiliares
  getProficiencyClass(proficiency: number): string {
    if (proficiency >= 0.8) return 'bg-green-500';
    if (proficiency >= 0.6) return 'bg-yellow-500';
    return 'bg-orange-500';
  }

  getProficiencyWidth(proficiency: number): string {
    return `${proficiency * 100}%`;
  }

  trackByIndex(index: number): number {
    return index;
  }

  // Métodos para obter traduções
  educationTitle = computed(() => 
    this.getCurrentLangValue() === 'pt' 
      ? 'Formações & Certificações' 
      : 'Education & Certifications'
  );

  academicEducation = computed(() => 
    this.getCurrentLangValue() === 'pt'
      ? 'Formações Acadêmicas'
      : 'Academic Education'
  );

  certificationsTitle = computed(() => 
    this.getCurrentLangValue() === 'pt'
      ? 'Certificações'
      : 'Certifications'
  );

  skillsLabel = computed(() => 
    this.getCurrentLangValue() === 'pt'
      ? 'Competências Desenvolvidas'
      : 'Developed Skills'
  );

  viewCredential = computed(() => 
    this.getCurrentLangValue() === 'pt'
      ? 'Ver Credencial'
      : 'View Credential'
  );

  languagesTitle = computed(() => 
    this.getCurrentLangValue() === 'pt'
      ? 'Idiomas'
      : 'Languages'
  );

  description = computed(() => 
    this.getCurrentLangValue() === 'pt'
      ? 'Minha jornada de aprendizado e desenvolvimento contínuo em tecnologia'
      : 'My continuous learning and development journey in technology'
  );
}