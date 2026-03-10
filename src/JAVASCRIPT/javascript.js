/*
        PRIMERA PRACTICA
// Primera pregunta
console.log(document.querySelectorAll('li'));
// Segunda pregunta
console.log(document.querySelectorAll('li')[7]);
// Tercera pregunta
console.log(document.querySelector('h1'));
// Cuarta pregunta
let img = document.querySelector('img');
console.log(img);
console.log(img.getAttribute('alt'));
// Quinta pregunta
console.log(document.querySelector('title'));
// Sexta pregunta
console.log(document.querySelector('#centrarTitulo'));
*/
// BOTON DE MODO OSCURO/CLARO
const nocturn = document.getElementById('nocturno');
const fons = document.body;
const pieDePagina = document.getElementById('footerJavascript');

nocturn.addEventListener('click', ()=>{

    if (fons.style.background==='black' && fons.style.color==='white'){
        fons.style.removeProperty('color');
        fons.style.removeProperty('background');
        pieDePagina.style.removeProperty('color');
        pieDePagina.style.removeProperty('background');
    } else {
        fons.style.background = 'black';
        fons.style.color = 'white';
        pieDePagina.style.background = 'black';
        pieDePagina.style.color = 'white';
    }

});