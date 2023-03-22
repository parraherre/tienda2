import {EjecutarApiTasa} from "../helpers/ampliarinfo.js";
import {formateador} from "../helpers/pintarProductos.js";
//LLamo a la memoria para acceder a los datos guardados:
let infoProducto=JSON.parse(localStorage.getItem("producto"))
console.log(infoProducto)

let foto=document.getElementById("foto")
foto.src=infoProducto.foto

let titulo=document.getElementById("nombre")
nombre.textContent=infoProducto.nombre

let precio=document.getElementById("precio")
precio.textContent=infoProducto.precio

let descripcion=document.getElementById("descripcion")
descripcion.textContent=infoProducto.descripcion

let infocarrito=JSON.parse(localStorage.getItem("carrito"))
let carrito
let pildora=document.getElementById("pildora")

if (infocarrito!=null) {
    carrito=infocarrito
    pildora.textContent=carrito.length
}else{
    carrito=[]
}


let botonagregarproducto=document.getElementById("btnagregarcarrito")
botonagregarproducto.addEventListener("click",function(){
    carrito.push(infoProducto)
    
    pildora.textContent=carrito.length
    localStorage.setItem("carrito",JSON.stringify(carrito))
})

// convertiendo las monedas
let botonConvertir = document.getElementById("conversor")
botonConvertir.addEventListener("click", async () => await EjecutarApiTasa())

// evitando problemas con el input de cantidad
let cantidad = document.getElementById("cantidad")
cantidad.addEventListener("keydown", (tecla) => {
    let teclasProhibidas = ["e", "-", "+", "*", "/"]
    if (teclasProhibidas.includes(tecla.key)) {
        tecla.preventDefault()
    }
})

//Subtotal
let Subtotal = document.getElementById("SpanSubtotal");
    cantidad.addEventListener("input", function () {
        console.log(cantidad.value)
        console.log(infoProducto.precio)
    let CalcularSubtotal = Number(cantidad.value) * Number(infoProducto.precio);
    Subtotal.textContent = CalcularSubtotal;
    
 })
 
let botonEliminarProducto=document.getElementById("btneliminar")
  botonEliminarProducto.addEventListener("click",function(){
    carrito.splice(infoProducto)
    pildora.textContent =carrito.length 
    localStorage.setItem("carrito",JSON.stringify(carrito))
})