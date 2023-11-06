class Celular{
	constructor(color,peso,tamaño,rdc,ram){
		this.color = color;
		this.peso = peso;
		this.tamaño = tamaño;
		this.resolucionDeCamara = rdc;
		this.ram = ram;
		this.encendido = false;
	}
	presionarBotonEncendido(){
		if (this.encendido == false) {
			alert("celular prendido");
			this.encendido = true;
		}else{
			alert("el celular ya esta apagado");
			this.encendido = false;
		}
	}
	reiniciar(){
		if (this.encendido == true) {
			alert("reiniciar celular");
		}else{
			alert("el celular esta apagado");
		}
	}
	tomarFoto(){
		alert(`foto tomada en una resolucion de ${this.resolucionDeCamara}`)
	}
	grabarVideo(){
		alert(`grabando video en ${this.resolucionDeCamara}`)
	}
	mostrarInfo(){
		return `
		Color: <b>${this.color}</b></br>
		Peso: <b>${this.peso}</b></br>
		Tamaño: <b>${this.tamaño}</b></br>
		Memoria Ram: <b>${this.ram}</b></br>
		Resolucion de Video: <b>${this.resolucionDeCamara}</b></br>
		`
	}
}

// class CelularAltaGama extends Celular{
// 	constructor(color,peso,tamaño,rdc,ram,rdce){
// 		super(color,peso,tamaño,rdc,ram);
// 		this.resolucionDeCamaraExtra = rdce;
// 	}
// 	grabarVideoLento(){
// 		alert("estas grabando en camara lenta");
// 	}
// 	reconocimientoFacial(){
// 		// alert("vamos a iniciar un reconocimento facial");
// 	}
// 	infoAltaGama(){
// 		return this.mostrarInfo() + `Resolucion de camara trasera: ${this.resolucionDeCamaraExtra}`
// 	}
// }

// // celular1 = new Celular("rojo","150G","5'","hd","1GB");
// // celular2 = new Celular("negro","155G","5.4'","full hd","2GB");
// // celular3 = new Celular("blaco","146G","5.9'","full hd","2GB");
// // celular1.presionarBotonEncendido();
// // celular1.reiniciar();
// // celular1.tomarFoto();
// // celular1.grabarVideo();
// // celular1.presionarBotonEncendido();

// celular1 = new CelularAltaGama("rojo","130g","5.2","4k","3GB","full hd");
// celular2 = new CelularAltaGama("negro","142g","6","4k","4GB","hd");

// document.write(`
// 	${celular1.infoAltaGama()}<br><br>
// 	${celular2.infoAltaGama()}<br>
// 	`);

class App{
	constructor(descargas,puntuacion,peso){
		this.descargas = descargas;
		this.puntuacion = puntuacion;
		this.peso = peso;
		this.iniciada = false;
		this.instalada = false;
	}
	abrir(){
		if (this.iniciada == false && this.instalada == true) {
			this.iniciada = true;
			alert("app iniciada")
		}
	}
	cerrar(){
		if (this.iniciada == true && this.instalada == true) {
			this.iniciada = false;
			alert("app cerrada");
		}
	}
	instalar(){
		if (this.instalada == false) {
			this.instalada = true;
			alert("app instalada correctamente");
		}
	}
	desistalar(){
		if (this.instalada == true) {
			this.instalada = false;
			alert("app desistalada correctamente")
		}
	}

	appInfo(){
		return `
		Descargas: <b>${this.descargas}</b><br>
		Puntuacion: <b>${this.puntuacion}</b><br>
		Peso: <b>${this.peso}</b><br>
		`
	}
}

app = new App("16.000","5 estrella","900mb");
app2 = new App("1.000","4 estrella","400mb");
app3 = new App("6.000","4.5 estrella","100mb");
app4 = new App("23.000","4.8 estrella","1gb");
app5 = new App("900","5 estrella","250mb");
app6 = new App("17.000","3.7 estrella","522mb");
app7 = new App("42.981","2.9 estrella","723mb");

document.write(`
	${app.appInfo()}<br>
	${app2.appInfo()}<br>
	${app3.appInfo()}<br>
	${app4.appInfo()}<br>
	${app5.appInfo()}<br>
	${app6.appInfo()}<br>
	${app7.appInfo()}<br>
	`)
