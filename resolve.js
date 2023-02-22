/******************************/
/* Ejercicios con funciones: */
/*****************************/

{
    // Declara una función que reciba como parámetro nombre y edad y que imprima en consola: "Hola, mi nombre es [nombre] y tengo [edad] años".

    function presentation(nameUser, ageUser) {
        return `Hola, mi nombre es ${nameUser} y tengo ${ageUser} años`;
    }

    //console.log(presentation("brayan", 22));
}

{
    /*
1 - Declara una variable global llamada saludo y colocale como valor "Hola los saludo desde:"
2 - Declara una función sin parámetros, dentro crea una varaible local llamada pais y colócala como valor el país de donde vienes.
3 - Tu función debe mostrar por consola: "Hola los saludo desde: [pais]".
*/

    // let a = "brayan";
    // let b = 22;

    // console.log("hola", a, "edad:", b); 😒

    const greeting = "Hola los saludo desde:";

    function greetingFrom() {
        const country = "Colombia";

        // return greeting + country;
        // return greeting + " " + country; // concatenar
        // return `${greeting} ${country}`; // interpolacion
    }

    console.log(greetingFrom());
}

{
    // Declara una función que reciba como parámetro numero y numero2 y que retorne el resultado de la suma de ambos.
    function addNumbers(n1, n2) {
        return n1 + n2;
    }

    const res1 = addNumbers(1, 2); // 3
    const res2 = addNumbers(1, 4); // 5

    // Con el valor retornado de la función anterior realiza una función que reciba como parámetro ese resultado y que retorne el doble del resultado.
    function addNumbersDouble(result) {
        return result * 2;
    }

    console.log(addNumbersDouble(res1)); // 3 * 2 => 6
    console.log(addNumbersDouble(res2)); // 5 * 2 => 10
}

{
    // Crea una función que retorne un mensaje de bienvenida, recibiendo como parámetro el nombre de la persona, pero si no se recibe ningún parámetro debe retornar "Bienvenido Anónimo".

    // function welcome(user) {
    //     return user ? user : "Bienvenido Anónimo";
    // }

    // function welcome(user) {
    //     user = user || "Bienvenido Anónimo";
    //     return user;
    // }

    function welcome(user = "Bienvenido Anónimo") {
        return user;
    }

    // console.log(welcome("brayan"));
}

{
    // Crea una función que compruebe si 2 números son iguales. Si lo son, retorna true, si no, retorna false.

    function checkNumbers(n1, n2) {
        // if(n1 === n2) {
        //     return true
        // } else {
        //     false
        // }

        // return n1 === n2 ? true : false

        return n1 === n2;
    }

    // console.log(checkNumbers(1, 2)); // false
    // console.log(checkNumbers(1, 1)); // true
}
