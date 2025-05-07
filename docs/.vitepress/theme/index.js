import DefaultTheme from 'vitepress/theme'
import ZoomableImage from './components/ZoomableImage.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('ZoomableImage', ZoomableImage)
  }
} 