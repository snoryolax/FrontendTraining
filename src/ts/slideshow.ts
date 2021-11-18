const MAX_IMAGE_NUM = 3
let imgCount = 1
let titleCount = 1

// スライドショーの画像を切り替える
const changeImage = () => {
  imgCount++

  // 表示する画像が含まれる要素の取得
  const activeImageElem = document.getElementById(
    `image0${imgCount}`
  ) as HTMLAnchorElement

  // imgCountによる画像の出し分け
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

  // 2→3→1→2→3→1...
  if (imgCount === MAX_IMAGE_NUM) {
    imgCount = 0
  }
}

// スライドショーのテキストを切り替える
const changeTitle = () => {
  titleCount++

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

  // 2→3→1→2→3→1...
  if (titleCount === MAX_IMAGE_NUM) {
    titleCount = 0
  }
}

const slideshow = () => {
  setInterval(() => {
    changeImage()
    changeTitle()
    console.log('changed')
  }, 2000)
}

export default slideshow
