let menu = document.querySelector('.menuButton');
let nav = document.querySelector('.navBar');

menu.addEventListener('click', () => {
  nav.classList.add('show')  
})
menu.addEventListener('click', () => {
  nav.classList.remove('show')  
})