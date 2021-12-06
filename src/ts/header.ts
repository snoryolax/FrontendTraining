/* Header */
const header = () => {
  const headerButton = document.getElementById('headerButton')
  headerButton!.onclick = () => {
    console.log('clicked')

    // dotの背景の円の表示切り替え
    const circle = document.querySelector('.circle')
    circle!.classList.toggle('is-open')

    // dotの表示切り替え
    const dot = document.querySelectorAll('.dot')
    for (let i = 0; i < dot.length; i++) {
      dot[i].classList.toggle('is-open')
    }

    // 文字色の切り替え
    const title = document.querySelector('.header-container')
    title!.classList.toggle('is-open')
  }
}

export default header
