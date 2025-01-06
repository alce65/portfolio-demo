---
title: Objetos
description: Objetos y arrays en JavaScript
date: 2021-09-01
tags: [javascript, objetos, arrays]
serie: { "id": 2, "title": "JS Basics" }
serieOrder: 5
---

## Objetos literales

Los objetos son colecciones de datos relacionados junto con las funcionalidades necesarias para esos datos. Para ello se agrupan una serie de propiedades que puedes corresponder a cualquiera de los tipos que ya conocemos, incluyendo otros objetos. Cuando a una propiedad se le asigna una función se denomina método, y confiere al objeto las funcionalidades antes mencionadas.

Lo que diferencia a los objetos de cualquier otro tipo de dato es su **mutabilidad**: se pueden añadir, eliminar o modificar propiedades, es decir cambiar o mutar el objeto, sin necesidad de reasignarle un nuevo valor, por lo que no es un impedimento que haya sido declarado mediante const.

La forma más sencilla de crear un objeto se conoce como **objetos literales** y permite indicar entre llaves las propiedades del objeto con sus correspondientes valores después de dos puntos, separando mediante comas las sucesivas propiedades.

```js
// Declaramos una variable y le asignamos como valor un objeto
const person = {
  name: "Pepe",
  age: 33,
};
console.log(person, typeof person); // { name: 'Pepe', age: 33 } object
```

El operador punto (.) permite acceder al conjunto de propiedades del objeto, para añadir, modificar o mostrar por consola cualquier propiedad,

```js
const person = {
  name: "Pepe",
  age: 33,
};
// Añadimos nuevas propiedades
// En este caso con un valor de tipo objeto
person.address = { street: "c/ Pez", number: 12, city: "Madrid" };
// Modificamos el valor de una propiedad
person.age = 34;
// Mostramos por consola el objeto
// con los cambios anteriores
console.log(person); // {name: 'Pepe', age: 34,
// address: { street: 'c/ Pez', number: 12, city: 'Madrid' }}
// Accedemos a una sola propiedad del objeto
// y en este caso la mostramos por consola una sola
console.log(person.name); // Pepe
```

---

🥷 El operador delete permite eliminar completamente una propiedad, aunque no es una práctica muy habitual

```js
const pet = {
  specie: "perro",
  name: "Rufo",
  owner: "Pepe",
};

console.log(pet); // { specie: 'perro', name: 'Rufo', owner: 'Pepe' }

// Decidimos que no debe existir la propiedad owner

delete pet.owner;
console.log(pet); // { specie: 'perro', name: 'Rufo' }
```

---

🎯 En estos ejemplos hemos podido ver como **mutamos** (cambiamos) el valor de los objetos declarados mediante const, porque en ningún momento estamos designándoles su valor: siguen siendo el mismo objeto con propiedades diferentes.

## Arrays

Un tipo particular de objetos que utilizaras en tus próximos ejercicios son los **arrays**. En este caso las propiedades no tienen nombre sino que se numeran sucesivamente desde O.

---

🥷 En JS es importante tener en cuenta que, en definitiva son **objetos**, con la misma flexibilidad que los demás objetos. Su número de elementos puede aumentar o disminuir en cualquier momento, al contrario de lo que sucede con los arrays estrictos habituales en muchos lenguajes de programación.

---

La creación de los arrays es similar a la de los objetos, pero en este caso utilizando los **corchetes** ([]). La variable correspondiente se declara con const y recibe un nombre que indique su carácter de lista de múltiples elementos, mediante un plural (users) o una referencia a diversos incontables (people).

Los elementos o **items** del array pueden ser de cualquier tipo, y de diferentes tipos unos y otros, aunque igual que decíamos respecto a los cambios de tipos en las variables, sería una buena práctica mantener siempre un **único tipo** invariable en todos los elementos de un array

```js
// Declaramos mediante const una variable
// y le asignamos un array de strings
const users = ["Pepe", "Luisa"];
console.log(users, typeof users); // [ 'Pepe', 'Luisa' ] object
```

Mediante los corchetes también podemos acceder a cualquier posición de un array, indicando su índice, para modificar su valor o utilizarlo, por ejemplo mostrándolo en la consola.

Como objetos que son, el operador . permite acceder a sus propiedades, en este caso comunes a todos los arrays, que proporcionar una serie de métodos junto con la propiedad length, correspondiente a la longitud del array.

```js
const users = ["Pepe", "Luisa", "Elena", "Ernesto"];
// La propiedad length indica siempre la longitud del array
console.log(users.length); // 4
// Podemos acceder a un item indicando su índice o posición
console.log(users[0]); // Pepe
// Accediendo a un item por su índice, podemos modificar su valor
users[0] = "Jose";
console.log(users[0]); // Jose
// A partir de la longitud del array
// Podemos añadir nuevos elementos
// que tendrán como indice el siguiente al último
users[users.length] = "Sofia";
console.log(users); // [ 'Jose', 'Luisa', 'Elena', 'Ernesto', 'Sofia' ]
console.log(users.length); // 5
```

