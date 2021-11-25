const MAX_IMAGE_NUM: number = 3 // スライドショーの画像の枚数

// 画像の出し分け
const toggleImg = (imgCount: number) => {
  // 表示する画像が含まれる要素の取得
  const activeImageElem = document.getElementById(
    `image0${imgCount}`
  ) as HTMLAnchorElement

  switch (imgCount) {
    case 1: {
      const inactiveImageElem01 = document.getElementById(
        `image0${imgCount + 1}`
      ) as HTMLAnchorElement
      const inactiveImageElem02 = document.getElementById(
        `image0${imgCount + 2}`
      ) as HTMLAnchorElement
      inactiveImageElem01.style.display = 'none'
      inactiveImageElem02.style.display = 'none'
      activeImageElem.style.display = 'block'
      break
    }
    case 2: {
      const inactiveImageElem01 = document.getElementById(
        `image0${imgCount + 1}`
      ) as HTMLAnchorElement
      const inactiveImageElem02 = document.getElementById(
        `image0${imgCount - 1}`
      ) as HTMLAnchorElement
      inactiveImageElem01.style.display = 'none'
      inactiveImageElem02.style.display = 'none'
      activeImageElem.style.display = 'block'
      break
    }
    case 3: {
      const inactiveImageElem01 = document.getElementById(
        `image0${imgCount - 1}`
      ) as HTMLAnchorElement
      const inactiveImageElem02 = document.getElementById(
        `image0${imgCount - 2}`
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

// スライドショーのテキストを切り替える
const changeTitle = (count: number) => {
  const titleCount: number = count

  // 表示するテキストが含まれる要素の取得
  const activeTitleElem = document.getElementById(
    `title0${titleCount}`
  ) as HTMLAnchorElement

  // titleCountによる画像の出し分け
  switch (titleCount) {
    case 1: {
      const inactiveTitleElem01 = document.getElementById(
        `title0${titleCount + 1}`
      ) as HTMLAnchorElement
      const inactiveTitleElem02 = document.getElementById(
        `title0${titleCount + 2}`
      ) as HTMLAnchorElement
      inactiveTitleElem01.style.display = 'none'
      inactiveTitleElem02.style.display = 'none'
      activeTitleElem.style.display = 'block'
      break
    }
    case 2: {
      const inactiveTitleElem01 = document.getElementById(
        `title0${titleCount + 1}`
      ) as HTMLAnchorElement
      const inactiveTitleElem02 = document.getElementById(
        `title0${titleCount - 1}`
      ) as HTMLAnchorElement
      inactiveTitleElem01.style.display = 'none'
      inactiveTitleElem02.style.display = 'none'
      activeTitleElem.style.display = 'block'
      break
    }
    case 3: {
      const inactiveTitleElem01 = document.getElementById(
        `title0${titleCount - 1}`
      ) as HTMLAnchorElement
      const inactiveTitleElem02 = document.getElementById(
        `title0${titleCount - 2}`
      ) as HTMLAnchorElement
      inactiveTitleElem01.style.display = 'none'
      inactiveTitleElem02.style.display = 'none'
      activeTitleElem.style.display = 'block'
      break
    }
  }
}

const slideshow = (interval: number) => {
  let count: number = 1 // 2→3→1→2→3→1...
  setInterval(() => {
    count++
    changeImage(count)
    changeTitle(count)
    if (count === MAX_IMAGE_NUM) {
      count = 0
    }
  }, interval)
}

export default slideshow
