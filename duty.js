// /****************************/
// /* Ejercicios con strings: */
// /***************************/
// // Pudes usar los métodos de strings vistos en clase

// // Ejemplo: Declara una funcion que retorne el número de caracteres que tiene una cadena de texto (longitud).

// // Declara una función que reciba como parámetro una frase y una palabra y que retorne true si la frase contiene la palabra, false si no.
// const frase = "Hola, mi nombre es Juan y tengo 23 años";
// const palabra = "Juan";

// // Declara una función que regrese la longitud de la última palabra de una frase.
// const frase2 = "Aprendiendo Fundamentos de JavaScript";

// // Declara una función que reciba como parámetro una frase y una palabra, deberá reemplazar la última palabra de la frase por la otra palabra.
// const frase3 = "El perro come pescado";
// const remplazo = "croquetas";

// // Declara una función que reciba como parámetro 3 cadenas de texto, deberas extraer las edades de cada una de ellas y retornar la suma de ellas.
// // La edad siempre será la penúltima palabra de la cadena.
// const cadena = "Hola, mi nombre es Erik y tengo 30 años";
// const cadena2 = "Hola, mi nombre es Brayan y tengo 25 años";
// const cadena3 = "Hola, mi nombre es Andres y tengo 40 años";

// // Declara una función que reciba como parámetro una cadena de texto y un número, deberá retornar la cadena repetida n veces siendo n el número recibido.
// const cadena4 = "Hola ";
// const numero = 3;

// // Declara una función que reciba como parámetro una cadena de texto que deberá retornar la cadena en un arreglo y en minisulas.
// const cadena5 = "HoLa cOMo eStas";


// let a = "Hola soy german";

// function wordLastReverse(str) {

  
//   return str.split('').reverse().join('').slice(-1,-2);
// }
// console.log(wordLastReverse(a));

// function wordLastReverse(str) {
//     return words = str.split(" ").slice(-2).word.reverse().join("");
//     // return reversedWords = words.slice(-2).map(word => word.split("").reverse().join(""));
//     // return reversedWords.length ? reversedWords.join(" ") : "";
//   }
  

//   console.log(wordLastReverse("Hola soy el nuevo german"));


// function deleteForChar(str, charDelete) {
//   return str.split(charDelete).join(" ");
// }

// console.log(deleteForChar('Hola-mi-nombre-es-juan', '-'));

// function wordLastReverse(string) {
//   const words = string.split(" ");
//   return words[words.length - 1].concat(words[words.length - 2]).split("").reverse().join("");
// }
// console.log(wordLastReverse('Hola mi nombre es juan'));


// function wordLastReverse(str) {
  
//   return str.split("").split(" ");
// }

// console.log(wordLastReverse("Hola"));


// function findLastLetter(text) {
//   return text.at(-1)
// }

// console.log(findLastLetter("juank"));

// function findLastWord(text) {
//   // escribe tu solución aquí
//   let word = text.split(" ");
//   let ultimapalabra = word[word.length - 1];
//   return ultimapalabra
// }

// console.log(findLastWord('juan me llamo juan benedicto'));



// function findSecondWord(text) {
 
//   return text.split(" ").slice(1,2).join('');;
// }
// console.log(findSecondWord("Hola, me llamo Erik"));


//Condicionales

// function name(params) {
//   let age = 20;
  
//   if(age < 18) {
//     console.log("Es menor de edad");
//   } else if(age >= 40 ) { 
//     console.log("Es mayor de 40 años");
//   } else {
//     console.log("Es mayor de la 3era edad");
//   }
// }

// function multiplosN(num) {
//   for (let i = 0; i <= 12; i++) {
//     console.log(num + ' * ' + i + ' = ' + num * i );
    
//   }

// }

// multiplosN(5)


// // function name(params) {
  
// // }


/***************************/
/* Ejercicios con bucles: */
/**************************/

// 1. Crea un arreglo con los números del 1 al 400

// const newArray = [];

// function arrayNum(numbersonetofor) {
//   for (let i = 1; i < numbersonetofor; i++){
//     newArray.push(i);
//   }
//   return newArray;
// }

// console.log(arrayNum(400))

// 2. Crea una función que reciba como parámetros 2 números, y retorne un arreglo con todos los valores en el rango de esos 2 números (incluyéndolos), por ejemplo, si recibe 1 y 4 la función debe de retornar el arreglo [1, 2, 3, 4], asumiremos que el segundo parámetro recibido es mayor al primero.



// 3. Crea una función que lea un array de N cantidad de números y retorne la suma de todos esos números.

// 4. Crea una función que reciba como parámetro un array de N cantidad de elementos y retorne el elemento que se encuentra en la mitad
//    - En caso de que el número de la mitad sea uno solo el programa debe devolverlo, por ejemplo, del arreglo [1, 3, 4] devolvemos el 3
//    - En caso de que hayan 2 números en medio devolveremos un array de números, por ejemplo, en el array [1, 3, 4, 5, 5, 3] devolveremos [4, 5]








// Escribir una función que tome dos números como argumentos 
// y devuelva el mayor de ellos.


// function biggerNumber(num1, num2) {
//   return num1 > num2 ? num1 : num2
// }

// console.log(biggerNumber(7,7));

// function findMax(num1, num2) {
//   return Math.min(num1, num2);
// }

// if (num1 > num2) {
//   return num1;
// } else {
//   return num2;
// }


// Escribir una función que calcule el factorial de un número dado.


// function name(params) {
  

// }

// // Escribir una función que determine si un número dado es un número primo o no.

// function name(params) {
  
