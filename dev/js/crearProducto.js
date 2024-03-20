import fotoProducto1 from '../img/productos/cd1.jpg';
import fotoProducto2 from '../img/productos/cd2.jpg';

let indiceFoto = 0;

const fotos = [fotoProducto1, fotoProducto2];

function cambiarFoto(direccion) {
    if (direccion === 'izquierda') {
        indiceFoto = (indiceFoto - 1 + fotos.length) % fotos.length;
    } else if (direccion === 'derecha') {
        indiceFoto = (indiceFoto + 1) % fotos.length;
    }
    document.querySelector('.foto_producto').src = fotos[indiceFoto];
}

function actualizarPuntos() {
    const puntos = document.querySelectorAll('.punto');
    puntos.forEach((punto, index) => {
        if (index === indiceFoto) {
            punto.classList.add('seleccionado');
        } else {
            punto.classList.remove('seleccionado');
        }
    });
}


document.getElementById('flecha_izquierda').addEventListener('click', function () {
    cambiarFoto('izquierda');
    actualizarPuntos();
});

document.getElementById('flecha_derecha').addEventListener('click', function () {
    cambiarFoto('derecha');
    actualizarPuntos();
});