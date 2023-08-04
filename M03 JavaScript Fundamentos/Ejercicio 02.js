/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   var string = 'hola';
   return string;
}

// ⛔️ "X" e "Y" son números.

function suma(x, y){
   return x +y;
}

function resta(x, y){
   return x - y;
}

function divide(x, y){
   return x / y;
}

function multiplica(x, y){
   return x * y;
}

function obtenerResto(x, y){
   return x % y;
}

suma(4,5);
resta(6,3);
divide(20,4);
multiplica(6,7);
obtenerResto(21,5);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
