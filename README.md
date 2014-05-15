# Práctica 05 - Procesadores de Lenguajes#
## 1. Objetivo de la práctica ##

El objetivo de la práctica consiste en realizar un ***analizador sintáctico recursivo predictivo*** o *parser* para un el antiguo lenguaje ***PL/0***. Además, se desarrollará como una aplicación *Ruby-Sinatra*, por lo que el despliegue de la página web se hará en *heroku*, al igual que la práctica anterior.

**Nota de implementación:** La "constantes" dentro del fichero .coffee se han declarado con letras mayúsculas.

## 2. Acceso a la página web ##
Se puede acceder a la página web de *Heroku* alojada en el siguiente enlace:

- Despliegue en Heroku: [http://practica5-analizador-sintactic.herokuapp.com/]


## 3. Dependencias ##
Se ha hecho uso de la librerías siguientes:

- [jQuery](http://jquery.com/)
- [MathJax](http://docs.mathjax.org/en/latest/start.html)
- [CodeMirror](http://codemirror.net/)

Otras librerías pertenecen al lado del *servidor* (ruby). Además, no es necesario descargar ninguna dependencia externa (vienen incluidas en el repositorio, o están referenciadas de manera online).

## 4. Reparto del trabajo ##

Se ha repartido el trabajo de la práctica, de una manera más o menos equitativa, tal que:

### Robabeh ###
- Inicializar el repositorio.
- Completar el analizador sintáctico para que acepte *PL/0*.
	- Código escrito directamente en *CoffeeScript*.

### Yousef ###
- Editor *CodeMirror*.
- Visualizado de gramática con *MathJax*.
- Pruebas *Mocha/Chai*.
- Estilo *Sass*.
- Mejora de páginas *slim*.
- Puesta a punto de sinatra y despliegue en heroku.
- Añadir *localStorage*.

<span style="color: red; font-weight: bold;">Nota:</span> aunque parezca un reparto desequilibrado, hemos supuesto que el desarrollo del analizador sintáctico conllevaría el mismo trabajo que el resto de tareas (y así ha sido). El reparto difiere en cantidad, no en dificultad.


## 5. Autores ##
Este proyecto ha sido desarrollado, en conjunto, por:

<!-- Tabla -->
<table cellspacing="0">
  <tr  style="background-color: #800000;">

    <td> <b>Nombre</b> </td>
    <td> <b>Código alu</b> </td>
	<td> <b>Correo electrónico</b> </td>
  </tr>
  <tr style="background-color: #FFFFFF;">
    <td> yousef Rajaei Tabrizi </td>
    <td> alu 0100828788</td>
	<td> <a href="mailto:alu0100828788@ull.edu.es">alu0100828788@ull.edu.es</a> </td>
  </tr>
  <tr style="background-color: #FFFFFF;">
    <td> Robabeh Salehi </td>
    <td> alu0100828771 </td>
	<td> <a href="mailto:alu0100828771@ull.edu.es">alu0100828771@ull.edu.es</a> </td>
  </tr>
</table>
<!-- Fin tabla -->
