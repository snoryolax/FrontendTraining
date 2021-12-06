/* Header */
const header = () => {
  const headerButton = document.getElementById('headerButton')
  headerButton!.onclick = () => {
    console.log('clicked')
    const circle = document.querySelector('circle')
    circle!.classList.toggle('is-open')
  }
}

export default header
