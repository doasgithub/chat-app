/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.html',   // Include all HTML files in src folder
    './src/**/*.js',     // Include all JS files in src folder
    './src/**/*.jsx',    // Include JSX files if you're using React
    './src/**/*.ts',     // For TypeScript
    './src/**/*.tsx',    // For TypeScript with React
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}