Como has visto, al conocer la longitud de un array, es fácil añadir un nuevo elemento en la posición siguiente a la última. También podemos hacer eso mismo con alguno de los muchos metodos de los que disponen todos los arrays.

### Métodos de arrays

Como ya sabemos, un array es un objeto, y por tanto el **operador punto** permite acceder a todos los **métodos** que incorpora.

Haz la prueba en Code Interview. Declara un array y escribe un punto a continuación de su nombre. Veras la lista de todos los métodos de los que dispone un array.

---

🥷
Podemos clasificar estos métodos en dos tipos

- métodos mutables: modifican el array que los invoca y en algunos casos no devuelven ningún valor
- métodos inmutables: no modifican el array que los invoca, sino que devuelven un valor, por lo general un nuevo array o un boolean.

---

De momento es suficiente con que entiendas alguno de los primeros.

### Métodos mutables de arrays

Los dos primeros métodos modifican el **final** del array

- array.push(value): **Agrega** uno o más elementos al final de un array y devuelve la nueva longitud del array.

```js
const users = ["Pepe", "Luisa", "Elena", "Ernesto"];
const newLength = users.push("Sofia");
console.log(users); // [ 'Jose', 'Luisa', 'Elena', 'Ernesto', 'Sofia' ]
console.log(newLength); // 5
```

- array.pop(): **Elimina** el último elemento de un array y lo devuelve.

```js
const users = ["Pepe", "Luisa", "Elena", "Ernesto"];
const deletedUser = users.pop();
console.log(users); // [ 'Pepe', 'Luisa', 'Elena' ]
console.log(deletedUser); // Ernesto
```

Tenemos también otros dos que modifican el **principio** del array

- array.unshift(value): **Agrega** uno o más elementos al inicio del array, y devuelve la nueva longitud del array.

```js
const users = ["Pepe", "Luisa", "Elena", "Ernesto"];
const newLength = users.unshift("Sofia");
console.log(users); // [ 'Sofia', 'Pepe', 'Luisa', 'Elena', 'Ernesto' ]
console.log(newLength); // 5
```

- array.shift(): **Elimina** el último elemento de un array y lo devuelve.

```js
const users = ["Pepe", "Luisa", "Elena", "Ernesto"];
const deletedUser = users.shift();
console.log(users); // [ 'Luisa', 'Elena', 'Ernesto' ]
console.log(deletedUser); // Pepe
```

Finalmente podemos modificar unicamente el order de nuestro array

- array.sort(): ordena el array de lo invoca. Si no recibe parámetros, el orden será el alfabético ascendiente. Para otras ordenaciones, el parámetro será una función responsable de establecer el orden.

```js
const users = ["Pepe", "Luisa", "Elena", "Ernesto"];
users.sort();
console.log(users); // [ 'Elena', 'Ernesto', 'Luisa', 'Pepe' ]
```

### Métodos no mutables de arrays

En este apartado hay métodos muy potentes aunque algo complejos, que estudiaras más adelante (forEach, map, filter, reduce, find, some, every).

También hay algunos muy sencillos de entender y utilizar. Como ves, al final mostramos por consola el array y puedes comprobar que no ha sido modificado.

- array.includes(): Determina si un array incluye un determinado elemento y retorna un booleano según corresponda.

```js
const users = ["Pepe", "Luisa", "Elena", "Ernesto"];
let isIncluded = users.includes("Elena");
console.log(isIncluded); // true
isIncluded = users.includes("Sofia");
console.log(isIncluded); // false
console.log(users); // [ 'Pepe', 'Luisa', 'Elena', 'Ernesto' ]
```

- array.join(): devuelve una cadena en la que une todos los elementos del array. Podemos pasarle como parámetro el carácter de separación que debe agregar entre los elementos, aunque por defecto utilizará una coma (sin espacios).

```js
const users = ["Pepe", "Luisa", "Elena", "Ernesto"];
const listUsers = users.join(", ");
console.log(listUsers); // Pepe, Luisa, Elena, Ernesto
console.log(users); // [ 'Pepe', 'Luisa', 'Elena', 'Ernesto' ]
```

### Arrays multi dimensionales. Bucles anidados

Cuando los elementos de un array son arrays, tenemos un array de dos **dimensiones**. Si sucede lo mismo en el array interior sucesivamente, podemos tener n dimensiones. En algunas ocasiones encontraras el nombre de matrices para referirse a estas estructuras pero en JS no son otra cosa que arrays.

Para recorrer estos arrays necesitamos anidar un bucle for por cada dimensión

Veamos un ejemplo con dos dimensiones.

```js
const matrix = [
  [1, 2, 3],
  [10, 20, 30],
  [100, 200, 300],
];
for (let i = 0; i < matrix.length; i++) {
  const line = matrix[i];
  for (let j = 0; j < line.length; j++) {
    const item = line[j];
    console.log(`En la línea ${i + 1}, el valor ${j + 1} es  ${item} `);
  }
}
```
