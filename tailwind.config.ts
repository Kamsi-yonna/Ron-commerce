/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

export default <Partial<Config>>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {}
  },
  plugins: [daisyui],
  daisyui: {
    styled: true,
    themes: [
      {
        hello: {
          primary: '#FF4646',
          'primary-focus': '#1F1A2B',
          'primary-content': '#ffffff',
          secondary: '#302742',
          'secondary-focus': '#1A1622',
          'secondary-content': '#ffffff',
          accent: '#37cdbe',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          neutral: '#342C52',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          blue: '#1C4ED8',
          'base-200': '#eaebee',
          'base-300': '#999999',
          'base-content': '#282828',
          info: '#2094f3',
          success: '#42ba96',
          warning: '#FF7B53',
          error: '#d9534f'
        }
      }
    ],
    logs: false
  }
}
