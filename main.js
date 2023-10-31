const preciosFrutas = {
    manzana: 2.50,
    banano: 1.00,
    uva: 3.75,
    naranja: 1.25,
    fresa: 4.00
};

function simularCompra() {
    const seleccionFruta = document.getElementById("frutaSelect").value;
    const cantidad = parseFloat(document.getElementById("cantidadInput").value);
    
    if (!isNaN(cantidad)) {
        const precioUnitario = preciosFrutas[seleccionFruta];
        const total = precioUnitario * cantidad;
        const resultado = `Has comprado ${cantidad} ${seleccionFruta}(s) a $${precioUnitario.toFixed(2)} cada uno. Total: $${total.toFixed(2)}`;
        
        document.getElementById("resultado").textContent = resultado;
    } else {
        document.getElementById("resultado").textContent = "Ingresa una cantidad válida.";
    }
}