// }

// // Escribir una función que tome una cadena como argumento y devuelva la misma cadena invertida.



// // Escribir una función que calcule la suma de los elementos de un arreglo dado.






// Escribir una función que tome un número 
// entero y devuelva un arreglo con todos los 
// números primos hasta ese número.





// Escribir una función que tome una cadena como argumento y devuelva la misma cadena sin espacios en blanco.



// Escribir una función que tome una matriz como argumento y devuelva la transpuesta de la misma.



// Escribir una función que tome una matriz de números como argumento y devuelva la suma de todos sus elementos.



// Escribir una función que tome una cadena como argumento y devuelva la misma cadena con las letras invertidas, pero manteniendo las palabras en su orden original.






// Tu labor es encontrar y retornar la letra que se repite más veces.

// Ejemplo:
// Si recibes la frase 'Hola, me gusta la programación' 
// tienes que retornar la letra a ya que esta es la que se repite más veces

// *Recuerda utilizar return para devolver tu solución.
// *El string que recibe la función puede ser cualquiera.


// function repeatLetter(strLetter) {
//   let frec = {};
//   for (let i = 0; i < strLetter.length; i++) {
//     let char = strLetter[i];
//     if (frec[char]){
//       frec[char]++;
//     }else {
//       frec[char] = 1;
//     }
//   }
//   let maxLetter = "";
//   let maxFrec = 0;
//   for (let letter in frec) {
//     if(frec[letter] > maxFrec){
//       maxLetter = letter;
//       maxFrec = frec[letter];
//     }
//   }
//   return maxLetter + " " + maxFrec;
// }
// console.log(repeatLetter("Hole, me guste le programación"));



// function getNMultiples(num1, num2) {
//   let numbers = [];
//   for (let i = 2; i <= num2 + 1; i++) {
//     numbers.push(num1 * i);
//   } 
//   return numbers;
// }
// console.log(getNMultiples(20,2));




// const person = {
//     name: "Juan",
//     age: 22,
// };



// function sumValues(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

//   console.log(sumValues([1,2,3]));


// function getEmail(obj) {
//   return obj.email;
// }

// console.log(getEmail({name:"Erik", email: "Erik@academlo.com"}));

// function getEmails(arrayObject) {
//   let emails = [];
//   let edad = [];
//   for (let i = 0; i < arrayObject.length; i++) {
//     emails.push(arrayObject[i].email);
//     edad.push(arrayObject[i].age);
//   }
//   return emails + " " + edad;
// }

// console.log(getEmails(
//   [
//     { name: "Erik", email: "erik@academlo.com", age: 20 },
//     { name: "Georg", email: "georg@academlo.com", age: 30 },
//     { name: "Daniel", email: "daniel@academlo.com", age: 40 }
//   ]));

//  pregunta 7 del split

// function deleteUser(users, email) {
  
//   for(i = 0; i < users.length; i++){
//     if (users[i].email === email) {
//       users.splice(i, 1);
//       break;
//     }

//   }
//   return users;
// }

// console.log(deleteUser( users = [{ name: 'Erik', email: 'erik@academlo.com' },
//  { name: 'Georg', email: 'georg@academlo.com' },
//  { name: 'Andrea', email: 'andrea@gmail.com' }]));

// function twoNumbers(num1, num2) {
//   return num1 + num2;
// }

// console.log(twoNumbers(1,3));


// function arrat(arrayArg) {
  
// }

// function par(num) {
//   if(num % 2 === 0) {
//     return "Es par" 
//   }
//     return "Es impar"
// }

// console.log(par(30));

// function text(str) {
//   return str.toUpperCase();
// }

// console.log(text("Juan"));

// Escribe una función que tome un arreglo de números como argumento y devuelva un 
// nuevo arreglo con todos los números multiplicados por 2.


// function name(params) {
  
// }

// Escribe una función que tome un objeto como argumento y devuelva un arreglo con todas las claves del objeto.

// Escribe una función que tome un número como argumento y devuelva un arreglo con todos los números desde 1 hasta ese número.

// Escribe una función que tome un arreglo de números como argumento y devuelva la suma de todos los números.

// Escribe una función que tome un arreglo de números como argumento y devuelva el número más pequeño del arreglo.

// Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena pero con todas las vocales reemplazadas por el carácter "*".



//   function orderStudentsByScore(students) {
//     students.sort((a, b) => a.score - b.score);
//     return students;
//   }
// console.log(orderStudentsByScore([
//   { name: 'Georg', email: 'georg@academlo.com', score: 100 },
//   { name: 'Andrea', email: 'andrea@gmail.com', score: 70 },
//   { name: 'Andrés', email: 'andres@gmail.com', score: 34 }
// ]));


// function countStudents(students, countries, countryName) {
//   const country = countries.find(c => c.name === countryName);
//   if (!country) {
//     return "No es un pais";
//   }

//   const studentsInCountry = students.filter(s => s.country_id === country.id);
//   const count = studentsInCountry.length;
//   return count;
// }

// console.log(countStudents([
//   { name: 'Georg', email: 'georg@academlo.com', country_id: 1 },
//   { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2 },
//   { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2 },
//   { name: 'Mónica', email: 'monica@gmail.com', country_id: 2 }
// ],[
//   { id: 1, name: 'Mexico', },
//   { id: 2, name: 'Colombia' }
// ],'Colombia'));


// function bucleFor(num) {

//   let sum = "";
//   for (let i = 0; i <= num; i++) {
//     sum += i + "";
//   }
//   return sum;
// }

// console.log(bucleFor(10));


function printNumbers() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
