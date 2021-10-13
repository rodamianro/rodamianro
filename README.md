# Conocimientos básicos de Javascript

Teoria y practicas basicas de javascript

# Contenido
- [Conocimientos básicos de Javascript](#conocimientos-básicos-de-javascript)
- [Contenido](#contenido)
- [Cadenas de texto](#cadenas-de-texto)
  - [Crear cadenas de texto](#crear-cadenas-de-texto)
  - [Medir cadenas de texto](#medir-cadenas-de-texto)
  - [Métodos de búsqueda](#métodos-de-búsqueda)
    - [indexOf](#indexof)
    - [lastIndexOf](#lastindexof)
    - [search](#search)
    - [search con Expresión regunlar](#search-con-expresión-regunlar)


# Cadenas de texto
## Crear cadenas de texto
```js
var country = 'Colombia';
var food = new String('Carne');
```
## Medir cadenas de texto
```js
var text ='Hola mundo';
var length = text.length;
```
## Métodos de búsqueda
```js
var message = 'Estoy aprendiendo Javascript y estoy aprendiendo mucho'
```
>Si alguno de los métodos descriptos enseguida retorna el valor -1 quiere decir que no encontro el ninguna coincidencia
### indexOf
Busca la posición de la primer ocurrencia del valor que se esta buscando
```js
var result = message.indexOf('aprendiendo');
```
    Da como resultado el número 6
### lastIndexOf
Busca la posición de la ultima aparición del valor que se esta buscando
```js
var result = message.lastIndexOf('aprendiendo');
```
    Da como resultado el número 37
### search
Tambien Regresa la posición donde se encuentra el texto dentro de una variable
```js
var result = message.lastIndexOf('aprendiendo');
```
    Da como resultado el número 6
### search con Expresión regunlar
```js
var result = message.search(/ja/i);
```
    Da como resultado 18
>El operador i hace que la expresión regular sea in case sensitive que quiere decir que no importa si es mayúscula o minúscula