/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#6B6C70',
        'custom-dark': '#27292D',
        'custom-white': '#C5C7CA',
        'custom-gray-border': '#35373B',
        'custom-text': '#7F8084',
        'custom-blue': '#4A96FF',
        'custom-black': '#191920',
        'custom-black-bg': '#131319'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      fontSize: {
        '14px': [
          '14px',
          {
            lineHeight: '16.94px'
          }
        ],
        '16px': [
          '16px',
          {
            lineHeight: '19.36px'
          }
        ],
        '18px': [
          '18px',
          {
            lineHeight: '21.78px'
          }
        ],
        '28px': [
          '28px',
          {
            lineHeight: '33.89px'
          }
        ]
      },
      borderRadius: {
        '4px': '4px'
      },
      lineHeight: {
        'extra-loose': '1.5'
      },
      letterSpacing: {
        '0.03em': '0.03em'
      }
    }
  },
  plugins: [
    function placeholderFontSize({ addUtilities }) {
      const newUtilities = {
        '.placeholder-16px': {
          '::placeholder': {
            fontSize: '16px'
          }
        }
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ]
};
