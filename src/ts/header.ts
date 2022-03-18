/* dotの背景の円の表示を切り替え */
const toggleCircle = () => {
  const circle = document.querySelector('.circle')
  circle!.classList.toggle('menu-active')
  const dot = document.querySelectorAll('.dot')
  for (let i = 0; i < dot.length; i++) {
    dot[i].classList.toggle('menu-active')
  }
}

/* タイトルの文字色を切り替え */
const toggleTitleColor = () => {
  const title = document.querySelector('.header-container')
  title!.classList.toggle('menu-active')
}

/* メニューの表示を切り替え */
const toggleMenu = () => {
  const body = document.querySelector('body')
  const menu = document.querySelector('.menu-wrapper')
  body!.classList.toggle('menu-active')
  menu!.classList.toggle('menu-active')
}

/* メニュー左ペインの画像の出し分け（ランダム） */
const changeMenuImage = () => {
  // メニューオープン時の判定
  if (document.querySelectorAll('.menu-active').length > 0) {
    const menuId = Math.floor(Math.random() * 2) + 1
    const menuImage = document.querySelectorAll('#menu01, #menu02')
    for (let i = 0; i < menuImage.length; i++) {
      menuImage[i].classList.remove('active')
    }
    // menuId（1 or 2）をindexに直接渡すために「menuId - 1」
    menuImage[menuId - 1].classList.add('active')
  }
}

/* メニューに現在のページを表示 */
const showCurrentLocation = () => {
  const location = window.location.pathname
  const page = document.querySelectorAll('.menu .nav-main a, .menu .nav-sub a')
  for (let i = 0; i < page.length; i++) {
    page[i].classList.remove('current-page')
  }
  if (location === '/') {
    // 「Top Page」
    page[7].classList.add('current-page')
  }
}

/* Header */
const header = () => {
  const headerButton = document.querySelector('header button') as HTMLElement
  headerButton!.onclick = () => {
    toggleCircle()
    toggleTitleColor()
    toggleMenu()
    changeMenuImage()
    showCurrentLocation()
  }
}

export default header
