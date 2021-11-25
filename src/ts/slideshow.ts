// スライドの枚数を取得
const getSlidesNum = () => {
  const slidesNum: number =
    document.getElementsByClassName('hero-container').length
  return slidesNum
}

// スライドの要素を取得
const loadSlideElem = () => {
  const slidesArray: HTMLDivElement[] = []
  for (let i = 0; i < getSlidesNum(); i++) {
    slidesArray.push(
      document.getElementById(`slide0${i + 1}`) as HTMLDivElement
    )
  }
  return slidesArray
}

// スライドを切り替え
const toggleSlide = (slideCount: number, slideElems: HTMLDivElement[]) => {
  const index = slideCount - 1 // 表示するスライドのインデックス

  // 表示するスライド
  slideElems[index].style.display = 'block'

  // 表示しないスライド
  for (let i = 0; i < getSlidesNum(); i++) {
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
    if (slideCount === getSlidesNum()) {
      slideCount = 0
    }
  }, interval)
}

export default slideshow
