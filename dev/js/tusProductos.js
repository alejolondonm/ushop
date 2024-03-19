const interruptor = document.getElementById("interruptor");
const estadoInterruptor = document.getElementById("estado-interruptor");

interruptor.addEventListener("change", function() {
    if (this.checked) {
        estadoInterruptor.textContent = "Desactivar";
        estadoInterruptor.classList.add('switch-desactivado');
    } else {
        estadoInterruptor.textContent = "Activar";
        estadoInterruptor.classList.remove('switch-desactivado');
    }
});