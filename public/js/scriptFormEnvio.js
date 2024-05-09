document.addEventListener('DOMContentLoaded', function() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    actualizarCarrito(carrito);

    const formulario = document.getElementById('formulario-pedido');
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        enviarPedido();
    });
});

function actualizarCarrito(carrito) {
    let total = 0;
    const listaProductos = document.getElementById('lista-productos');
    const totalSpan = document.getElementById('total');

    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - Cantidad: ${producto.cantidad} - Precio unitario: $${producto.precio} - Subtotal: $${producto.precio * producto.cantidad}`;
        listaProductos.appendChild(li);
        total += producto.precio * producto.cantidad;
    });

    totalSpan.textContent = `$${total}`;
}

function enviarPedido() {
    const nombre = document.getElementById('nombre').value.trim();
    // similar para otros campos
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    if (!nombre || carrito.length === 0) {
        alert('Por favor, completa todos los campos y asegúrate de tener items en el carrito');
        return;
    }

    localStorage.removeItem('carrito');
    alert('Pedido enviado correctamente!');
    window.location.href = 'index.html';
}

function cancelarPedido() {
    localStorage.removeItem('carrito');
    alert('Pedido cancelado');
    window.location.href = 'index.html';
}
