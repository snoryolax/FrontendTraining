let timer = 0

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

/* プログレスバーのアニメーション */
const progress = (bar: HTMLElement, timer: number) => {
  const width = timer / 4
  bar!.style.width = `${width}%`
}

/* スライドショーの実行 */
const slideshow = (interval: number) => {
  // 2→3→1→2→3→1...
  let slideCount: number = 1
  // スライドの要素を取得
  const slideElems: HTMLDivElement[] = loadSlideElem()
  // プログレスバーの要素を取得
  const bar = document.querySelector<HTMLElement>('.seek-container > div')

  setInterval(() => {
    slideCount++
    toggleSlide(slideCount, slideElems)
    if (slideCount === SLIDE_NUM) {
      slideCount = 0
    }
  }, interval)
  setInterval(() => {
    timer += 1
    progress(bar, timer)
    if (timer == 400) {
      timer = 0
    }
  }, 10)
}

export default slideshow
