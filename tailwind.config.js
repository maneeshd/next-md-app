module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        'Open Sans',
        '-apple-system',
        'BlinkMacSystemFont',
        'ui-sans-serif',
        'system-ui',
        'Helvetica Neue',
        'sans-serif',
      ],
      mono: ['Fira Code', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      terminal: ['VT323', 'monospace'],
    },
    extend: {
      transitionProperty: {
        height: 'height',
        decoration:
          'text-decoration-line, text-decoration-style, text-decoration-thickness, text-underline-offset, text-decoration',
      },
    },
  },
  plugins: [],
}
