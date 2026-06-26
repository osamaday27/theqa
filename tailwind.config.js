/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EBF0F8',
          100: '#D1DCEB',
          200: '#A3B9D7',
          300: '#7596C3',
          400: '#4773AF',
          500: '#1A509B',
          600: '#15407C',
          700: '#10305D',
          800: '#0A203E',
          900: '#05101F',
          950: '#020812',
        },
        theqa: {
          blue: '#0A203E',
          gold: '#D4AF37',
          'gold-light': '#F5E6A3',
          'gold-dark': '#B8960F'
        }
      },
      fontFamily: {
        arabic: ['Tajawal', 'Cairo', 'sans-serif']
      },
      boxShadow: {
        'card': '0 4px 20px rgba(10, 32, 62, 0.08)',
        'card-hover': '0 8px 40px rgba(10, 32, 62, 0.15)',
        'gold': '0 4px 14px rgba(212, 175, 55, 0.3)'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 6s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      }
    }
  },
  plugins: [
    // تم إصلاح الدالة البرمجية وإغلاق كافة الأقواس بشكل سليم هنا لتعمل بدون أخطاء تجميع
    ({ addBase, addComponents, addUtilities }) => {
      addBase({
        '*': { 'box-sizing': 'border-box' },
        'html': { 'scroll-behavior': 'smooth', 'direction': 'rtl' },
        'body': {
          'font-family': 'Tajawal, Cairo, sans-serif',
          'background-color': '#FFFFFF',
          'color': '#0A203E',
          'overflow-x': 'hidden'
        }
      });

      addComponents({
        '.container-custom': {
          'max-width': '1280px',
          'margin-left': 'auto',
          'margin-right': 'auto',
          'padding-left': '1rem',
          'padding-right': '1rem',
          '@screen sm': {
            'padding-left': '1.5rem',
            'padding-right': '1.5rem'
          },
          '@screen lg': {
            'padding-left': '2rem',
            'padding-right': '2rem'
          }
        }
      });

      addUtilities({
        '.direction-rtl': { 'direction': 'rtl' },
        '.direction-ltr': { 'direction': 'ltr' }
      });
    }
  ],
  future: {
    hoverOnlyWhenSupported: true
  }
}
