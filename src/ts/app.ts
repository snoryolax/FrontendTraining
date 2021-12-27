import header from './header'
import slideshow from './slideshow'
import lazyload from './lazyload'

export const App = (window.onload = () => {
  lazyload()
  header()
  slideshow(4000)
})
