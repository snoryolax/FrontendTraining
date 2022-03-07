// 0→1→2→0→1→2...
let slideCount: number = 0

let beforeSlideCount: number = 0

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

/* シークバーの要素を取得 */
const loadSeekbarElem = () => {
  const seekbarArray: HTMLDivElement[] = []
  for (let i = 0; i < SLIDE_NUM; i++) {
    seekbarArray.push(
      document.getElementById(`seek0${i + 1}`) as HTMLDivElement
    )
  }
  return seekbarArray
}

/* スライドを切り替え */
const toggleSlide = (slideCount: number, slideElems: HTMLDivElement[]) => {
  // 表示するスライドのインデックス
  const index = slideCount

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
  const width = timer / 4 + 0.25
  // bar!.style.width = `${width}%`
  switch (slideCount) {
    case 0:
      if (beforeSlideCount >= 1) {
        bar[1]!.style.width = `0%`
        bar[2]!.style.width = `0%`
      }
      bar[0]!.style.width = `${width}%`
      break
    case 1:
      if (beforeSlideCount === 0 || beforeSlideCount === 2) {
        bar[0]!.style.width = `100%`
        bar[2]!.style.width = `0%`
      }
      bar[1]!.style.width = `${width}%`
      break
    case 2:
      if (beforeSlideCount <= 1) {
        bar[0]!.style.width = `100%`
        bar[1]!.style.width = `100%`
      }
      bar[2]!.style.width = `${width}%`
      break
    default:
      break
  }
  if (slideCount === 2 && width === 100) {
    for (let i = 0; i < SLIDE_NUM; i++) {
      bar[i]!.style.width = '0%'
    }
  }
}

/* スライドショーの実行 */
const slideshow = (changeInterval: number) => {
  // スライドの要素を取得
  const slideElems: HTMLDivElement[] = loadSlideElem()
  // シークバーの要素を取得
  const seekbarElems: HTMLDivElement[] = loadSeekbarElem()
  // プログレスバーの要素を取得
  const bar: HTMLDivElement[] = document.querySelectorAll(
    '.seek-container > div > div'
  )
  // プログレスバーの描画間隔
  const interval = 10

  setInterval(() => {
    timer += 1

    // シークバーのクリックによるスライドの切り替え
    for (let i = 0; i < SLIDE_NUM; i++) {
      seekbarElems[i]!.onclick = () => {
        beforeSlideCount = slideCount
        slideCount = i
        timer = 0
        switch (seekbarElems[i].id) {
          case 'seek01':
            break
          case 'seek02':
            break
          case 'seek03':
            break
          default:
            break
        }
      }
    }

    // changeInterval(4000) / interval(10)
    // if (timer === 400)
    if (timer === changeInterval / interval) {
      timer = 0
      slideCount++
      // slideCountの初期化
      if (slideCount === SLIDE_NUM) {
        slideCount = 0
      }
      toggleSlide(slideCount, slideElems)
    }
    seekBar(bar!, timer)
  }, interval)
}

export default slideshow
