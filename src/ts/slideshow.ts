// 現在表示している画像のindex
// 0→1→2→0→1→2...
let slideCount: number = 0

// 前回表示していた画像のindex
// slideCountが更新されるとその値を代入
// 0以外であれば可
let beforeSlideCount: number = -1

/* スライドの枚数 */
const SLIDE_NUM: number =
  document.getElementsByClassName('hero-container').length

/* スライドの要素を取得 */
const loadSlideElems = () => {
  const slideArray: HTMLDivElement[] = []
  for (let i = 0; i < SLIDE_NUM; i++) {
    slideArray.push(document.getElementById(`slide0${i + 1}`) as HTMLDivElement)
  }
  return slideArray
}

/* バーの要素を取得 */
const loadBarElems = () => {
  const barArray: HTMLDivElement[] = []
  for (let i = 0; i < SLIDE_NUM; i++) {
    barArray.push(document.getElementById(`bar0${i + 1}`) as HTMLDivElement)
  }
  return barArray
}

/* スライドを切り替え */
const toggleSlide = (slideCount: number, slideElems: HTMLDivElement[]) => {
  // バーのクリック時に再生中の画像のバーをクリックしていないことを確認
  // 初回のバーのクリック時にfadeInとfadeOutが発火する動作を防ぐ
  if (slideCount !== beforeSlideCount) {
    // すべてのスライドを非表示
    for (let i = 0; i < SLIDE_NUM; i++) {
      slideElems[i].classList.remove('fadeIn')
      slideElems[i].classList.add('fadeOut')
    }
    // 該当する特定のスライドのみを表示
    slideElems[slideCount].classList.remove('fadeOut')
    slideElems[slideCount].classList.add('fadeIn')
  }
}

/* バーのアニメーション */
const setBar = (bar: HTMLDivElement[], barMax: number, timer: number) => {
  // 各バーのwidth（0〜100）
  const width = timer / barMax + 0.25

  // slideCountによってバーの色をグリーンに変更
  switch (slideCount) {
    case 0:
      // 2、3枚目を再生中に1枚目のバーをクリックした場合
      // 2、3枚目のバーの色はホワイト
      if (beforeSlideCount >= 1) {
        bar[1]!.style.width = '0%'
        bar[2]!.style.width = '0%'
      }
      bar[0]!.style.width = `${width}%`
      break
    case 1:
      // 1、3枚目を再生中に2枚目のバーをクリックした場合
      // 1枚目のバーの色はグリーン
      // 3枚目のバーの色はホワイト
      if (beforeSlideCount === 0 || beforeSlideCount === 2) {
        bar[0]!.style.width = '100%'
        bar[2]!.style.width = '0%'
      }
      bar[1]!.style.width = `${width}%`
      break
    case 2:
      // 1、2枚目を再生中に3枚目のバーをクリックした場合
      // 1、2枚目のバーの色はグリーン
      if (beforeSlideCount <= 1) {
        bar[0]!.style.width = '100%'
        bar[1]!.style.width = '100%'
      }
      bar[2]!.style.width = `${width}%`
      break
    default:
      break
  }
  // 3枚目の再生が終わったら、すべてのバーの色をホワイトにする
  if (slideCount === 2 && width === 100) {
    for (let i = 0; i < SLIDE_NUM; i++) {
      bar[i]!.style.width = '0%'
    }
  }
}

/* スライドショーの実行 */
const slideshow = (changeInterval: number) => {
  // スライドの要素を取得
  const slideElems: HTMLDivElement[] = loadSlideElems()
  // シークバーの要素を取得
  const barElems: HTMLDivElement[] = loadBarElems()
  // プログレスバーの要素を取得
  const bar: HTMLDivElement[] = Array.from(
    document.querySelectorAll<HTMLDivElement>('.bar-container > div > div')
  )
  // プログレスバーの描画間隔
  const interval = 10
  // 1枚の画像の表示時間の管理
  let timer = 0
  // 各バーのwidth（0~100）をtimerから生成するための変数
  const barMax = changeInterval / 1000

  setInterval(() => {
    timer += 1

    // シークバーのクリックによるスライドの切り替え
    for (let i = 0; i < SLIDE_NUM; i++) {
      barElems[i]!.onclick = () => {
        beforeSlideCount = slideCount
        slideCount = i
        timer = 0
        toggleSlide(slideCount, slideElems)
      }
    }

    // timerによるスライドの切り替え
    if (timer === changeInterval / interval) {
      timer = 0
      slideCount++
      // slideCountの初期化
      if (slideCount === SLIDE_NUM) {
        slideCount = 0
      }
      toggleSlide(slideCount, slideElems)
    }
    setBar(bar, barMax, timer)
  }, interval)
}

export default slideshow
