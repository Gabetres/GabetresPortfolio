/* Dark Mode */

const html = document.querySelector('html');
const mode = document.querySelector('#mode-icon');
const mailL = document.querySelector('#mail-light')
const mailD = document.querySelector('#mail-dark')
const gabrielL = document.querySelector('#gabriel-light')
const gabrielD = document.querySelector('#gabriel-dark')
const notebookD = document.querySelector('#notebook-dark')
const notebookL = document.querySelector('#notebook-light')

mode.addEventListener('click', function(){
html.classList.toggle('dark-mode');
});

mode.addEventListener('click', () => {
    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        mailL.classList.toggle('d-lg-none');
        mailD.classList.toggle('d-lg-inline');
        gabrielL.classList.toggle('d-sm-none');
        gabrielD.classList.toggle('d-sm-inline');
        notebookL.classList.toggle('d-md-none');
        notebookD.classList.toggle('d-md-inline');

        return;
    }
        mode.classList.add('fa-moon');
        mode.classList.remove('fa-sun');
        mailL.classList.toggle('d-lg-none');
        mailD.classList.toggle('d-lg-inline');
        gabrielL.classList.toggle('d-sm-none');
        gabrielD.classList.toggle('d-sm-inline');
        notebookL.classList.toggle('d-md-none');
        notebookD.classList.toggle('d-md-inline');
    }   
);


