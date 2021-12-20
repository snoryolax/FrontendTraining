/* スライドの枚数 */
const SLIDE_NUM: number =
  document.getElementsByClassName('hero-container').length

/* スライドの要素を取得 */
const loadSlideElem = () => {
  const slideArray: HTMLDivElement[] = []
  for (let i = 0; i < SLIDE_NUM; i++) {
    slideArray.push(document.getElementById(`slide0${i + 1}`) as HTMLDivElement)
  }
  return slideArray
}

/* スライドを切り替え */
const toggleSlide = (slideCount: number, slideElems: HTMLDivElement[]) => {
  // 表示するスライドのインデックス
  const index = slideCount - 1

  // すべてのスライドを非表示
  for (let i = 0; i < SLIDE_NUM; i++) {
    // slideElems[i].style.display = 'none'
    slideElems[i].classList.remove('fadeIn')
    slideElems[i].classList.add('fadeOut')
  }

  // 特定のスライドのみを表示
  // slideElems[index].style.display = 'block'
  slideElems[index].classList.remove('fadeOut')
  slideElems[index].classList.add('fadeIn')
}

/* スライドショーの実行 */
const slideshow = (interval: number) => {
  // 2→3→1→2→3→1...
  let slideCount: number = 1
  // スライドの要素を取得
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
