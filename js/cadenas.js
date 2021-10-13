'use strict'
// Cadenas de texto

// Creación
var country = 'Colombia';
var food = new String('Carne');

// Medir cadenas de texto
var text = 'Hola mundo';
var textLength = text.length;
//console.log(`La cadena de texto tiene: ${textLength} letras`);

// Métodos de busqueda
var message = 'Estoy aprendiendo Javascript y estoy aprendiendo mucho';
// indexOf
var result = message.indexOf('aprendiendo');
// lastIndexOf
var result = message.lastIndexOf('aprendiendo');
// search
var result = message.search('aprendiendo');
// search | Expresión regular
var result = message.search(/ja/i);
console.log(result);

