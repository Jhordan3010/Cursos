//CALCULADORA
//MATERIAS RECIBIDAS 
//INSCRIPCION DE MATERIAS

// class Calculadora{
// 	constructor(){

// 	}
// sumar = (num1,num2) =>{
// 	return parseInt(num1) + parseInt(num2);
// }
// restar = (num1,num2) =>{
// 	return parseInt(num1) - parseInt(num2);
// }
// multiplicar = (num1,num2) =>{
// 	return parseInt(num1) * parseInt(num2);
// }
// dividir = (num1,num2) =>{
// 	return parseInt(num1) / parseInt(num2);
// }
// potenciar(num,exp){
// 	let numero = num;
// 	for (var i = 1; i < exp; i++) {
// 		numero = numero * num;
// 	}
// 	return numero;
// }
// raizCuadrada(num){
// 	return Math.sqrt(num);
// }
// raizCubica(num){
// 	return Math.cbrt(num);
// }
// }
// const calculadora = new Calculadora();
// alert("Que operacuon deseas realizar?");
// let opercion = prompt("1: sumar, 2: restar, 3: multiplicar, 4: dividir, 5: potenciacion, 6: raíz Cuadrada, 7: raíz cubica");

// if (opercion == 1) {
// 	let num1 = prompt("primer numero para sumar");
// 	let num2 = prompt("primer numero para sumar");
// 	let resultado = calculadora.sumar(num1,num2);
// 	document.write(`la respuesta es ${resultado}`)
// }
// else if (opercion == 2) {
// 	let num1 = prompt("primer numero para restar");
// 	let num2 = prompt("primer numero para restar");
// 	let resultado = calculadora.restar(num1,num2);
// 	document.write(`la respuesta es ${resultado}`)
// }
// else if (opercion == 3) {
// 	let num1 = prompt("primer numero para multiplicar");
// 	let num2 = prompt("primer numero para multiplicar");
// 	let resultado = calculadora.multiplicar(num1,num2);
// 	document.write(`la respuesta es ${resultado}`)
// }
// else if (opercion == 4) {
// 	let num1 = prompt("primer numero para dividir");
// 	let num2 = prompt("primer numero para dividir");
// 	let resultado = calculadora.dividir(num1,num2);
// 	document.write(`la respuesta es ${resultado}`)
// }
// else if (opercion == 5) {
// 	let num1 = prompt("numero a ponteciar");
// 	let num2 = prompt("exponete");
// 	let resultado = calculadora.potenciar(num1,num2);
// 	document.write(`la respuesta es ${resultado}`)
// }
// else if (opercion == 6) {
// 	let num1 = prompt("raíz´cuadrada de: ");
// 	let resultado = calculadora.raizCuadrada(num1);
// 	document.write(`la respuesta es ${resultado}`)
// }
// else if (opercion == 7) {
// 	let num1 = prompt("raíz cubica de: ");
	
// 	let resultado = calculadora.raizCubica(num1);
// 	document.write(`la respuesta es ${resultado}`)
// }
// else {
// 	document.write("no se encontro la opercion");
// }



// const obtenerInformacion = (materia)=>{
// 	materias = {
// 		fisica : ["Perez","pedro","pepito","cofla","maria"],
// 		programacio : ["Dalto","pedro","juan","pepito"],
// 		logica : ["Hernadez","pedro","juan","pepito","cofla","maria "], 
// 		quimica : ["Rodroguez","pedro","juan","pepito","cofla","maria "]
// 	}
// 	if (materias[materia] !== undefined) {
// 		return [materias[materia],materia,materias];
// 	}else{
// 		return materias;
// 	}
// }
// const mostrarInformacio = (materia)=>{
// 	let informacion = obtenerInformacion(materia);
// if(informacion !== false){
// 	let profesor = obtenerInformacion(materia)[0][0]; 
// 	alumnos = obtenerInformacion(materia)[0]; 
// 	alumnos.shift();
// 	document.write(`El profesor de <b>${informacion[1]}</b>: <b style="color:red">${profesor}</b><br>
// 		Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>
// 		`);

// }
// }
// const cantidadDeClases = (alumno)=>{
// 	let informacion = obtenerInformacion();
// 	let calasesPresentes = [];
// 	let cantidadTotal = 0;
// 	for(info in informacion){
// 		if (informacion[info].includes(alumno)) {
// 			cantidadTotal++;
// 			calasesPresentes.push(" " + info);
// 		}
// 	}
// 	return `<b style='color:blue'>
// 	${alumno}</b> esta en <b>${cantidadTotal} clases: <b style='color:green'>${calasesPresentes}</b>
// 	<br><br>
// 	`;
// }

// mostrarInformacio("fisica");
// mostrarInformacio("quimica");
// mostrarInformacio("programacio");
// mostrarInformacio("logica");

// document.write(cantidadDeClases("cofla"))
// document.write(cantidadDeClases("pedro"))



let materias = {
	fisica : ["Perez","pedro","pepito","cofla","maria"],
 	programacio : ["Dalto","pedro","juan","pepito"],
	logica : ["Hernadez","pedro","juan","pepito","cofla","maria "], 
 	quimica : ["Rodroguez","pedro","juan","pepito","cofla","maria "]
}

const inscribir = (alumno,materia)=>{
 	personas = materias[materia]
 	if(personas.length >= 21){
 		document.write(`lo siento <b>${alumno}</b>, las clases de <b>${materia}</b> ya estan llenas <br><br>`);
	}else{
		personas.push(alumno);
		if(materia == "fisica"){
			materias = {
				fisica: personas,
 				programacio: materias['programacio'],
				logica: materias['logica'],
 				quimica: materias['quimica']
			}
		}
		else if (materia == "programacio") {
			materias = {
				fisica: materias['fisica'],
 				programacio: personas,
				logica: materias['logica'],
 				quimica: materias['quimica']
			}
		}
		else if (materia == "logica") {
			materias = {
				fisica: materias['fisica'],
 				programacio: materias['programacio'],
				logica: personas,
 				quimica: materias['quimica']
			}
		}
		else if (materia == "quimica") {
			materias = {
				fisica: materias['fisica'],
 				programacio: materias['programacio'],
				logica: materias['logica'],
 				quimica: personas
			}
		}
		document.write(`¡Felicidades ${alumno}! te has  inscrito a ${materia} correctamente<br>`)
	}
}
document.write(materias['fisica'] + "<br>")


inscribir("pedrito","fisica")
inscribir("pedr","fisica")
inscribir("pedrit","fisica")
inscribir("pedri","fisica")
inscribir("pedrto","fisica")
inscribir("pedto","fisica")
inscribir("peto","fisica")
inscribir("pdrito","fisica")
inscribir("edrito","fisica")
inscribir("drito","fisica")
inscribir("o","fisica")
inscribir("d","fisica")
inscribir("rito","fisica")
inscribir("pedr","fisica")
inscribir("peito","fisica")
inscribir("perito","fisica")
inscribir("pdrito","fisica")
inscribir("pedrio","fisica")
inscribir("pedrto","fisica")
inscribir("pedrito","fisica")
inscribir("pedrito","fisica")
inscribir("pedrito","fisica")
inscribir("pedrito","fisica")
inscribir("pedrito","fisica")
inscribir("pedrito","fisica")
inscribir("pedrito","fisica")
inscribir("pedrito","fisica")


document.write("<br>" + materias['fisica'] )
