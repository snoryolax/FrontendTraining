import Image01 from '../img/top_slide_01.jpg'
import Image02 from '../img/top_slide_02.jpg'
import Image03 from '../img/top_slide_03.jpg'

const imgPath = [Image01, Image02, Image03]
const text = [
  ['ハイジの仕事の進め方', 'Our Workflow'],
  ['Webはブランドの旗艦店', 'TATRAS CONCEPT STORE'],
  ['オンラインストアで二歩先をゆく', 'nano・universe 2018-2019 EC/APP UI改善'],
]

let imgCount = -1
let textCount = -1

const changeImage = () => {
  imgCount++
  if (imgCount === imgPath.length) {
    imgCount = 0
  }
  const elem = document.getElementById('slideshow') as HTMLImageElement
  elem.src = imgPath[imgCount]
  setTimeout(() => {
    changeImage()
    console.log('image changed')
  }, 8000)
}

const changeText = () => {
  textCount++
  if (textCount === text.length) {
    textCount = 0
  }
  const h2Elem = document.getElementById('slideshowTitle') as HTMLHeadingElement
  const h3Elem = document.getElementById(
    'slideshowSubTitle'
  ) as HTMLHeadingElement
  h2Elem.innerHTML = `<span>${text[textCount][0]}</span>`
  h3Elem.innerHTML = `<span>${text[textCount][1]}</span>`
  setTimeout(() => {
    changeText()
    console.log('text changed')
  }, 8000)
}

export const ChangeImage = changeImage
export const ChangeText = changeText
