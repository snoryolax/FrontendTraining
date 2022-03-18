import header from './header'
import slideshow from './slideshow'
import lazyload from './lazyload'

export const App = (window.onload = () => {
  lazyload()
  header()

  // 画像に対して1枚あたり4000msで切り替えるスライドを実行
  slideshow(4000)
})
