/* Dark Mode */

const html = document.querySelector('html');
const mode = document.querySelector('#mode-icon');
const mailD = document.querySelector('#mail-dark')
const mailL = document.querySelector('#mail-light')

mode.addEventListener('click', function(){
html.classList.toggle('light-mode');
});

mode.addEventListener('click', () => {
    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        mailL.style.display="none"
        mailD.style.display="inline"



        return;
    }
        mode.classList.add('fa-moon');
        mode.classList.remove('fa-sun');
        mailD.style.display="none"
        mailL.style.display="inline"
    }   
);


