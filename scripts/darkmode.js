
/* Dark Mode */

const html = document.querySelector('html');
const mode = document.querySelector('#mode-icon');

mode.addEventListener('click', function(){
html.classList.toggle('light-mode');
});

mode.addEventListener('click', () => {
    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        return;
    }
        mode.classList.add('fa-moon');
        mode.classList.remove('fa-sun');
    }
);


