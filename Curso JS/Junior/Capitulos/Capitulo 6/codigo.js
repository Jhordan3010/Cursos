// -------------DOM
// - Un nodo en el DoM es cualquier etiqueta del cuerpo, cono un párrafo, el mismo body o incluso las etiquetas de una lista.

// *Document: el nodo document es el nodo raíz, a partir del cual derivan el resto de nodos.
// *Element: nodos definidos por etiquetas html.
// *Text: el texto dentro de un nodo element se considera un nuevo nodo hiio de tipo text (texto).
// *Attribute: los atributos de las etiquetas definen nodos, (en Javascript no los veremos como nodos, sino como información asociada al nodo de tipo element)
// *Comentarios y otros: los comentarios y otros elementos cono las declaraciones doctype en cabecera de los documentos HTML generan nodos



// ----------(28) Document - Metodos de Selección de elementos
// -document. getElementById()I- selecciona un elemento por ID
// - getElementsByTagName() - Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada.
// -querySelector() - Devuelve el primer elemento que coincida con el grupo especificado de selectores.
// - querySelectorAll( ) - Devuelve todos los elementos que coincidan con el grupo especificado de selectores.

// document.getElementById("parrafo");
// document.write(parrafo);

// document.write("<br/><br/>");

// document.getElementsByTagName("p");
// document.write(parrafo[]);

// document.write("<br/><br/>");

// parrafo = document.querySelector(".parrafo");
// document.write(parrafo);

// document.write("<br/><br/>");

// parrafo = document.querySelectorAll(".parrafo");
// document.write(parrafo[2]);



// --------------(29) Metodos para Definir, obtener y Eliminar atributos
// - setattribute( ) - Modifica el valor de un atributo
// - getAttribute() - obtiene el valor de un atributo
// - removeAttribute( ) - Remueve el valor de un atributo

// const rangoEtario = document.querySelector(".rangoEtario");

// valorDelAtributo = rangoEtario.removeAttribute("type","");

// document.write(valorDelAtributo);



// ------------------(30) Atributos globales 
// - class - lista de clases del elemento separadas por espacios
// - contenteditable - indica si el elemento puede ser modificable por el usuario (bool)
// - dir - indica la direccionalidad del texto
// - hidden - indica si el elemento aún no es, o ya no es, relevante.
// - id - define un identificador único.
// - style - Contiene declaraciones de estilo CSS para ser aplicadas al elemento.
// - tabindex - indica si el elemento puede obtener un focus de input
// - title - Contiene un texto con información relacionada al elemento al que pertenece.

// const titulo = document.querySelector(".titulo");
// titulo.setAttribute("title","jajajaxd");



// -------------------(31) Atributos de Inputs
// - className
// - value
// - type
// - accept
// - form
// - minlength
// - placeholder
// - required

// const input = document.querySelector(".input-normal");
// input.required=" ";



// -------------------(32) Atributo Style
// - usos y ejemplos
// - propiedades Camel Case

// const titulo = document.querySelector(".titulo");
// titulo.style.padding= "30px";
// titulo.style.backgroundColor= "#48e";



// ---------------------(35) clases, classList y Metodos de classList
// - Definición y usos
// - add( ) - añade una clase
// - remove( ) - remueve una clase
// - item() - devuelve la clase del indice especificado
// - contains() - verifica si ese elemento posee o no, la clase especificada.
// - replace() - reemplaza una clase por otra
// - toggle() - si no tiene la clase especificada, la agrega, si ya la tiene, la elimina

// const titulo = document.querySelector(".titulo");

// titulo.classList.add("grande");

// titulo.classList.remove("grande");

// let valor=titulo.classList.item(1);
// document.write(valor);

// let valor = titulo.classList.contains("grandess");
// if (valor){
//     document.write("la clase existe");
// }else{
//     document.write("La clase NO existe");
// }

// nombreDeClase = "grande";
// let valor= titulo.classList.contains(nombreDeClase);
// if (valor){
//     titulo.classList.remove(nombreDeClase);
// }else{
//     titulo.classList.add(nombreDeClase);
// }

// let valor = titulo.classList.toggle("grande",true);
// document.write(valor);

// let valor = titulo.classList.replace("grande","chiquita");
// document.write(valor);



// -------------------(36) obtención y Modificación de Elementos
// - textcontent - devuelve el texto de cualquier nodo.
// - innerText - devuelve el texto visible de un node element.
// - outerText - devuelve el texto que de las etiquetas html incluidas las etiquetas.
// - innerhTML - devuelve el contenido html de un elemento
// - outerHTML - devuelve el codigo HTML completo del elemento

