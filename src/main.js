
/*document.getElementById('checkIn').addEventListener('click', () => {
    window.socialNetwork.registrar()
});*/

function origen(){
    document.getElementById('muro').style.display='none';
}
document.getElementById('origin').addEventListener('onload',origen());




//mi llamada del boton con la funcion registro en data.js
document.getElementById('checkIn').addEventListener('click', window.socialNetwork.registrar);

function muro(){
    
    document.getElementById('registrar').style.display='none';
    document.getElementById('muro').style.display='block';
}

document.getElementById('checkIn').addEventListener('click', muro);
