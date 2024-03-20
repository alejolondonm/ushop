
document.addEventListener("DOMContentLoaded", function () {
    const categorias1 = document.getElementById("categorias-1");
    const categorias2 = document.getElementById("categorias-2");

    function cambiarCategoria() {
        categorias1.classList.toggle("ocultar");
        categorias2.classList.toggle("ocultar");
    }

    document.getElementById('cambiar-categoria-izquierda').addEventListener('click', function () {
        cambiarCategoria();
    });

    document.getElementById('cambiar-categoria-derecha').addEventListener('click', function () {
        cambiarCategoria();
    });

});
