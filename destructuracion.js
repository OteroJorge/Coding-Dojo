// Desestructuración es cuando tomo partes de un conjunto de datos complejos: los objetos y los arreglos.

const mascota   =   {
    nombre: 'Rockie',
    especie:    'Perro',
    raza:   'Quilterrier',
    vacunas:    ['Octuple', 'Antirrabica', 'Antiparasitaria'],
    color:  'Café',
} 
// mascota es una variable de tipo Objeto que tiene 5 propiedades.
//Si yo quisiera guardar 3 de las propiedades como variables, debería hacer lo siguiente:

const {nombre, especie, raza}   =   mascota
// Esto es desestructurar, es tomar un tipo de datos complejos y separarlo en sus partes.

//para agregar más vacunas (array), por ejemplo, hago lo siguiente:
vacunas.push('Antipulgas')

//También puedo desestructurar un Array (Arreglo):
const {primera, segunda, ... resto}  =   vacunas
// Si quiero desestructurar la segunda vacuna saltandome la primera, pongo una coma, antes:
const {vacunas:[, segunda] }
// Los tres puntitos (antes del resto) es el operador sread, porque si no le pongo los tres
// puntitos no me muestra el resto para adelante de las propiedades. 

//El SREAD lo puedo ocupar para otro tipo de variables. 
//Por ejemplo, con la variable mascota:
const {nombre, especie, ... resto}    =   mascota

//Los tipos de datos sencillos como los números, booleanos, strings y undefined se crean una copia de sí mismos, son todas variables que se pasan como Valor.
// Cada una es independiente de la otra, una vez que se crean, se vale por sí misma. 
// Distinto es cuando se crea una variable compleja,  por ejemplo, los alumnos:
const alumnos ['Italo',     'Ignacio',  'Marion']
//le agrego otra variable
const student   =   alumnos
//ahora Students va a valer lo mismo que alumnos
alumnos.push('Fernanda')
// Student va a tener a los 3 primeros alumnos más Fernanda
//las variables complejas,tanto los Objetos como los Array, a diferencia de las simples, se definen por su referencia. 



