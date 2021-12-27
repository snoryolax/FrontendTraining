/* Lazyload */
const lazyload = () => {
  const image = document.querySelectorAll<HTMLElement>('.gallery-wrapper img')
  console.log(image)
  for (let i = 0; i < image.length; i++) {
    image[i].onload = () => {
      image[i].classList.add('lazyFadeIn')
      console.log('loaded')
    }
  }
}

export default lazyload
