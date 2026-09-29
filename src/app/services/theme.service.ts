import { Injectable, signal, computed } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
        
  private theme = signal<Theme>(this.getInitialTheme());
  
  currentTheme = computed(() => this.theme());
  isDark = computed(() => this.theme() === 'dark');

  constructor() {
    this.initializeTheme();
  }

  toggleTheme(): void {
    const newTheme = this.theme() === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  setTheme(theme: Theme): void {
    this.theme.set(theme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }

  private getInitialTheme(): Theme {
    const saved = localStorage.getItem('theme') as Theme;
    if (saved) return saved;
    
    // Verifica preferência do sistema
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'dark';
  }

  private initializeTheme(): void {
    const theme = this.getInitialTheme();
    this.setTheme(theme);
    
    // Observa mudanças no sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem('theme')) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
}