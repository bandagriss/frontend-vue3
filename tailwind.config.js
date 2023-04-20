/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

delete colors['lightBlue']
delete colors['warmGray']
delete colors['trueGray']
delete colors['coolGray']
delete colors['blueGray']

export const content = [
  './index.html',
  './src/**/*.{vue,js,ts,jsx,tsx}',
  './node_modules/flowbite/**/*.js',
  './node_modules/flowbite-datepicker/**/*.js'
]
export const darkMode = 'class'
export const theme = {
  extend: {
    fontFamily: {
      poppins: ['POPPINS']
    },
    colors: { ...colors },
    backgroundImage: {
      'fondo-login': "url('/img/fondo_login.jpg')"
    }
  },
  colors: {
    primary: '#506df5',
    secondary: '#6200ea',
    success: '#57c0ba',
    warning: '#ffab00',
    danger: '#f5508b',
    light: '#d3dbe5',
    dark: '#263238'
  },
  // eslint-disable-next-line no-undef
  plugins: [require('flowbite/plugin')]
}
export const plugins = []
