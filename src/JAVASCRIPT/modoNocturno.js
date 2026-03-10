const nocturn = document.getElementById('nocturno');
const fons = document.body;

nocturn.addEventListener('click', ()=>{

    if (fons.style.background==='black'){
        fons.style.removeProperty('color');
        fons.style.removeProperty('background');
    } else {
        fons.style.background = 'black';
    }

});