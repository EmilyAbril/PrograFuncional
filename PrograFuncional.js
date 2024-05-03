
const productos = [
    { clave: 1, descripcion: 'Producto 1', precio: 10.50, clasificacion: 'A', existencia: 45, existenciaMinima: 99, existenciaMaxima: 77 },
    { clave: 2, descripcion: 'Producto 2', precio: 20.00, clasificacion: 'B', existencia: 57, existenciaMinima: 20, existenciaMaxima: 22 },
    { clave: 3, descripcion: 'Producto 3', precio: 30.50, clasificacion: 'A', existencia: 10, existenciaMinima: 10, existenciaMaxima: 23},
    { clave: 4, descripcion: 'Producto 4', precio: 25.00, clasificacion: 'C', existencia: 19, existenciaMinima: 15, existenciaMaxima: 23},
    { clave: 5, descripcion: 'Producto 5', precio: 40.00, clasificacion: 'B', existencia: 11, existenciaMinima: 10, existenciaMaxima: 32 }
];


const contarPorClasificacion = () => {

    const productosAgrupadosClasificacion = {};
    productos.forEach(producto => {
        productosAgrupadosClasificacion[producto.clasificacion] = productosAgrupadosClasificacion[producto.clasificacion] ? productosAgrupadosClasificacion[producto.clasificacion] + 1 : 1;
    });
    return productosAgrupadosClasificacion;

};


const productosMayor20 = productos.filter(producto => producto.existencia > 20);
console.log("Número de productos con existencia mayor a 20:", productosMayor20.length);



const productosMenor15 = productos.filter(producto => producto.existencia < 15);
console.log("Número de productos con existencia menor a 15:", productosMenor15.length);


const productosClasificacionPrecioMayor = productos.filter(producto => producto.clasificacion === 'A' && producto.precio > 15.50);
console.log("Lista de productos con la misma clasificación y precio mayor a 15.50:");
productosClasificacionPrecioMayor.forEach(producto => console.log(producto.descripcion));



const productosPrecioEntre = productos.filter(producto => producto.precio > 20.30 && producto.precio < 45.00);
console.log("Lista de productos con precio mayor a 20.30 y menor a 45.00:");
productosPrecioEntre.forEach(producto => console.log(producto.descripcion));


console.log("Número de productos agrupados por su clasificación:", contarPorClasificacion());

