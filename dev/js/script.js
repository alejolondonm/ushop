function cambiarSeccion(idOcultar, idMostrar) {
    const seccionOcultar = document.getElementById(idOcultar);
    const seccionMostrar = document.getElementById(idMostrar);

    if (seccionOcultar && seccionMostrar) {
        seccionOcultar.classList.add('ocultar');
        seccionMostrar.classList.remove('ocultar');
    } else {
        console.error('Una o ambas secciones especificadas no existen.');
    }
}

