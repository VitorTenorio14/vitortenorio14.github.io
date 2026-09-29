import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Skill, SkillCategory } from '../models/skill.model';
import { Project } from '../models/project.model';


  @Injectable({
    providedIn: 'root'
  })
  export class PortfolioDataService {
    
    /**
     * Habilidades técnicas
     */
    private skills: Skill[] = [
      // Frontend
      { name: 'Angular', icon: 'angular', category: SkillCategory.FRONTEND},
      { name: 'React', icon: 'react', category: SkillCategory.FRONTEND},
      { name: 'TypeScript', icon: 'typescript', category: SkillCategory.FRONTEND},
      { name: 'JavaScript', icon: 'javascript', category: SkillCategory.FRONTEND},
      { name: 'HTML5', icon: 'html5', category: SkillCategory.FRONTEND},
      { name: 'CSS3', icon: 'css3', category: SkillCategory.FRONTEND},
      { name: 'Tailwind CSS', icon: 'tailwind', category: SkillCategory.FRONTEND},
      
      // Backend
      { name: 'Node.js', icon: 'nodejs', category: SkillCategory.BACKEND},
      { name: 'Python', icon: 'python', category: SkillCategory.BACKEND},
      { name: 'Go (Golang)', icon: 'golang', category: SkillCategory.BACKEND},
      { name: 'PostgreSQL', icon: 'postgresql', category: SkillCategory.BACKEND},
      { name: 'MongoDB', icon: 'mongodb', category: SkillCategory.BACKEND},
            
      // DevOps
      { name: 'Docker', icon: 'docker', category: SkillCategory.DEVOPS},
      { name: 'Git', icon: 'git', category: SkillCategory.DEVOPS},
      { name: 'AWS', icon: 'aws', category: SkillCategory.DEVOPS},
      { name: 'Azure', icon: 'azure', category: SkillCategory.DEVOPS},
      { name: 'Kubernetes', icon: 'kubernetes', category: SkillCategory.DEVOPS},
      
      // Ferramentas
      { name: 'VS Code', icon: 'vscode', category: SkillCategory.TOOLS},
      { name: 'Figma', icon: 'figma', category: SkillCategory.TOOLS},
      { name: 'Postman', icon: 'postman', category: SkillCategory.TOOLS},
      { name: 'GitHub', icon: 'github', category: SkillCategory.TOOLS},
      { name: 'Jira', icon: 'jira', category: SkillCategory.TOOLS},
    ];

    /**
     * Projetos 
     */
    private projects: Project[] = [
  {
    id: '1',
    translations: {
      pt: {
        title: 'Plataforma de Gestão de Energia',
        description: 'Plataforma SaaS com IA intensiva para todos os agentes do mercado de energia elétrica — distribuidoras, comercializadoras e consumidores. Integra análise de perfil, geração automática de relatórios e sugestões inteligentes via Gemini AI. Conectada ao ecossistema CYTEI e Enercoop.'
      },
      en: {
        title: 'Energy Management Platform',
        description: 'AI-intensive SaaS platform for all electric energy market agents — distributors, traders and consumers. Integrates profile analysis, automatic report generation and intelligent suggestions via Gemini AI. Connected to the CYTEI and Enercoop ecosystem.'
      }
    },
    image: '/assets/images/plat.jpg',
    technologies: ['Angular', 'Node.js', 'MongoDB', 'DigitalOcean', 'Gemini AI', 'TypeScript', 'Tailwind CSS'],
    links: {
      demo: 'https://app.cytei.com.br/login'
    },
    featured: true,
    date: '2026'
  },
  {
    id: '2',
    translations: {
      pt: {
        title: 'Gerador de Propostas e Documentação com IA',
        description: 'Sistema interno que automatiza a criação de propostas comerciais e documentação técnica para agentes do mercado de energia. A IA (Gemini) extrai dados do perfil do cliente, analisa o consumo e gera documentos completos e padronizados em segundos — eliminando o processo manual que levava horas.'
      },
      en: {
        title: 'AI-Powered Proposal & Documentation Generator',
        description: 'Internal system that automates the creation of commercial proposals and technical documentation for energy market agents. AI (Gemini) extracts client profile data, analyzes consumption and generates complete, standardized documents in seconds — eliminating the manual process that used to take hours.'
      }
    },
    image: '/assets/images/gen.jpg',
    technologies: ['Angular', 'Node.js', 'MongoDB', 'DigitalOcean', 'Gemini AI', 'TypeScript'],
    links: {},
    featured: true,
    date: '2026'
  },
  {
    id: '3',
    translations: {
      pt: {
        title: 'Calculadora de Energia com IA',
        description: 'Evolução da calculadora de economia de energia: agora com IA (Gemini) que analisa o perfil detalhado do usuário — histórico de consumo, perfil tarifário e padrões de uso — para entregar simulações mais precisas e recomendações personalizadas de migração para o mercado livre. Integrada ao site CYTEI.'
      },
      en: {
        title: 'AI Energy Savings Calculator',
        description: 'Evolution of the energy savings calculator: now with AI (Gemini) that analyzes the user\'s detailed profile — consumption history, tariff profile and usage patterns — to deliver more accurate simulations and personalized recommendations for migration to the free energy market. Integrated with the CYTEI website.'
      }
    },
    image: '/assets/images/cal.png',
    technologies: ['Angular', 'Node.js', 'MongoDB', 'DigitalOcean', 'Gemini AI', 'TypeScript', 'Tailwind CSS'],
    links: {
      demo: 'https://app.calculadora.cytei.com.br/'
    },
    featured: true,
    date: '2026'
  },
  {
    id: '5',
    translations: {
      pt: {
        title: 'Quicknotes',
        description: 'Sistema de gerenciamento de notas rápidas desenvolvido em Go, focado em performance e escalabilidade com API REST.'
      },
      en: {
        title: 'Quicknotes',
        description: 'Quick notes management system developed in Go, focused on performance and scalability with REST API.'
      }
    },
    image: '/assets/images/pgo.png',
    technologies: ['Go', 'Docker', 'PostgreSQL', 'REST API'],
    links: {
      github: 'https://github.com/VitorTenorio14/quicknotes'
    },
    date: '2026'
  }
];

    /**
     * Retorna habilidades agrupadas por categoria
     */
    getSkillsByCategory(): Observable<Map<SkillCategory, Skill[]>> {
      const skillsMap = new Map<SkillCategory, Skill[]>();
      
      this.skills.forEach(skill => {
        if (!skillsMap.has(skill.category)) {
          skillsMap.set(skill.category, []);
        }
        skillsMap.get(skill.category)?.push(skill);
      });
      
      return of(skillsMap);
    }

    /**
     * Retorna projetos, com opção de filtrar apenas destacados
     */
    getProjects(featuredOnly: boolean = false): Observable<Project[]> {
      const projects = featuredOnly 
        ? this.projects.filter(p => p.featured)
        : this.projects;
      return of(projects);
    }

    /**
     * Retorna um projeto específico por ID
     */
    getProjectById(id: string): Observable<Project | undefined> {
      return of(this.projects.find(p => p.id === id));
    }

    
  }