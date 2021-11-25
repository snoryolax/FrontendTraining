const MAX_IMAGE_NUM: number =
  document.getElementsByClassName('hero-container').length // スライドの枚数を取得

const toggleSlide = (slideCount: number) => {
  // 表示するスライドが含まれる要素の取得
  const activeElem = document.getElementById(
    `slide0${slideCount}`
  ) as HTMLAnchorElement

  // slideCountによってスライドのdisplayを切り替え
  switch (slideCount) {
    case 1: {
      const inactiveElem01 = document.getElementById(
        `slide0${slideCount + 1}`
      ) as HTMLAnchorElement
      const inactiveElem02 = document.getElementById(
        `slide0${slideCount + 2}`
      ) as HTMLAnchorElement
      inactiveElem01.style.display = 'none'
      inactiveElem02.style.display = 'none'
      activeElem.style.display = 'block'
      break
    }
    case 2: {
      const inactiveElem01 = document.getElementById(
        `slide0${slideCount + 1}`
      ) as HTMLAnchorElement
      const inactiveElem02 = document.getElementById(
        `slide0${slideCount - 1}`
      ) as HTMLAnchorElement
      inactiveElem01.style.display = 'none'
      inactiveElem02.style.display = 'none'
      activeElem.style.display = 'block'
      break
    }
    case 3: {
      const inactiveElem01 = document.getElementById(
        `slide0${slideCount - 1}`
      ) as HTMLAnchorElement
      const inactiveElem02 = document.getElementById(
        `slide0${slideCount - 2}`
      ) as HTMLAnchorElement
      inactiveElem01.style.display = 'none'
      inactiveElem02.style.display = 'none'
      activeElem.style.display = 'block'
      break
    }
  }
}

// スライドの切り替え
const changeSlide = (count: number) => {
  const slideCount: number = count

  // スライドの出し分け
  toggleSlide(slideCount)
}

// スライドショーの実行
const slideshow = (interval: number) => {
  let count: number = 1 // 2→3→1→2→3→1...
  setInterval(() => {
    count++
    changeSlide(count)
    if (count === MAX_IMAGE_NUM) {
      count = 0
    }
  }, interval)
}

export default slideshow
