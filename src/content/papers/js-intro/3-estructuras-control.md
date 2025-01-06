---
title: Estructuras de control
description: Sentencias de control en JavaScript
date: 2021-08-31
tags: [javascript, sentencias, control, iteraciones, condiciones]
serie:  {"id": 2, "title": "JS Basics"}
serieOrder: 3
---

- Concepto
- Iteraciones (Bucles)
  - Números aleatorios
  - While
  - For
  - Iterables
  - Arrays multi dimensionales. Bucles anidados
- Condiciones
  - If - else
  - Switch - case

## Concepto

Ya sabemos que nuestros programas son uns serie de **sentencias** que se ejecutan una tras otra. Sin embargo solo esto, sería una forma muy limitada de organizar el código. Po eso surgen los **bloques**, limitados mediante llaves ({}) y la posibilidad de utilizarlos en al menos tres estructuras de control del flujo se la aplicación.

- las **funciones**: bloque de código que pueden tener un nombre y ser ejecutados cada vez que se invocan.
- las **iteraciones**, que permiten repetir un bloque un número determinado de veces
- las **condiciones**, que permiten decidir si un bloque se ejecuta o no en función del valor devuelto por una expresión.

---

🥷 En JS original sólo lo hacían las funciones, pero en ES6+, cualquier bloque de código delimita un **ámbito (scope) de memoria**. Las variables declaradas con let y const existen solo en ese ámbito y nunca pueden ser accedidas desde otros ámbitos por encima de aquel en el que se han declarado.

---

🎯 Las **funciones** son sin duda las estructuras más importantes de JS y a ellas dedicaremos gran parte de nuestra formación, pero por ahora vamos a trabajar sin crear funciones

## Iteraciones (Bucles)

JS proporciona dos tipos de estructuras de iteración

- las que dependen de una condición indepenciente del número de ciclos, normalmente mediante `while` y `do ... while`
- las que se ejecutan un número determinado de veces, normalmente mediante diversas variaciones de `for`

### Números aleatorios

En JavaScript disponemos de un objeto Math que nos proporciona diversas constantes matemáticas (como Math.PI), junto con métodos de cálculo, como **Math.random()**, que nos interesa en este momento.

Este método genera un número aleatorio decimal (punto flotante) desde 0 hasta el valor inmediatamente anterior a 1.

Frecuentemente querremos un entero dentro de un **rango**, entre min y max, por ejemplo entre 0 y 10).

Para ello, sin min es 0, multiplicamos el valor aleatorio por max y lo redondeamos, usando de nuevo un método de Math, en este caso Math.round()

```js
const max = 2;
const randomNumber = Math.round(Math.random() * max);
console.log(randomNumber);
```

> 🛠️ Si ejecutas este código varias veces, veras como obtienes 0, 1 o 2.

Si el rango no empieza en 0, el código sera el siguiente.

```js
const min = 1;
const max = 2;
const randomNumber = Math.round(Math.random() * (max - min) + min);
console.log(randomNumber);
```

### While

Permite hacer una iteración mientras se cumpla una condición, sin saber a priori cuantos resultados obtenemos.

Por ejemplo, queremos tirar un dada hasta que nos salga un 6

```js
const min = 1;
const max = 6;
let r = 0;
while (r < 6) {
  r = Math.round(Math.random() * (max - min) + min);
  console.log(r);
}
console.log("Fin de la serie");
```

En el inicio del bucle definimos la condición.
Si se cumple, se ejecuta el bloque.
Se evalúa de nuevo la condición.
Si se cumple, se ejecuta nuevamente el bloque.
Y así hasta que la condición no se cumpla.
Sólo entonces se continúa ejecutando el código posterior al bloque.

Aunque no sabemos el número de vueltas que se producirán, podemos incorporar un contador que nos indique en que iteración estamos. Será el código del bloque el responsable de mantenerlo actualizado

```js
const min = 1;
const max = 6;
let r = 0;
let i = 0;
while (r < 6) {
  r = Math.round(Math.random() * (max - min) + min);
  i++;
  console.log(`La tirada ${i} vale ${r}`);
}
console.log(`Fin de la serie de ${i} tiradas`);
```

---

🥷 Si la condición hace referencia al contador, y el bucle lo actualiza como en el ejemplo, podríamos emular en el while el comportamiento que luego veremos en el for

---

Existe una variación de esta estructura, el **do...while**, que evalúa la condición al final, en lugar de al principio, pero en nuestro ejemplo funcionaría exactamente igual.

```js
const min = 1;
const max = 6;
// Aunque r comienza en 6, el bucle funciona
// porque el valor de r se evalúa después de la primera ejecución del bloque
// por tanto con el primer número random
let r = 6;
let i = 0;
do {
  r = Math.round(Math.random() * (max - min) + min);
  i++;
  console.log(`La tirada ${i} vale ${r}`);
} while (r < 6);
console.log(`Fin de la serie de ${i} tiradas`);
```

### For

Permite hacer una iteración un determinado número de veces, que definimos a priori.

