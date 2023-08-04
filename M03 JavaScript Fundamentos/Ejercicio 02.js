/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu codigo:
   return string;
}

// ⛔️ "X" e "Y" son números.

function suma(x, y){
   // Retorna el resultado de la suma.
   // Tu codigo:
   var sumar = x + y;
   return sumar;
}

function resta(x, y){
   // Retorna el resultado de la resta.
   // Tu codigo:
   var restar = x - y;
   return restar;
}

function divide(x, y){
   // Retorna el resultado de la division.
   // Tu codigo:
   var dividir = x / y;
   return dividir;
}

function multiplica(x, y){
   // Retorna el resultado de la multiplicacion.
   // Tu codigo:
   var multiplicacion = x * y;
   return multiplicacion;
}

function obtenerResto(x, y){
   // Retorna el resultado del resto.
   // Tu codigo:
   var resto = x % y;
   return resto;
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
