/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-50': '#F8FAFC',
        'gray-800': '#1E293B',
        'gray-600': '#475569',
        'gray-400': '#94A3B8',
        'purple': '#7C3AED',
        'light-purple': '#9F67FF',
        'red': '#ED3A5A'
      }
    },
  },
  plugins: [],
}
