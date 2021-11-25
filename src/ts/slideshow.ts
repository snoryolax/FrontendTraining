const MAX_IMAGE_NUM: number =
  document.getElementsByClassName('hero-container').length // スライドショーの枚数を取得

// 画像の出し分け
const toggleImg = (imgCount: number) => {
  // 表示する画像が含まれる要素の取得
  const activeImageElem = document.getElementById(
    `slide0${imgCount}`
  ) as HTMLAnchorElement

  switch (imgCount) {
    case 1: {
      const inactiveImageElem01 = document.getElementById(
        `slide0${imgCount + 1}`
      ) as HTMLAnchorElement
      const inactiveImageElem02 = document.getElementById(
        `slide0${imgCount + 2}`
      ) as HTMLAnchorElement
      inactiveImageElem01.style.display = 'none'
      inactiveImageElem02.style.display = 'none'
      activeImageElem.style.display = 'block'
      break
    }
    case 2: {
      const inactiveImageElem01 = document.getElementById(
        `slide0${imgCount + 1}`
      ) as HTMLAnchorElement
      const inactiveImageElem02 = document.getElementById(
        `slide0${imgCount - 1}`
      ) as HTMLAnchorElement
      inactiveImageElem01.style.display = 'none'
      inactiveImageElem02.style.display = 'none'
      activeImageElem.style.display = 'block'
      break
    }
    case 3: {
      const inactiveImageElem01 = document.getElementById(
        `slide0${imgCount - 1}`
      ) as HTMLAnchorElement
      const inactiveImageElem02 = document.getElementById(
        `slide0${imgCount - 2}`
      ) as HTMLAnchorElement
      inactiveImageElem01.style.display = 'none'
      inactiveImageElem02.style.display = 'none'
      activeImageElem.style.display = 'block'
      break
    }
  }
}

// 画像の切り替え
const changeImage = (count: number) => {
  const imgCount: number = count

  // 画像の出し分け
  toggleImg(imgCount)
}

const slideshow = (interval: number) => {
  let count: number = 1 // 2→3→1→2→3→1...
  setInterval(() => {
    count++
    changeImage(count)
    if (count === MAX_IMAGE_NUM) {
      count = 0
    }
  }, interval)
}

export default slideshow
