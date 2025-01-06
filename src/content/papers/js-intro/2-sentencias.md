---
title: Sentencias de código
description: Expresiones y operadores en JavaScript
date: 2021-08-31
tags: [javascript, sentencias, expresiones, operadores]
serie:  {"id": 2, "title": "JS Basics"}
serieOrder: 2
---

- Expresiones. Operadores

  - Operadores de asignación
  - Operadores aritméticos
  - Operadores de comparación
  - Casting y coercion
  - Casos pintorescos de coercion
  - Coercion a boolean

- Sentencias de control (ver 03)

## Expresiones. Operadores

Como ya sabemos, las sentencias de JS pueden incorporar **expresiones**. Tas es el caso de las sentencias de asignación o de las condicione que aparecerán en las sentencias de control que luego veremos.

Una expresión puede incluir literales, variables y operadores y siempre se evalúa a un **único valor**.

Existen distintos tipos de operadores

- operadores de asignación
- operadores aritméticos
- operadores de comparación
- operadores bit a bit
- operadores lógicos
- operadores de cadena
- operador condicional (ternario)
- operador coma
- operadores unarios
- operadores relacionales

### Operadores de asignación

Como ya sabemos el operador de **asignación** es el simbolo **igual** (=)

---

🥷Existen además una serie de operadores que combinan la asignación con una operación aritmética escribiéndolo de forma abreviada. Excepto el primero, no se usan mucho y por el momento ppuedes olvidarte de ellos

- asignación de adición x += y (x = x + y)
- asignación de resta x -= y (x = x - y)
- asignación de multiplicación x _= y (x = x /_ y)
- asignación de división x /= y (x = x / y)
- asignación de resto x %= y (x = x % y)
- asignación de exponenciación x \*_= y (x = x /_/\* y)

---

### Operadores aritméticos

Operaciones aritméticas estándar

- suma (+)
- resta (-)
- producto (\*)
- división (/)
- resto o módulo (%)
- exponente (\*\*)
- signo positivo (+)
- signo negativo (-)

Otros aritméticos mutables, que modifican la variable a la que se aplican

- incremento (++)
- decremento (--)

```js
const num = 3;
console.log(num + num); // 6
console.log(num - num); // 0
console.log(num * num); // 9
console.log(num / num); // 1
console.log(num % num); // 0
console.log(num ** num); // 27
console.log(+num); // 3
console.log(-num); // -3

let num1 = 3;
num1++;
console.log(num1); // 4
num1--;
console.log(num1); // 3
```

### Operadores de comparación

Como su nombre indica comparan dos valores y devuelven un valor lógico (boolean), true o false, en función del resultado.

Comparaciones de igualdad

- Igual (==). Devuelve true si los operandos son iguales.
- No es igual (!=). Devuelve true si los operandos no son iguales.
- Estrictamente igual (===). Devuelve true si los operandos son iguales y del mismo tipo.
- Desigualdad estricta (!==). Devuelve true si los operandos son del mismo tipo pero no iguales, o son de diferente tipo.

```js
const foo = 3;
const bar = 4;
// Igualdad
console.log(3 == foo); // true
console.log("3" == foo); // true
console.log(3 == "3"); // true
console.log(foo != 4); // true
console.log(bar != "3"); // true
// Igualdad estricta
console.log(3 === foo); // true
console.log(foo !== "3"); // true
console.log(3 !== "3"); // true
```

Mayor o menor

- Mayor que (>)
- Mayor o igual que (>=)
- Menor que (<)
- Menor o igual (<=)

```js
const foo = 3;
const bar = 4;
console.log(bar > foo); // true
console.log("12" > 2); // true
console.log(bar >= foo); // true
console.log(foo >= 3); // true
console.log(foo < bar); // true
console.log("2" < 12); // true
console.log(foo <= bar); // true
```

Para entender el funcionamiento de los operadores en relación con los tipos tenemos que mencionar los conceptos de casting y coercion.

### Casting y coercion

Casting es el proceso de utilización durante una determinada operación del equivalente a una variable cambiándole el tipo, con el fin de poder llevar a cabo la operación. Dicho de otra manera, es la acción de forzar a que una variable se comporte como si fuera de otro tipo.

Este proceso puede ser

- explícito, cuando se indica en el código que se debe producir. Se suele denominar casting
- implícito, cuando lo realiza automáticamente el lenguaje. Se suele denominar coercion. En JS este proceso se realiza siempre que resulta necesario para que se pueda evaluar una expresión.

Veamos un ejemplo para terminar de entender el proceso.

```js
const foo = 12; // tipo number
const bar = "3"; // tipo string

const result = foo / bar;

// La división solo tiene sentido entre dos operadores numéricos
// JS aplica sus reglas de coercion y en lugar del valor real de bar utiliza su equivalente numérico 3
// De esta forma puede evaluar la expresión 12/3 a 4 y asignar el resultado a result

console.log(result, typeof result); // 4 number

// Como puedes ver ni foo ni bar han cambiado ni de valor ni de tipo
console.log(foo, typeof foo); // 12 number
console.log(bar, typeof bar); // 3 string
```

En algunos casos las reglas de coercion no dan el resultado esperado y es necesario emplear un casting explicito para corregirlas. De momento basta con que sepas que estos procesos existen.

### Casos pintorescos de coercion

Pese a lo que acabamos de decir, hay un par de situaciones de JS que pueden resultar sorprendentes y que vamos a comentar

El primero de ellos se refiere al **operador +**, que incluye tanto las suma como la concatenación, pero da prioridad a esta última.

```js
const foo = 3;
const bar = "4";
const result = foo + bar;
console.log(result, typeof result); // 34 string
```

Para evitar esta situación podemos emplear el **casting explicito** a number:

- con la función de casting Number()
- aplicando el operador de signo +

```js
const foo = 3;
const bar = "4";
let result = foo + bar;
console.log(result, typeof result); // 34 string
result = foo + Number(bar);
console.log(result, typeof result); // 7 number
result = foo + +bar;
console.log(result, typeof result); // 7 number
```

El segundo caso se refiere a la **coercion a number de los string**. Con un string numérico no hay problema: en lugar de '9' usamos el número 9. Pero, ¿como puede JS calcular el numero equivalente a un string que no se refiere a números?. Para eso existe una entidad especial, dentro del conjunto de los valores de tipo number, conocida como **NaN** (not-a-number) que representa un número cuyo valor es indeterminado.

Aunque matemáticamente existen la indeterminaciones, en la práctica suele ser poco util un valor Nan. Ya aprenderás como programamos para evitas que aparezcan valores NaN

### Coercion a boolean

El caso más llamativo en que JS realiza la coercion automática es cuando se espera un boolean, como en las condiciones de if o the while que luego veremos. En esta situación cualquier variable se convierte a true, y se denomina **truthy**, excepto unos pocos valores conocidos como **falsy**

- false
- 0, -0 y 0n (el bigInt 0)
- undefined
- null
- NaN (el numero indeterminado, not-a-number)
- '' (el string vacío)

Para que compruebes esta conversión podemos usar la función de casting explicito Boolean

```js
console.log(Boolean(false)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(0n)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean("")); // false
```

> 🛠️ Si pruebas cualquier otro valor, veras que se evalúa a true
