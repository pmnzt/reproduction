import colors from 'tailwindcss/colors'

 
export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          600: colors.yellow['600'],
          300: colors.yellow['300']
        }
      }
    }
  }
}