// const titulo = document.querySelector(".titulo");
// let resultado = titulo.textContent;
// document.write(resultado);

// let resultado = titulo.innerTex;
// document.write(resultado)

// let resultado = titulo.innerHTML;
// alert(resultado)

// let resultado = titulo.outerHTML;
// alert(resultado)
//Pruebas
// let resultado = titulo.textContent;
// let resultado1 = titulo.innerHTML;
// let resultado2 = titulo.outerHTML;
// // alert(resultado)
// // alert(resultado1)
// alert(resultado2)



// -------(37) creación de Elementos
// - createElements()
// - createTextNode
// - appendchild()
// - createDocumentFragment()

// const contenedor = document.querySelector(".contenedor");
// const item = document.createElement('LI');
// const textDelIten = document.createTextNode("esta es un iten de la lista")
// console.log(textDelIten); 

// const contenedor = document.querySelector(".contenedor");
// const item = document.createElement('LI');
// const textDelIten = document.createTextNode("esta es un iten de la lista")
// item.innerHTML = textDelIten;
// console.log(item);

// const contenedor = document.querySelector(".contenedor");
// const item = document.createElement('LI');
// const textDelIten = document.createTextNode("esta es un iten de la lista")
// item.appendChild(textDelIten);
// contenedor.appendChild(item);
// console.log(item);

// const contenedor = document.querySelector(".contenedor");
// const fragmento = document.createDocumentFragment();
// for (let i = 0; i < 20; i++){
//     const item = document.createElement('LI');
//     item.innerHTML = "esta es un iten de la lista";
//     fragmento.appendChild(item);
// }
// contenedor.appendChild(fragmento);



// (38) obtención y modificación de childs (Hijos)
// -firstchild
// - lastchild
// -firstElementchild
// lastElementchild
// childNodes
// - children

// const contenedor = document.querySelector(".contenedor");
// const primerHijo = contenedor.firstChild;
// console.log(primerHijo);

// const contenedor = document.querySelector(".contenedor");
// const ultimoHijo = contenedor.lastChild;
// console.log(ultimoHijo);

// const contenedor = document.querySelector(".contenedor");
// const priemrHijo = contenedor.firstElementChild;
// console.log(primerHijo);

// const contenedor = document.querySelector(".contenedor");
// const ultimoHijo = contenedor.lastElementChild;
// console.log(ultimoHijo);

// const contenedor = document.querySelector(".contenedor");
// const Hijo = contenedor.childNodes;
// console.log(Hijo[0]);

// const contenedor = document.querySelector(".contenedor");
// const hijos = contenedor.childNodes;
// hijos.forEach(hijos => console.log(hijos));


// const contenedor = document.querySelector(".contenedor");
// const Hijos = contenedor.children;
// console.log(Hijos);

// const contenedor = document.querySelector(".contenedor");
// const hijos = contenedor.children;
// for(hijo of hijos){
//     console.log(hijo);
// }


// (39) Metodos de childs (Hijos)

// - replacechild()
// - removechild( )
// -haschildNodes( )

// const contenedor = document.querySelector('.contenedor');
// const parrafo = document.createElement("P").innerHTML = "Parrafo";
// const h2_nuevo = document.createElement("H2");
// h2_nuevo.innerHTML = "Titulo";
// h2_antiguo = document.querySelector(".h2");
// contenedor.replaceChild(h2_nuevo, h2_antiguo);
// contenedor.removeChild(h2_antiguo);
// let respuesta = contenedor.hasChildNodes();
// if (respuesta) {
//     document.write("el elemento si tiene hijos ");
// }else{
//     document.write("el elemento NO tiene tiejos ");
// }




// 41) Propiedades de parents (Padres)
// - parentElement
// - parentNode

// const contenedor = document.querySelector('.contenedor');
// const parrafo = document.createElement("P").innerHTML = "Parrafo";
// const h2_nuevo = document.createElement("H2");

// h2_antiguo = document.querySelector(".h2");
// let respuesta = h2_nuevo.parentElement;
// console.log(h2_antiguo.parentElement);




// 42) Propiedades de Siblings (Hermanos)
// - nextsibling
// - previoussibling
// - nextElementsibling
// - previousElementSibling


// const contenedor = document.querySelector('.contenedor');
// const parrafo = document.createElement("P").innerHTML = "Parrafo";
// const h2_nuevo = document.createElement("H2");

// h2_antiguo = document.querySelector(".h2");

// console.log(h2_antiguo.previousElementSibling);




//43) Nodos - Extras
// - closet()

const div = document.querySelector('.div-3');


console.log(div.closest(".div"));
