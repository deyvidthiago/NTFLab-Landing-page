const navItems = document.getElementById('nav-items')
const menuMobile = document.getElementById('mobile-menu')

menuMobile.addEventListener('click', () => {
  menuMobile.classList.toggle('active')
  navItems.classList.toggle('active')
})
