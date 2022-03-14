/* Lazyload */
const lazyload = () => {
  const image = document.querySelectorAll<HTMLElement>('.gallery-wrapper img')
  for (let i = 0; i < image.length; i++) {
    image[i].onload = () => {
      image[i].classList.add('lazyFadeIn')
    }
  }
}

export default lazyload
