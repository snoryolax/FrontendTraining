/* Header */
const header = () => {
  const headerButton = document.querySelector('header button') as HTMLElement
  headerButton!.onclick = () => {
    console.log('clicked')

    // dotの背景の円の表示切り替え
    const circle = document.querySelector('.circle')
    circle!.classList.toggle('menu-active')

    // dotの表示切り替え
    const dot = document.querySelectorAll('.dot')
    for (let i = 0; i < dot.length; i++) {
      dot[i].classList.toggle('menu-active')
    }

    // 文字色の切り替え
    const title = document.querySelector('.header-container')
    title!.classList.toggle('menu-active')

    // メニューの表示の切り替え
    const body = document.querySelector('body')
    const menu = document.querySelector('.menu-wrapper')
    body!.classList.toggle('menu-active')
    menu!.classList.toggle('menu-active')
  }
}

export default header
