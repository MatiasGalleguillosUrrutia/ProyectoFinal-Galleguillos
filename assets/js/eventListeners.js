function inicializarEventos() {
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('vaciar-carrito').addEventListener('click', function (e) {
            e.preventDefault();
            carrito.vaciar();
            actualizarTablaCarrito();
        });

        actualizarTablaCarrito(); // Cargar la tabla con los datos del carrito al cargar la página
    });
}
