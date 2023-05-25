/* Dark Mode */

const html = document.querySelector('html');
const mode = document.querySelector('#mode-icon');
const mailD = document.querySelector('#mail-dark')
const mailL = document.querySelector('#mail-light')
const gabrielD = document.querySelector('#gabriel-dark')
const gabrielL = document.querySelector('#gabriel-light')
const notebookL = document.querySelector('#notebook-light')
const notebookD = document.querySelector('#notebook-dark')

mode.addEventListener('click', function(){
html.classList.toggle('light-mode');
});

mode.addEventListener('click', () => {
    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        mailD.classList.toggle('d-lg-none');
        mailL.classList.toggle('d-lg-inline');
        gabrielD.classList.toggle('d-sm-none');
        gabrielL.classList.toggle('d-sm-inline');
        notebookD.classList.toggle('d-md-none');
        notebookL.classList.toggle('d-md-inline');

        return;
    }
        mode.classList.add('fa-moon');
        mode.classList.remove('fa-sun');
        mailD.classList.toggle('d-lg-none');
        mailL.classList.toggle('d-lg-inline');
        gabrielD.classList.toggle('d-sm-none');
        gabrielL.classList.toggle('d-sm-inline');
        notebookD.classList.toggle('d-md-none');
        notebookL.classList.toggle('d-md-inline');
    }   
);


