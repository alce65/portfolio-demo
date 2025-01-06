---
title: Tipos de datos
description: Tipos de datos en JavaScript
date: 2021-08-31
tags: [javascript, tipos, datos]
serie: { "id": 2, "title": "JS Basics" }
serieOrder: 4
---

- Tipos de datos del estándar de JS
  - El operador typeof
  - Number
  - String
  - Boolean
  - Undefined
  - Null
  - Bigint
  - Symbol
  - Object
- Tipado de las variables
- Objetos
- Arrays
  - Métodos de arrays
  - Métodos mutables de arrays
  - Métodos no mutables de arrays
  - Ordenando arrays

## Tipos de datos del estándar de JS

🎯 En el actual estándar de JavaScript (ES2024) existe solamente **8 tipos** de datos diferentes. Siete de ellos se conocen como valores primitivos, frente al ultimo que son valores referenciados

- Valores primitivos
  - number
  - string
  - boolean
  - undefined
  - null
  - bigint
  - symbol
- Valores referenciados
  - object

### El operador typeof

🎯 El operador **typeof** devuelve el tipo de la expresión a la que precede, que como sabemos puede ser tanto un literal como una variable.

Utilizándolo puedes comprobar los distintos tipos existentes.n
Observa que por el momento estamos viendo el tipo de los datos, sin utilizar variables.

### Number

Incluye los números enteros y decimales (float point)
El operador de signo negativo permite definir números negativos.

```js
console.log(34, typeof 34); // number
console.log(-34, typeof -34); // number
console.log(3.4, typeof 3.4); // number
console.log(3_000_000.4, typeof 3_000_000.4); // number
```

> 🛠️ Como ves, si necesitas escribir números grandes puedes usar el guion bajo como separador de miles

---

🥷 En base a las características de la memoria del ordenador, el número más grande que se puede almacenar es del orden de 10 a la 308. Mas allá de ese valor, JS dispone de nos números especiales, **Infinity** y -**Infinity** con los que representa cualquier cantidad que supere el citado valor máximo

```js
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(1e309, typeof 1e309); // Infinity number
```

---

### String

Incluye los strings en cualquiera de los formatos que ya hemos mencionado.

Recuerda que al usar UTF-8 (todos los sistemas operativos lo hacen) puedes mezclar símbolos de cualquiera de los alfabetos existentes, tanto actuales como desaparecidos. Incluso puedes añadir emoticons.

```js
console.log("pepe", typeof "pepe"); // string
console.log("❤️", typeof "❤️"); // string
console.log(`pepe`, typeof `pepe`); // string
console.log("", typeof ""); // string
```

---

🥷 Existe un string especial, conocido como **cadena vacía**, que se obtiene sin dejar espacio entre las comillas, y se usa para indicar un string que carece de contenido. Al evaluarse a boolean, como luego veremos, es el único string que corresponde a false.

---

### Boolean

Representa la posibilidad de que algo tenga unicamente dos posibles estados, correspondientes en JS a los valores **true** y **false**

```js
console.log(true, typeof true); // boolean
console.log(false, typeof false); // boolean
```

### Undefined

Es el valor que reciben en JS las variables que se declaran pero a las que no se les asigna **ningún valor inicial**. Se representa mediante la palabra reservada `undefined`

```
console.log(undefined, typeof undefined); // undefined
```

### Null

Es similar a `undefined` pero se utiliza para dejar sin valor una variable de forma **intencionada**, asignándole `null` como resultado de algún proceso de nuestro código

🎯 Existe un **bug** desde los inicios de JS, que no ha podido ser resuelto por cuestiones de compatibilidad, que hace que typeof identifique erróneamente un valor `null` con el tipo **object**, en lugar de indicar el tipo **null**, que sería lo correcto,

```
console.log(null, typeof null); // Por error retorna object
```

### Bigint

Además del máximo valor numérico ya mencionado, lo importante es que al realizar operaciones matemáticas, JS pierde precisión a partir de un valor mucho menor, aunque de de más de 9 mill billones (del orden de 10 a la 15)

Para solucionar este problema, en ES6+ se ha creado el nuevo tipo **bigint**, aunque por ahora no vas a necesitar utilizarlo.

```js
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(9_007_199_254_740_991, typeof 9_007_199_254_740_991); // 9007199254740991 number
console.log(9_007_199_254_740_992n, typeof 9_007_199_254_740_992n); // 9007199254740992n bigint
```

### Symbol

El último tipo primitivo, añadido también en ES6+ es el Symbol, cuyos valores son únicos e immutables y pueden ser utilizados como identificadores (claves) de las propiedades de los objetos

No se utilizan demasiado, y desde luego, no es algo que necesites conocer por ahora.

```js
console.log(Symbol(), typeof Symbol()); // symbol
```

### Object

Junto a los 7 primitivos, JS incorpora un tipo especial, de carácter **referenciado**, que marca de forma definitiva la manera en que se utiliza este lenguaje. Son los **objetos**, en todas sus variedades, incluyendo principalmente Object, Array, RegExp, Date, Error y Function.

Todos ellos son **tipo object**, y así lo indica typeof, excepto en el caso de las funciones, que por sus especiales características devuelven como **tipo function**

```js
// Objetos literales
console.log({}, typeof {}); // {} object
// Arrays
console.log([], typeof []); // [] object
// Expresiones regulares (RgExp)
console.log(/a/, typeof /a/); // /a/ object
// Fechas (Date)
console.log(new Date(), typeof new Date()); // 2022-09-07T16:21:53.198Z object
// Errores
console.log(new Error("Error").message, typeof new Error()); // Error object
// Funciones
console.log(() => {}, typeof (() => {})); // [Function (anonymous)] function
```

## Tipado de las variables

Ahora que sabemos los tipos de datos posibles, ¿que pasa con las variables?.

Pues simplemente reciben el tipo del valor que se les asigna

---

🥷 JS es un lenguaje de **tipado débil y dinámico**.

- _débil_ porque las variables en si no tienen un tipo explícito: toman siempre el tipo del dato al que apuntan
- _dinámico_ porque el tipo de una variable puede cambiar (en el caso de let) cuando se les asigna un nuevo valor de un tipo diferente

---

El siguiente ejemplo demuestra lo que hemos dicho.

```js
let foo;
console.log(foo, typeof foo); // undefined undefined
foo = 34;
console.log(foo, typeof foo); // 34 number
foo = "pepe";
console.log(foo, typeof foo); // pepe string
foo = true;
console.log(foo, typeof foo); // true boolean
foo = null;
console.log(foo, typeof foo); // null object (recuerda el bug: debería ser null)
foo = 10n;
console.log(foo, typeof foo); // 10n bigint
foo = Symbol();
console.log(foo, typeof foo); // Symbol() symbol
foo = {};
console.log(foo, typeof foo); // {} object
```

Como ves, una misma variable pasa por los ocho tipos disponibles, aunque sería muy mala practica trabajar así.

> 🛠️ En lugar de lo que ves en el ejemplo, ten en cuenta las siguientes reglas de estilo
>
> - las variables deben tener un **nombre** que defina su contenido con la mayor claridad posible. No importa que el nombre sea largo y compuesto de varias palabras que uniremos mediante camelCase: siEsNecesarioEstoValeComoNombre
> - en consecuencia es muy poco probable que le asignemos a una misma variable valores de distinto **tipo**
> - siempre que sea posible, cuando no sea necesario reasignar, usaremos **const** para declarar las variables
