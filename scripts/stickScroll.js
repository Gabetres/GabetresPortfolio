window.addEventListener('scroll', function(){
    var menu = document.querySelector('header');
    menu.classList.toggle('sticky', window.pageYOffset > 0);
  })