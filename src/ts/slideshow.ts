// スライドの枚数
const SLIDE_NUM: number =
  document.getElementsByClassName('hero-container').length

// スライドの要素を取得
const loadSlideElem = () => {
  const slideArray: HTMLDivElement[] = []
  for (let i = 0; i < SLIDE_NUM; i++) {
    slideArray.push(document.getElementById(`slide0${i + 1}`) as HTMLDivElement)
  }
  return slideArray
}

// スライドを切り替え
const toggleSlide = (slideCount: number, slideElems: HTMLDivElement[]) => {
  const index = slideCount - 1 // 表示するスライドのインデックス

  // 表示するスライド
  slideElems[index].style.display = 'block'

  // 表示しないスライド
  for (let i = 0; i < SLIDE_NUM; i++) {
    if (index !== i) {
      slideElems[i].style.display = 'none'
    }
  }
}

// スライドショーの実行
const slideshow = (interval: number) => {
  let slideCount: number = 1 // 2→3→1→2→3→1...
  const slideElems: HTMLDivElement[] = loadSlideElem()
  setInterval(() => {
    slideCount++
    toggleSlide(slideCount, slideElems)
    if (slideCount === SLIDE_NUM) {
      slideCount = 0
    }
  }, interval)
}

export default slideshow