Por ejemplo, queremos tirar un dado 10 veces

```js
const min = 1
const max = 6;
for (let i = 0; i < 10, i++) {
    const r =  Math.round(Math.random()*(max-min) + min);
    console.log(r);
}
```

En la estructura del for incluimos 3 sentencias de ejecución (separadas por ;)

- la que declara una variable contador (generalmente llamada i, de índice) y le asigna el valor inicial, habitualmente 0 o 1
- la que establece la condición que debe cumplirse para que se ejecute la siguiente interacción, normalmente en función del valor del contador
- la que define como se modifica el contador en cada vuelta, normalmente incrementando en 1. la expresión i++ es una forma abreviada de i = i + 1

---

🥷 También puede haber iteraciones en sentido inverso, empezando en un valor y restando 1 en cada vuelta. Igualmente es posible, aunque no lo mas habitual incrementar o decrementar el contador en una cantidad distinta de 1.

---

Dentro del bloque del for podemos evaluar una condición mediante if, y disponemos de dos operaciones posibles

- `break`, permite abandonar el bucle y continuar con el código posterior al bloque
- `continue`, permite abandonar la iteración actual: el contador aumenta en 1 y el ciclo de iteraciones sigue su curso

### Iterables

Son las estructuras de datos que se pueden recorrer mediante un for, como es el caso de arrays y de strings.

```js
const users = ["Pepe", "Luisa", "Elena", "Ernesto"];
for (let i = 0; i < users.length; i++) {
  const item = users[i];
  console.log(`Hola, soy ${item}, el usuario número ${i + 1}`);
}
console.log("Esto es todo");
```

En cada vuelta o iteración tenemos dos elementos

- el indice i, que recoge la posición en la que estamos
- el iterador, que recoge el valor de la posición. Puede ser una variable, en nuestro ejemplo item, o simplemente la expresión que asignamos a esa variable, array[i].

🎯 Muchos de los problemas al recorrer un array vienen de confundir estos elementos.

> 🛠️ Observa que al indicar la posición en la consola empleamos i + 1: el mundo no entiende que empecemos a contar desde 0, así que hacemos las cuentas desde 1.

Como hemos visto los string también son iterables.

```js
const word = "Elefante";
for (let i = 0; i < word.length; i++) {
  const item = word[i];
  console.log(`Hola, la letra ${i + 1} de ${word} es ${item}`);
}
console.log("Esto es todo");
```

En el caso de los arrays, en cada iteración podemos no solo mostrar el valor, sino también modificarlo.

Por ejemplo, queremos los cuadrados de los números de un array.

```js
const numbers = [12, 25, 31, 42, 52];
console.log(numbers); // [ 12, 25, 31, 42, 52 ]
for (let i = 0; i < numbers.length; i++) {
  let item = numbers[i];
  numbers[i] = item * item;
}
console.log(numbers); // [ 144, 625, 961, 1764, 2704 ]
```

En el caso de los strings, no es posible cambiar el valor de cada posición: son iterables de solo lectura.

## Condiciones

### If - else

La estructura **if** permite definir una condición asociada a un bloque, que se ejecutará solo si se cumple dicha condición. Se puede complementar con el **else** para indicar el bloque alternativo, que se ejecutará si no se cumple la condición.

En nuestro ejemplo vamos a distinguir pares e impares.
Para ello tenemos el operador de modulo o resto (%) que devuelve el resto de una división

- en los pares el resto es 0: n%2 = 0
- en los impares es 1: n%2 = 1

```js
const max = 100;
const num = Math.round(Math.random() * max);

if (num % 2 === 0) {
  console.log(`El número ${num} es par`);
} else {
  console.log(`El número ${num} es impar`);
}
```

Si se necesita evaluar mas posibilidades se pueden añadir todas las condiciones requeridas, mediante else if

```js
const user = { age: 10, name: `Pepe`, gender: "male" };

if (user.age <= 10) {
  console.log("Los niños no pueden entrar");
} else if (user.age < 18) {
  console.log("Los menores deben ir acompañados");
} else if (user.gender === "male") {
  console.log(`Bienvenido, ${user.name}`);
} else {
  console.log(`Bienvenida, ${user.name}`);
}
```

> 🛠️ Prueba este código cambiando los valores de las propiedades del objeto

### Switch - case

Una estructura similar a la anterior, para el caso en que todas los condiciones se refieran a la misma variable, es el **switch ... case**.

```js
const language = "En";
let greeting;
switch (language) {
  case "En":
    greeting = "Hello my friend";
    break;
  case "Es":
    greeting = "Hola amigo";
    break;
  case "Fr":
    greeting = "Salut mon ami";
    break;
  case "De":
    greeting = "Hallo Freund";
    break;
  default:
    greeting = "Hi";
    break;
}
console.log(greeting);
```

> 🛠️ Prueba este código cambiando los valores de la variable `language`

Observa que al final de cada caso hay un `break`. En caso contrario, al entrar en un caso se ejecuta dodo el resto del switch. esto puede ser util en otras circunstancias, pero no en nuestro ejemplo.
