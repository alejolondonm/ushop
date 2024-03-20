import fotoProducto1 from '../img/productos/fresas_crema.png';
import fotoProducto2 from '../img/productos/fresas_crema1.jpg';
import fotoCrear1 from '../img/productos/cd1.jpg';
import fotoCrear2 from '../img/productos/cd2.jpg';
document.addEventListener("DOMContentLoaded", function () {


    let indiceFoto = 0;
    let indiceFotoCrear = 0;
    const fotos = [fotoProducto1, fotoProducto2];
    const fotosCrear = [fotoCrear1, fotoCrear2];
    const interruptor = document.getElementById("interruptor");
    const estadoInterruptor = document.getElementById("estado-interruptor");
    const categorias1 = document.getElementById("categorias-1");
    const categorias2 = document.getElementById("categorias-2");
    const puntos = document.querySelectorAll('.punto');

    function cambiarFoto(direccion) {
        if (direccion === 'izquierda') {
            indiceFoto = (indiceFoto - 1 + fotos.length) % fotos.length;
        } else if (direccion === 'derecha') {
            indiceFoto = (indiceFoto + 1) % fotos.length;
        }
        document.querySelector('.foto_producto').src = fotos[indiceFoto];

        puntos.forEach((punto, index) => {
            if (index === indiceFoto) {
                punto.classList.add('seleccionado');
            } else {
                punto.classList.remove('seleccionado');
            }
        });
    }

    function cambiarFotoCrear(direccion) {
        if (direccion === 'izquierda') {
            indiceFotoCrear = (indiceFotoCrear - 1 + fotosCrear.length) % fotosCrear.length;
        } else if (direccion === 'derecha') {
            indiceFotoCrear = (indiceFotoCrear + 1) % fotosCrear.length;
        }
        document.querySelector('.foto_producto_crear').src = fotosCrear[indiceFotoCrear];
    }


    function cambiarCategoria() {
        categorias1.classList.toggle("ocultar");
        categorias2.classList.toggle("ocultar");
    }

    interruptor.addEventListener("change", function () {
        if (this.checked) {
            estadoInterruptor.textContent = "Desactivar";
            estadoInterruptor.classList.add('switch-desactivado');
        } else {
            estadoInterruptor.textContent = "Activar";
            estadoInterruptor.classList.remove('switch-desactivado');
        }
    });

    document.getElementById('flecha_izquierda').addEventListener('click', function () {
        cambiarFoto('izquierda');
        actualizarPuntos();
    });

    document.getElementById('flecha_derecha').addEventListener('click', function () {
        cambiarFoto('derecha');
        actualizarPuntos();
    });

    document.getElementById('flecha_izquierda_crear').addEventListener('click', function () {
        cambiarFotoCrear('izquierda');
        actualizarPuntos();
    });

    document.getElementById('flecha_derecha_crear').addEventListener('click', function () {
        cambiarFotoCrear('derecha');
        actualizarPuntos();
    });

    document.getElementById('flecha_izquierda_detalles').addEventListener('click', function () {
        cambiarFotoCrear('izquierda');
        actualizarPuntos();
    });

    document.getElementById('flecha_derecha_detalles').addEventListener('click', function () {
        cambiarFotoCrear('derecha');
        actualizarPuntos();
    });

    document.getElementById('cambiar-categoria-izquierda').addEventListener('click', function () {
        cambiarCategoria();
    });

    document.getElementById('cambiar-categoria-derecha').addEventListener('click', function () {
        cambiarCategoria();
    });
});


