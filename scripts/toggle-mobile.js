const toggleList = document.querySelector('#toggle-list');
const closeList = document.querySelector('.close-list')
const navList = document.querySelector('.nav-list');

toggleList.addEventListener('click', () => {
  navList.classList.add('nav-show');

closeList.addEventListener('click', () => {
  navList.classList.remove('nav-show');
  
})});


