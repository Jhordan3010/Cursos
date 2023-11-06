// let free = false;

// const validarCliente = (time) =>{
// 	let edad = prompt("Cual es  tu edad?");
// 	if(edad >= 18){
// 		if(time >= 2 && time < 7 && free == false){
// 			alert(`Puedes entrar gratis eres la primera persona en entrar`);
// 			free = true;
// 		}else{
// 			alert(`Son las ${time} Podes pasar pero tienes que pagar`);
// 		}
// 	}else{
// 		alert("Eres menor de edad por ende no puedes entar");
// 	}
// }


// validarCliente(23);
// validarCliente(24);
// validarCliente(0.2);
// validarCliente(0.6);
// validarCliente(1);
// validarCliente(2);
// validarCliente(2.4);
// validarCliente(3);

// let cantidad = prompt("Cuantos alumnos son?");
// let alumnosTotales = [];

// for(i = 0;i < cantidad; i++){
// 	alumnosTotales[i] = [prompt("Nombre del alumno" + (i+1)),0];
// }

// const tomarAsistencia = (nombre,p) =>{
// 	let presencia = prompt(nombre);
// 	if(presencia == "p" || presencia == "P"){
// 		alumnosTotales[p][1]++;
// 	}
// }

// for(i = 0;i < 30; i++){
// 	for(alumno in alumnosTotales){
// 		tomarAsistencia(alumnosTotales[alumno][0],alumno)
// 	}
// }

// for(alumno in alumnosTotales){
// 	let resultado = `${alumnosTotales[alumno][0]}:<br>
// 	_______Presentes: <b>${alumnosTotales[alumno][1]}</b><br>
// 	_______Ausencias: <b>${30 - parseInt(alumnosTotales[alumno][1])}</b>
// 	`;
// 	if(30 - alumnosTotales[alumno][1] > 18){
// 		resultado += "<b style ='color:red'>Reprobado por inacistencias</b><br><br>";
// 	}else{
// 		resultado+= "<br><br>"
// 	}
// 	document.write(resultado);
// }

const sumar = (num1,num2) =>{
	return parseInt(num1) + parseInt(num2);
}
const restar = (num1,num2) =>{
	return parseInt(num1) - parseInt(num2);
}
const multiplicar = (num1,num2) =>{
	return parseInt(num1) * parseInt(num2);
}
const dividir = (num1,num2) =>{
	return parseInt(num1) / parseInt(num2);
}

alert("Que operacuon deseas realizar?");
let opercion = prompt("1: sumar, 2: restar, 3: multiplicar, 4: dividir");

if (opercion == 1) {
	let num1 = prompt("primer numero para sumar");
	let num2 = prompt("primer numero para sumar");
	let resultado = sumar(num1,num2);
	document.write(`la respuesta es ${resultado}`)
}else if (opercion == 2) {
	let num1 = prompt("primer numero para restar");
	let num2 = prompt("primer numero para restar");
	let resultado = restar(num1,num2);
	document.write(`la respuesta es ${resultado}`)
}else if (opercion == 3) {
	let num1 = prompt("primer numero para multiplicar");
	let num2 = prompt("primer numero para multiplicar");
	let resultado = multiplicar(num1,num2);
	document.write(`la respuesta es ${resultado}`)
}else if (opercion == 4) {
	let num1 = prompt("primer numero para dividir");
	let num2 = prompt("primer numero para dividir");
	let resultado = dividir(num1,num2);
	documet.write(`la respuesta es ${resultado}`)
}else {
	document.write("no se encontro la opercion");
}