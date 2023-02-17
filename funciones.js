const nombre    =   'Pedro'

// SCOPING --> Las funciones crean un universo paralelo y no tocan a las variables que están afuera
function saludar(name)    { // Esta es una función normal
    const nombre    =   name
    console.log("Hola   "   +   nombre)
}

saludar('Maria')

//FUNCIÓN DE FLECHA GORDA (ARROW FUNCTION)
const cubo  =   num  => num **  3

const cantidades    =   [4, 2,  3,  6,  12]

const cubos =   cantidades.map(cubo)

console.log(cubos)

//FUNCION NORMAL VS FLECHA GORDA

//normal
function puedeBeber  (edad) {
    if  (edad >= 18) {
        return  'Si puede beber'
    }   else    {
        return  'no puede beber'
    }    
}
// Flecha Gorda
const puedeBeber2   =   edad    =>  {
    if(edad >=  18) {
        return  'Si puede beber'
    }
    return  'No puede beber'
}

//Función Normal
function ninjaBelt (ninja)  {
    return function belt (beltColor)    {
        console.log("Ninja  "+  ninja+  "   has earned a    "   +   beltColor+" belt.");
    }
}
//Flecha Gorda
const ninjaBelt2    =    ninja  => 
    beltColor =>   
        console.log("Ninja  "+  ninja+  "   has earned a    "   +   beltColor+" belt.");






// DESESTRUCTURACIÓN
