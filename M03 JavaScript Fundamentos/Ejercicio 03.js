/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   if(x == y){
      return 'X es igual a Y'
   } else {
      'X no es igual a Y'
   }
}

sonIguales(2,2);


function tienenMismaLongitud(str1, str2) {
   str1.length === str2.length;
}

tienenMismaLongitud(str1,str2)

function menosQueNoventa(num) {
   if(num < 90){
      return True;
   } else {
      return False;
   }
}

menosQueNoventa(89);


function mayorQueCincuenta(num) {
   if(num > 50){
      return True;
   } else {
      return False;
   }
}

mayorQueCincuenta(125);


function esPar(num) {
   if(num%2===0){
      return True;
   } else {
      return False;
   }
}

esPar(3);


function esImpar(num) {
   if(num%2!=0){
      return True;
   } else {
      return False;
   }
}

esImpar(9);


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
