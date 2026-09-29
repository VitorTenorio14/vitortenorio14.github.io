/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Cyan neon — cor primária
        primary: {
          50:  '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          950: '#0a2c38',
        },
        // Laranja neon — cor secundária
        secondary: {
          50:  '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        // Roxo — accent
        accent: {
          50:  '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        // Dark navy — backgrounds
        dark: {
          50:  '#f0f4ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        // Fundos escuros do portfólio
        navy: {
          900: '#0a0f1e',
          800: '#0d1530',
          700: '#111e3d',
          600: '#162447',
        }
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
        mono:    ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'display-1': ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-2': ['3.75rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-3': ['3rem',    { lineHeight: '1.2', fontWeight: '600' }],
      },
      spacing: {
        '18':  '4.5rem',
        '88':  '22rem',
        '100': '25rem',
        '120': '30rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft':       '0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)',
        'soft-lg':    '0 10px 40px -10px rgba(0,0,0,0.1)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
        // Neon glows
        'neon-cyan':   '0 0 15px rgba(6,182,212,0.5), 0 0 30px rgba(6,182,212,0.2)',
        'neon-orange': '0 0 15px rgba(249,115,22,0.5), 0 0 30px rgba(249,115,22,0.2)',
        'neon-sm':     '0 0 8px rgba(6,182,212,0.4)',
        'glow-card':   '0 0 0 1px rgba(6,182,212,0.15), 0 4px 24px rgba(6,182,212,0.07)',
        'glow-card-hover': '0 0 0 1px rgba(6,182,212,0.4), 0 8px 32px rgba(6,182,212,0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern':    'linear-gradient(rgba(6,182,212,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      animation: {
        'fade-in':      'fadeIn 0.5s ease-in',
        'fade-in-up':   'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-left':  'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'scale-in':     'scaleIn 0.3s ease-out',
        'bounce-slow':  'bounce 3s infinite',
        'neon-pulse':   'neonPulse 2s ease-in-out infinite',
        'float':        'float 6s ease-in-out infinite',
        'float-delay':  'float 6s ease-in-out 2s infinite',
        'cursor-blink': 'cursorBlink 1s step-end infinite',
      },
      keyframes: {
        fadeIn:      { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeInUp:    { '0%': { opacity: '0', transform: 'translateY(20px)' },  '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeInDown:  { '0%': { opacity: '0', transform: 'translateY(-20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideInLeft: { '0%': { opacity: '0', transform: 'translateX(-30px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        slideInRight:{ '0%': { opacity: '0', transform: 'translateX(30px)' },  '100%': { opacity: '1', transform: 'translateX(0)' } },
        scaleIn:     { '0%': { opacity: '0', transform: 'scale(0.9)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
        neonPulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(6,182,212,0.3)' },
          '50%':      { boxShadow: '0 0 20px rgba(6,182,212,0.6), 0 0 40px rgba(6,182,212,0.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        cursorBlink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
