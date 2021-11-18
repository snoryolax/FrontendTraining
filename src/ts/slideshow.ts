import Image01 from '../img/top_slide_01.jpg'
import Image02 from '../img/top_slide_02.jpg'
import Image03 from '../img/top_slide_03.jpg'

const imgPath = [Image01, Image02, Image03]

let count = -1

const changeImage = () => {
  count++
  if (count === imgPath.length) {
    count = 0
  }
  const elem = document.getElementById('slideshow') as HTMLImageElement
  elem.src = imgPath[count]
  setTimeout(() => {
    changeImage()
    console.log('image changed')
  }, 8000)
}

export default changeImage
