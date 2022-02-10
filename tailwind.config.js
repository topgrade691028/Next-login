function range(start, end, increment = 1) {
  const count = Math.floor((end - start + 1) / increment);
  return Array(count).fill(0).map((_, idx) => start + idx * increment);
}

const minFontSize = 5;
const maxFontSize = 140;

const minSpacingPixel = 0;
const maxSpacingPixel = 1000;
const spacingPixelIncrement = 5;

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      ...range(minFontSize, maxFontSize).reduce((merged, f) => ({ ...merged, [f]: `${f}px`}), {})
    },
    spacing: {
      ...range(minSpacingPixel, maxSpacingPixel, spacingPixelIncrement).reduce((merged, f) => ({ ...merged, [f]: `${f}px` }), {})
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '6rem',
      },
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      primary: {
        DEFAULT: '#ADADAD',
        50: '#E5F6F6',
        75: '#74D6D2',
        100: '#ADADAD',
        200: '#009993',
        300: '#008F89',
        400: '#00857F',
      },
      secondary: {
        DEFAULT: '#445DC9',
        50: '#445DC9',
        100: '#445DC9',
      },
      success: {
        DEFAULT: '#74B06F',
        50: '#E8FCE6',
        75: '#BFE3BC',
        100: '#74B06F',
        200: '#63965F',
      },
      warning: {
        DEFAULT: '#F18F01',
        50: '#FFF5E5',
        75: '#FFCB80',
        100: '#F18F01',
        200: '#E78500',
        300: '#DD7B00',
        400: '#D37100',
      },
      danger: {
        DEFAULT: '#E54D4D',
        50: '#FFEDED',
        75: '#FFA3A3',
        100: '#E54D4D',
        200: '#CC4545',
      },
      light: {
        DEFAULT: '#DDDDDD',
        20: '#DDDDDD33',
        50: '#F8F8F8',
        75: '#EAEAEA',
        100: '#D6D6D6',
        200: '#BEBEBE',
        300: '#989898',
        400: '#6D6D6D',
        500: '#2C2C2C',
      },
      transparent: {
        DEFAULT: 'transparent',
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
