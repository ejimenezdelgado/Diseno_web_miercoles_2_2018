var tienda = {
    nombre: "Tienda las 4 esquinas",
    calcular: function (costo1, costo2) {
        return costo1 + costo2;
    },
    saludar: function () {
        var mensaje = "Hola ";
        return mensaje;
    }
};

var tienda2 = {
    nombre: "Tienda las 4 esquinas",
    calcular: function (costo1, costo2) {
        return costo1 + costo2;
    },
    saludar: function () {
        var mensaje = "Hola ";
        return mensaje;
    }
};

var tiendas = []
tiendas.push(tienda);
tiendas.push(tienda2);

console.log(tiendas[1].nombre);
console.log(tienda.calcular(20, 32));
console.log(tienda.saludar());

var btnSaludar = document.getElementById("btnSaludar");

btnSaludar.addEventListener('click', function () {
    console.log(tienda.saludar());
});