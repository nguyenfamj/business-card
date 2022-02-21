module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        '186-px': '186px',
        '300-px': '300px',
        '500-px': '500px',
        '525-px': '525px',
        '875-px': '875px',
      },
      backgroundColor: {
        'glass-morphism': 'rgba(255,255,255,0.25)',
      },
      boxShadow: {
        '5xl': '20px 20px 50px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
};
