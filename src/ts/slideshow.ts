// 2→3→1→2→3→1...
let slideCount: number = 1

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

/* シークバーのアニメーション */
const seekBar = (bar: HTMLDivElement, timer: number) => {
  const width = timer / 4
  // bar!.style.width = `${width}%`
  switch (slideCount) {
    case 0:
      bar[2]!.style.width = `${width}%`

      break
    case 1:
      bar[0]!.style.width = `${width}%`
      break
    case 2:
      bar[1]!.style.width = `${width}%`
      break
    default:
      break
  }
  if (slideCount === 0 && width === 99.75) {
    for (let i = 0; i < SLIDE_NUM; i++) {
      bar[i]!.style.width = '0%'
    }
  }
}

/* スライドショーの実行 */
const slideshow = (changeInterval: number) => {
  // スライドの要素を取得
  const slideElems: HTMLDivElement[] = loadSlideElem()
  // プログレスバーの要素を取得
  const bar: HTMLDivElement[] = document.querySelectorAll(
    '.seek-container > div'
  )
  // プログレスバーの描画間隔
  const interval = 10

  setInterval(() => {
    timer += 1
    if (timer === changeInterval / interval) {
      timer = 0
      slideCount++
      toggleSlide(slideCount, slideElems)
      if (slideCount === SLIDE_NUM) {
        slideCount = 0
      }
    }
    seekBar(bar!, timer)
  }, interval)
}

export default slideshow
