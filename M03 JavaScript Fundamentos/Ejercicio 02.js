/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   var string = 'hola';
   return string;
}

// ⛔️ "X" e "Y" son números.

function suma(x, y){
   var sumar = x + y;
   return sumar;
}

function resta(x, y){
   var restar = x - y;
   return restar;
}

function divide(x, y){
   var dividir = x / y;
   return dividir;
}

function multiplica(x, y){
   var multiplicar = x * y;
   return multiplicar;
}

function obtenerResto(x, y){
   var resto = x % y;
   return resto;
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
