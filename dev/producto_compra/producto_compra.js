import fotoProducto1 from '../img/productos/fresas_crema.png';
import fotoProducto2 from '../img/productos/fresas_crema1.jpg';

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

document.getElementById('flecha_izquierda').addEventListener('click', function () {
    cambiarFoto('izquierda');
});

document.getElementById('flecha_derecha').addEventListener('click', function () {
    cambiarFoto('derecha');
});