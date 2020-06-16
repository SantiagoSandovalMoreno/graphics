[node]: https://nodejs.org/es/download/
[git]: https://git-scm.com/downloads

# Graficos estadisticos:

Punto 3 de Prueba **Graficos estadisticos**

### Pre-requisitos 📋

Tener instalado:

- Node
- Git
- Editor de codígo

## Comenzando ⚡

1. Clonar el repositorio

```
git clone https://github.com/SantiagoSandovalMoreno/graphics.git
```

2. Instalar dependencias

```
npm install
```

3. Ejecutar proyecto

```
npm start
```

# Cuestionario:

Punto 4 de Prueba **Cuestionario**

## 1. ¿Porque no debería usar la libreria JQuery, si estoy usando ReactJS?

> Anteriormente el uso de jquery en cualquier proyecto era de gran ayuda, ya que con esta librería se cubrían todas las necesidades que javascript no ofrecía de forma nativa, ahora mismo con el avance que ha tenido el lenguaje javascript y las nuevas características que se han integrado, se puede cubrir de una mejor manera alguna necesidad del proyecto sin recurrir a alguna librería externa como lo es Jquery.

## 2. ¿Porque usarias Hooks de las nuevas versiones de ReactJS, en lugar de class component?

> Actualmente utilizo Hooks principalmente para reducir el código de mi componente y hacerlo mucho más legible, además puedo agregar acciones similares y emular el ciclo de vida de un componente de Clase con un solo hook como lo es useEffect.
> Además las componentes basados en Hooks son mucho más flexibles cuando deseamos probarlos o incluso reutilizar código.

## 3. ¿Que es un archivo JSX?

> Un archivo con extensión .JSX es un archivo utilizado dentro de la librería React, en donde podemos encontrar sintaxis javascript junto con la sintaxis HTML, como esta combinación podemos lograr construir aplicaciones muchas más robustas y con un mejor rendimiento.

## 4. ¿Que diferencia hay entre una function y una arrow function de Javascript?

> La diferencia mas notable de las dos clases de funciones es el contexto ya que por lo general una funcion clasica se define al ser llamada y una funcion flecha se define al ser declarada.

## 5. ¿Que es Redux y cómo nos ayuda en los proyectos?

> Redux es una libreria javascript para el manejo de estados de una aplicacion, y puede ayudar a un proyecto cuando este es demaciado grande y pierde el control de los datos (estado). Para ser desarrollada se basaron en Flux, pero definiendo solo un store (Unica fuente de la verdad) que es el estado global de la aplicacion.

## 6. ¿Que nos permite hacer la siguiente declaración?

    const anyFunction = (param_1) => (param_2) => param_1 + param_2

> Permite sumar dos parámetros pero es una función que devuelve una función es decir para sumar tendria que hacer anyFunction(3)(2) = 5
