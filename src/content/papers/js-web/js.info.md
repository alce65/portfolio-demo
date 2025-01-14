---
title: JS en la Web
description: JS en la Web. DOM. Eventos. Gestión de datos. Componentes. Asincronía en JS.
date: 2021-09-01
tags: [js, web, front, dom, eventos, asincronía, componentes]
serie: { "id": 4, "title": JS en la Web" }
serieOrder: 1
---

- [Intro](#intro)
  - [Arquitecturas de aplicaciones web](#arquitecturas-de-aplicaciones-web)
  - [Navegadores web](#navegadores-web)
    - [Motores de navegación y renderizado](#motores-de-navegación-y-renderizado)
  - [Motores y Entornos de ejecución de JS](#motores-y-entornos-de-ejecución-de-js)
- [Conceptos básicos de ES](#conceptos-básicos-de-es)
  - [Punto de partida](#punto-de-partida)
  - [Conceptos y modelo mental](#conceptos-y-modelo-mental)
- [JS en la Web. DOM. Eventos](#js-en-la-web-dom-eventos)
  - [DOM (modelo de objetos del documento)](#dom-modelo-de-objetos-del-documento)
  - [Tipos de nodos](#tipos-de-nodos)
  - [Acceso a los nodos del DOM](#acceso-a-los-nodos-del-dom)
  - [Revisión de conceptos: funciones](#revisión-de-conceptos-funciones)
  - [Creación y eliminación de elementos](#creación-y-eliminación-de-elementos)
  - [Creación, eliminación y modificación de elementos en HTML5](#creación-eliminación-y-modificación-de-elementos-en-html5)
  - [Modificación de elementos del DOM](#modificación-de-elementos-del-dom)
  - [Eventos -\> callbacks](#eventos---callbacks)
  - [Enrutamiento (routing)](#enrutamiento-routing)
- [JS en la Web. Gestión de datos](#js-en-la-web-gestión-de-datos)
  - [Revisión de conceptos: métodos de array](#revisión-de-conceptos-métodos-de-array)
  - [Formato JSON](#formato-json)
  - [Formularios](#formularios)
  - [Eventos característicos de los formularios](#eventos-característicos-de-los-formularios)
  - [Obtención de datos](#obtención-de-datos)
  - [Validación de datos](#validación-de-datos)
- [Componentes](#componentes)
  - [Guías de estilo](#guías-de-estilo)
  - [CRUD basado en componentes: ToDo List](#crud-basado-en-componentes-todo-list)
- [Asincronía en JS](#asincronía-en-js)
  - [Gestión de errores](#gestión-de-errores)
  - [APIs REST -\> json](#apis-rest---json)

## Intro

### Arquitecturas de aplicaciones web

- Cliente / Servidor

- Modelos de navegación

  - SPA (Single Page Application)
  - MPA (Multi Page Application)

- Modelos de renderizado

  - Creación manual en el servidor
  - SSG (Static Site Generation) - se genera el HTML en el servidor en tiempo de compilación (ahead of time)
  - SSR (Server Side Rendering) - se genera el HTML en el servidor en tiempo de ejecución (just in time)
  - CSR (Client Side Rendering) - se genera el HTML en el cliente en tiempo de ejecución (just in time)

- Otros términos
  - JAMStack
  - PWA (Progressive Web App)
  - Microservicios
  - Serverless
  - Headless CMS

### Navegadores web

![Esquema de la estructura del browser, según Tali Garsiel](./assets/garsiel.browser.schema.png)

- Interfaz de usuario
- Motor de navegación
- Motor de renderizado
- Persistencia de datos
- Networking
- Interpretes de scripts (motor de JS)
- Backend del Interfaz de Usuario

#### Motores de navegación y renderizado

El **motor de renderizado** (rendering engine) es el responsable de presentar el contenido enviado por el servidor en respuesta a la solicitud del navegador

Por lo que se refiere al **HTML** es el responsable de

- el análisis sintáctico (parsing) del código HTML y CSS (parte de cualquier proceso de compilación, transformando la entrada en un árbol de derivación)
- la creación de un **árbol DOM** (Document Object Model) que representa la estructura del documento
- la aplicación de las **reglas de estilo CSS** al árbol DOM
- la creación de otro árbol, el **árbol de renderizado** (**Render tree**), que contiene la información necesaria para la presentación visual del documento
- la disposición de los elementos en la pantalla (**Render / Layout**)
- la presentación final del contenido analizado (transformado en árbol DOM) en la pantalla (**Paint**).

![Etapas en el funcionamiento del motor de renderizado](./assets/rendering.engine.steps.png)

El **motor de navegación** (browser engine) coordina las acciones entre el UI y el motor de renderizado

### Motores y Entornos de ejecución de JS

El **interprete de scripts** (**motor de JS**) es el responsable de ejecutar el código JavaScript de la página web.
El motor de JS interpreta el código fuente, genera el código intermedio (bytecode) y lo ejecuta.

Existen diferentes motores de JavaScript: V8 (Chrome, NodeJS), SpiderMonkey (Firefox), Chakra (Edge), JavaScriptCore, Nashorn, Rhino, JerryScript, Duktape, etc.

Todos ellos implementan a su manera el núcleo (core) del lenguaje JavaScript, caracterizado por una mínima API (conjunto de funciones y objetos) que permite la interacción con el entorno de ejecución.

- Manejo de datos, textos, arrays, y expresiones regulares
- No hay ninguna funcionalidad de las entradas y salidas
- No hay funciones más sofisticadas: redes, almacenamiento, gráficos…

Los motores se integran en diversos entornos de ejecución

- Navegadores
- NodeJS.
- Transpiladores (babel)

En el caso de los navegadores, el motor de JS se integra con el motor de renderizado y el backend del interfaz de usuario.

Cada entorno de ejecución proporciona una API específica para interactuar con el entorno

- En los navegadores encontramos DOM, Web APIs, etc.
- En NodeJS encontramos módulos, fs, http, etc.

## Conceptos básicos de ES

### Punto de partida

- Datos. Tipos de datos
- Variables y tipos
- Sentencias. Funciones
- Expresiones. Operadores. Comparación
- Estructuras de control
  - Condiciones
  - Iteraciones
- Objetos

### Conceptos y modelo mental

- JS: Modelo mental: Variables y datos
- Objetos en el Modelo mental
- Asignación vía variables
- Mutabilidad v. inmutabilidad

## JS en la Web. DOM. Eventos

### DOM (modelo de objetos del documento)

- presentación estándar de los elementos del documento HTML, actuando como la interfaz de esos elementos para el mundo exterior, como JavaScript.
- árbol de salida ("árbol de análisis") de un motor de renderización
- estructura jerárquica formado por:
  - diversos tipos de nodos, como por elementos DOM y nodos de atributo.
  - grupos de nodos: NodeList y HTMLCollection (solo de tipo Element)
- en JS aparece como un conjunto de objetos interrelacionados, que representan dinámicamente los elementos HTML del documento.
- los cambios en el DOM de JS se reflejan en la presentación de la página web y lo mismo sucede en sentido contrario.

### Tipos de nodos

Los nodos del DOM reflejan el estándar definido por el W3C para la representación de documentos HTML y XML.
Se clasifican en 12 tipos, algunos de los cuales solo se utilizan en XML:

- 0: ELEMENT_NODE (Elementos)
- 1: ATTRIBUTE_NODE (Atributos)
- 2: TEXT_NODE (Texto)
- 3: CDATA_SECTION_NODE
- 4: ENTITY_REFERENCE_NODE
- 5: ENTITY_NODE
- 6: PROCESSING_INSTRUCTION_NODE
- 7: COMMENT_NODE (Comentarios)
- 8: DOCUMENT_NODE (Documento)
- 9: DOCUMENT_TYPE_NODE (DocumentType)
- 10: DOCUMENT_FRAGMENT_NODE
- 11: NOTATION_NODE
- 12: DOCUMENT_POSITION_DISCONNECTED

### Acceso a los nodos del DOM

- Acceso secuencial a los nodos de elementos HTML

  Cada nodo del DOM tiene propiedades que permiten acceder a sus nodos hijos, hermanos y padres.
  Esto permite recorrer el árbol DOM de un documento HTML de forma secuencial.

  - childNodes (NodeList)
  - children (HTMLCollection, solo de tipo Element)
  - childElementCount (número de elementos hijos)
  - hasChildNodes (booleano)
  - parentNode (Node)
  - parentElement (Element)
  - firstChild, lastChild (Node)
  - firstElementChild, lastElementChild (Element)
  - nextSibling, previousSibling (Node)
  - nextElementSibling, previousElementSibling (Element)

- Acceso directo (query v. get)

  - querySelector (devuelve el primer elemento que coincide con un selector CSS o null si no hay coincidencias)
  - querySelectorAll (devuelve todos los elementos que coinciden con un selector CSS o una NodeList vacía si no hay coincidencias)

  - getElementById (devuelve un solo elemento con el ID especificado)
  - getElementsByTagName (devuelve una colección de elementos con el nombre de la etiqueta especificada)
  - getElementsByClassName (devuelve una colección de elementos con la clase especificada)
  - getElementsByName (devuelve una colección de elementos con el atributo name especificado)

- NodeList v. HTMLCollection

  - NodeList: colección de nodos, no solo de elementos
  - HTMLCollection: solo de elementos
  - ambos son colecciones en vivo (live collections), que se actualizan automáticamente cuando cambia el DOM

### Revisión de conceptos: funciones

- Parámetros, atributos, callbacks

### Creación y eliminación de elementos

- Creación de elementos

  - createElement
  - createTextNode
  - createAttribute
  - cloneNode

- Eliminación de elementos
  - removeChild
  - remove
  - replaceChild
  - replaceWith

De forma tradicional, para crear un nuevo nodo en el DOM, se siguen los siguientes pasos:

```js
const element = createElement("tipo");
parent.appendChild(node);
// parent.appendElement(node);
```

Para eliminar un nodo del DOM, se siguen los siguientes pasos:

```js
parent.removeChild(node);
// parent.removeElement(node);
```

### Creación, eliminación y modificación de elementos en HTML5

En HTML5, hay propiedades (innerHTML, outerHTML...) y funciones (insertAdjacentHTML) que permiten manipular el DOM de forma más sencilla y muy potente.

- innerHTML: parsea un string y lo incorpora como contenido HTML de un elemento
- outerHTML: parsea un string y lo incorpora en lugar del propio elemento (reemplaza al elemento)
- insertAdjacentHTML: inserta un texto parseado a HTML en una posición específica del elemento (beforebegin, afterbegin, beforeend, afterend)
- insertAdjacentElement: inserta un nodo en una posición específica del elemento

### Modificación de elementos del DOM

- Cambios en el contenido de los nodos
  - textContent: devuelve o establece el contenido de texto de un nodo
- Atributos
  - nombre_del_atributo
  - [nombre_del_atributo]
  - getAttribute
  - setAttribute
  - removeAttribute
  - dataset (atributos de datos personalizados)
- Clases del HTML
  - classList: add, remove, toggle, contains
- Estilos CSS
  - style: propiedades de estilo
- Dimensiones y posición
  - offsetWidth, offsetHeight, offsetLeft, offsetTop
  - clientWidth, clientHeight, clientLeft, clientTop
  - scrollWidth, scrollHeight, scrollLeft, scrollTop
  - getBoundingClientRect

### Eventos -> callbacks

En el navegador, los eventos son acciones que se producen en la página web que pueden ser detectadas por el navegador.
Los eventos pueden ser generados por el usuario (click, hover, scroll, etc.) o por el navegador (carga de la página, cambio de tamaño de la ventana, etc.).
Están definidos en la especificación DOM Level 3 Events y agrupados en una serie de categorías

- Resource Events
- Network Events
- **Focus Events**: `focus`, `blur`, `focusin`, `focusout`
- Websocket Events
- Session History Events
- CSS Animation Events
- CSS Transition Events
- **Form Events**: `change`, `input`, `submit`, `reset`
- Text Composition Events
- **View Events**: `resize`, `scroll`
- Clipboard Events
- **Keyboard Events**: `keydown`, `keyup`, `keypress`
- **Mouse Events**: `click`, `dblclick`, `mousedown`, `mouseup`, `mousemove`, `mouseover`, `mouseout`, `mouseenter`, `mouseleave`, `contextmenu`
- Drag & Drop Events
- Media Events
- Progress Events
- **Misc Events**: `load`, `unload`, `error`, `beforeunload`, `DOMContentLoaded`, `readystatechange`,

Los eventos se pueden gestionar con **event listeners** (escuchadores de eventos) que son funciones que se ejecutan cuando se produce un evento.

```js
element.addEventListener("click", function (event) {
  // código a ejecutar
});
```

El api de eventos de JS proporciona una serie de propiedades y métodos para gestionar los eventos

- addEventListener: añade un escuchador de eventos a un nodo
- removeEventListener: elimina un escuchador de eventos de un nodo
- dispatchEvent: dispara un evento en un nodo

EL objeto `event` es un objeto que contiene información sobre el evento que ha ocurrido.
Algunas de sus propiedades y métodos más comunes son:

- event.target: devuelve el nodo que ha disparado el evento
- event.currentTarget: devuelve el nodo que está escuchando el evento
- event.preventDefault(): cancela la acción por defecto del evento
- event.stopPropagation(): detiene la propagación del evento
- event.stopImmediatePropagation(): detiene la propagación del evento y evita que se ejecuten otros escuchadores de eventos en el mismo nodo
- event.type: devuelve el tipo de evento
- event.timeStamp: devuelve la marca de tiempo en milisegundos desde que se cargó la página

### Enrutamiento (routing)

La ruta o dirección de un recurso en la web se define mediante una URL (Uniform Resource Locator) que indica la ubicación de un recurso en la web.
Las URL se componen de varios elementos:

- protocolo (`protocol`): http, https, ftp, file, etc.
- dominio (`hostname`): nombre del servidor (www.example.com)
- puerto (`port`): número de puerto (80, 443, etc.)
- `host`: dominio y puerto (www.example.com:8080)
- origen (`origin`): protocolo, dominio y puerto (http//www.example.com:8080, https://www.example.com)
- path (`pathname`): dirección del recurso en el servidor (/path/to/resource)
- fragmento (`hash`): identificador del recurso (#section)
- `query` o `search`: información adicional (?key=value)
- `href`: dirección completa (http://www.example.com/path/to/resource)

Tipos de urls:

- absolutas: dirección completa (http://www.example.com)
- relativas a origen: dirección relativa al origen (/path/to/resource)
- relativas al documento (enlaces a documentos): dirección relativa al documento (path/to/resource o ./path/to/resource)
- enlaces a fragmentos (hash): dirección relativa al fragmento (#section)

Las rutas relativas a origen pueden variar en función de la ruta base (root) del servidor y del path que se genera a partir del root.

El enrutamiento en una aplicación web se refiere a la gestión de las rutas de la aplicación, es decir, a la forma en que se accede a las diferentes secciones de la aplicación a través de la URL.

Las rutas en una aplicación web se pueden gestionar de diferentes maneras, por ejemplo ejecutando diferentes funciones de JS en función de la ruta, o cargando diferentes archivos HTML en función de la ruta. En el primer caso, para conocer la ruta actual de la aplicación se puede utilizar la propiedad `location.pathname` del objeto `location`.

```js
let page = location.pathname.split("/").at(-1).split(".").at(0);
page = page || "index";

const router = {
  porfolio: loadPorfolio,
  about: loadAbout,
  tasks: loadTasks,
  contacts: loadContacts,
  index: createHeader,
};

router[page]();
```

## JS en la Web. Gestión de datos

### Revisión de conceptos: métodos de array

- Mutables: push, sort
- Inmutables: toSorted, forEach, map, filter, find
- Ejercicio: implementar los métodos de arrays / strings
  (ejemplos: myLength, myPush)

Uso de arrays en el entorno Web

- Proyecto: Tres en raya
- Comprobar el ganador: uso de arrays

### Formato JSON

En la Web se utiliza el formato **JSON** (JavaScript Object Notation) para intercambiar datos entre el servidor y el cliente, con independencia del lenguaje de programación utilizado en el caso del servidor. Es una variante de la notación literal de objetos de JavaScript.

En LS existen funciones nativas para trabajar con JSON:

- `JSON.stringify`: convierte un objeto o valor de JS en una cadena JSON
- `JSON.parse`: convierte una cadena JSON en un objeto o valor de JS

```js
const data = {
  name: "John",
  age: 30,
  city: "New York",
};

const json = JSON.stringify(data);
console.log(json); // {"name":"John","age":30,"city":"New York"}

const obj = JSON.parse(json);
console.log(obj); // {name: "John", age: 30, city: "New York"}
```

### Formularios

Agrupación de elementos de entrada (input) que permiten al usuario enviar datos al servidor.

Las etiquetas HTML responsables de la interacción se conocen como controles de formulario y se dividen en tres categorías:

- controles de entrada (input / textarea):
  - `input`: `text`, `password`, `email`, `number`, `date`, `time`, `color`, `range`, `checkbox`, `radio`, `file`, `hidden`
  - `textarea`
- controles de selección (`select`): `option`, `optgroup`
- controles de botón (`button`): `submit`, `reset`, `button`

Otras etiquetas relacionadas con los formularios son:

- `form`: agrupa los controles de formulario
- `label`: etiqueta de texto para un control de formulario
- `fieldset`: agrupa los controles de formulario con un título
- `legend`: título de un fieldset
- `datalist`: lista de opciones para un control de entrada
- `output`: resultado de un cálculo

### Eventos característicos de los formularios

- `submit`: se dispara cuando se envía un formulario
- `reset`: se dispara cuando se restablece un formulario
- `change`: se dispara cuando cambia el valor de un control de formulario
- `input`: se dispara cuando cambia el valor de un control de formulario (input, textarea)
- `focus`: se dispara cuando un control de formulario obtiene el foco
- `blur`: se dispara cuando un control de formulario pierde el foco
- `keydown`, `keyup`, `keypress`: se disparan cuando se pulsa una tecla
- `click`: se disparan cuando se hace clic en un control de formulario

### Obtención de datos

- Acceso a los datos de cada control de formulario

```js
const form = document.querySelector("form");
const input = form.querySelector('input[type="text"]');
const value = input.value;
```

- Acceso a los datos del formulario

```js
const form = document.querySelector("form");
const data = form.elements;
const value = data[order_number].value;
const value = data.namedItem("name").value;
```

- Acceso a los datos del formulario como FormData

```js
const form = document.querySelector("form");
const data = new FormData(form);
const value = data.get("name");
const allValues = Object.fromEntries(data);
```

Una de las ventajas del formData es que se pueden enviar directamente al servidor con fetch. El propio fetch se encarga de serializar los datos y añadir las cabeceras adecuadas para el protocolo form-data Además si existe un input tipo file, el formData incluye un objeto File con los metadatos de archivo y este se envía como parte del protocolo form-data.

```js
fetch("https://example.com", {
  method: "POST",
  body: data,
});
```

En el caso de los checkbox, no se almacenan como booleanos, sino que si están chequeados su valor es on y si no, la propiedad no existe.

Según las expectativas del servidor, puede mantenerse así o convertirlo en un booleano.

```js
const control = form.elements.namedItem("checkControl");
values["checkControl"] =
  control.type === "checkbox" ? control.checked : control.value;
```

### Validación de datos

- Validaciones nativas de HTML

  - Atributos html: required, pattern, min, max, minlength, maxlength, step, etc.
  - El navegador controla el proceso de validación y los mensajes de error
  - Se pueden añadir mensajes de error personalizados

- Validaciones custom

## Componentes

- template strings de HTML
- element.insertAdjacentHTML
- componentes funcionales

### Guías de estilo

### CRUD basado en componentes: ToDo List

- Concepto de Entidad (Modelo)
- Mock de datos: servicio para la importación desde JSON
- Página tasks y su ruta
- Componente task-cards: array de datos
- Componente card: parámetros
- Delete, add y update, funciones como parámetros

## Asincronía en JS

Ver [Asincronía en JS](../js-lang/05jsasincrono)

### Gestión de errores

- síncronos: try / catch
- asíncronos: then / catch

### APIs REST -> json

- API REST
- Acceso a datos desde el código
- Ejemplo: <https://pokeapi.co/api/v2/pokemon/ditto>
- AJAX. xmlHttpRequest (XHR)
- fetch (Browser, Node)
