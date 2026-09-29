import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-problems',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './problems.component.html',
})
export class ProblemsComponent {
  translationService = inject(TranslationService);

  get lang() {
    return this.translationService.currentLanguage();
  }

  get sectionTitle() {
    return this.lang === 'pt' ? 'Problemas que Resolvi' : 'Problems I Solved';
  }

  get sectionSubtitle() {
    return this.lang === 'pt'
      ? 'Casos reais de desafios técnicos e de gestão que transformei em resultados concretos'
      : 'Real cases of technical and management challenges I turned into concrete results';
  }

  get problems() {
    const pt = this.lang === 'pt';
    return [
      {
        id: '01',
        accentColor: 'primary',
        icon: '🔀',
        problem: pt
          ? 'Gargalos de comunicação entre equipes técnicas e stakeholders'
          : 'Communication bottlenecks between technical teams and stakeholders',
        context: pt
          ? 'Em um projeto com múltiplos times e entregas simultâneas, a falta de visibilidade sobre o progresso gerava retrabalho, atrasos e frustração entre devs e clientes.'
          : 'In a project with multiple teams and simultaneous deliveries, lack of visibility on progress caused rework, delays, and frustration between devs and clients.',
        solution: pt
          ? 'Mapeei todos os fluxos de trabalho no Trello, criei dashboards de acompanhamento, estabeleci cerimônias ágeis diárias e defini um processo claro de comunicação entre stakeholders e desenvolvedores.'
          : 'Mapped all workflows in Trello, created tracking dashboards, established daily agile ceremonies, and defined a clear communication process between stakeholders and developers.',
        impact: pt
          ? 'Redução drástica de retrabalho, entregas dentro do prazo planejado e feedback mais rápido do cliente.'
          : 'Drastic reduction in rework, on-time deliveries, and faster client feedback.',
        tags: ['Scrum', 'Kanban', 'Trello', 'Gestão Ágil'],
      },
      {
        id: '02',
        accentColor: 'secondary',
        icon: '📄',
        problem: pt
          ? 'Geração de propostas e documentação para o mercado de energia feita 100% de forma manual'
          : '100% manual proposal and documentation generation for the energy market',
        context: pt
          ? 'Analistas do mercado de energia levavam horas para montar cada proposta comercial e documento técnico: coletavam dados do cliente manualmente, preenchiam planilhas, formatavam PDFs e revisavam tudo à mão — processo lento, inconsistente e propenso a erros que travava o pipeline de vendas.'
          : 'Energy market analysts spent hours assembling each commercial proposal and technical document: manually collecting client data, filling spreadsheets, formatting PDFs and reviewing everything by hand — a slow, inconsistent and error-prone process that stalled the sales pipeline.',
        solution: pt
          ? 'Investiguei o fluxo completo, mapeei os dados necessários e desenvolvi um sistema interno com IA (Gemini) que extrai e trata automaticamente os dados do perfil do cliente, analisa o histórico de consumo e gera propostas e documentação técnica completa e padronizada em segundos.'
          : 'Investigated the complete flow, mapped the required data and developed an internal system with AI (Gemini) that automatically extracts and processes client profile data, analyzes consumption history and generates complete, standardized proposals and technical documentation in seconds.',
        impact: pt
          ? 'O que levava horas passou a ser feito em segundos. Processo implantado em definitivo, muito bem avaliado pelos analistas e com alta taxa de adoção imediata pela equipe.'
          : 'What took hours now takes seconds. Process permanently deployed, highly rated by analysts with a high immediate adoption rate by the team.',
        tags: ['Angular', 'Node.js', 'MongoDB', 'Gemini AI', 'DigitalOcean'],
      },
      {
        id: '03',
        accentColor: 'accent',
        icon: '🏗️',
        problem: pt
          ? 'Projeto atrasado, mal estruturado e sem equipe engajada — do caos a entregas consistentes'
          : 'Delayed, poorly structured project with no engaged team — from chaos to consistent deliveries',
        context: pt
          ? 'Fui inserido em um projeto já em andamento com atrasos críticos, escopo mal definido, papéis confusos e time desmotivado. Não havia processos claros, a comunicação era falha e as entregas eram imprevisíveis.'
          : 'I was brought into an already ongoing project with critical delays, poorly defined scope, confused roles and a demotivated team. There were no clear processes, communication was broken and deliveries were unpredictable.',
        solution: pt
          ? 'Realizei um diagnóstico completo da situação, reestruturei o backlog com prioridades claras, defini papéis e responsabilidades, montei uma nova equipe engajada e implantei rituais ágeis (daily, refinamento, review). Alinhei expectativas com os stakeholders desde o primeiro dia.'
          : 'Conducted a full situation diagnosis, restructured the backlog with clear priorities, defined roles and responsibilities, assembled a new engaged team and implemented agile rituals (daily, refinement, review). Aligned expectations with stakeholders from day one.',
        impact: pt
          ? 'Time coeso e engajado com entregas funcionais e consistentes nos sprints. Projeto retomado com previsibilidade e confiança dos stakeholders restabelecida.'
          : 'Cohesive and engaged team with functional and consistent sprint deliveries. Project back on track with predictability and restored stakeholder trust.',
        tags: ['Scrum', 'Kanban', 'Liderança Técnica', 'Gestão de Equipes', 'Angular', 'Node.js'],
      },
      {
        id: '04',
        accentColor: 'primary',
        icon: '🤝',
        problem: pt
          ? 'Gestão de expectativas em projeto travado: stakeholders insatisfeitos e entregas sem alinhamento'
          : 'Expectation management in a stalled project: dissatisfied stakeholders and misaligned deliveries',
        context: pt
          ? 'Um projeto estratégico estava travado há semanas com stakeholders frustrados, sem visibilidade sobre o progresso real, expectativas desalinhadas entre cliente e equipe técnica e pressão crescente por resultados — tudo isso gerando um ciclo de desconfiança que impedia qualquer avanço.'
          : 'A strategic project had been stalled for weeks with frustrated stakeholders, no visibility into real progress, misaligned expectations between client and technical team and growing pressure for results — all creating a distrust cycle that prevented any progress.',
        solution: pt
          ? 'Assumi a interface direta com os stakeholders, mapiei as expectativas reais de cada parte, criei um dashboard de acompanhamento transparente e estabeleci um cadência de comunicação regular. Priorizei entregas pequenas e funcionais para reconstruir a confiança enquanto reorganizava a execução internamente.'
          : 'I took over the direct interface with stakeholders, mapped each party\'s real expectations, created a transparent tracking dashboard and established a regular communication cadence. I prioritized small, functional deliveries to rebuild trust while reorganizing execution internally.',
        impact: pt
          ? 'Confiança dos stakeholders reestabelecida, expectativas realinhadas e projeto desbloqueado com entregas assertivas dentro de um cronograma acordado e cumprido.'
          : 'Stakeholder trust re-established, expectations realigned and project unblocked with assertive deliveries within an agreed and fulfilled timeline.',
        tags: ['Gestão de Stakeholders', 'Comunicação', 'Scrum', 'Liderança', 'Planejamento'],
      },
    ];
  }

  trackByIndex(index: number): number {
    return index;
  }
}
