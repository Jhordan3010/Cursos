dineroCofla = prompt("cuanto dinero tienes Cofla");
dineroRobero = prompt("cuanto dinero tienes Roberto");
dineroPedro = prompt("cuanto dinero tienes Pedro");

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
	alert("Cofla comprate el helado de agua");
	alert("y te sobran " + (dineroCofla - 0.6));
}
else if (dineroCofla >= 1 && dineroCofla< 1.6) {
	alert("Cofla caompra el helado de crema");
	alert("y te sobran " + (dineroCofla - 1));
}
else if(dineroCofla >= 1.6 && dineroCofla < 1.7){
	alert("Cofla comprate el helado de heladix");
	alert("y te sobran " + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
	alert("Cofla comprate el helado de heladovich");
	alert("y te sobran " + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
	alert("Cofla comprate el helado de helardo");
	alert("y te sobran " + (dineroCofla - 1.8));
}
else if (dineroCofla >= 2.9) {
	alert("Cofla helado con cofites o pote de 1/4kg");
	alert("y te sobran " + (dineroCofla - 2.9));
}else{
	alert("Cofla eres pobre");
}

if (dineroCofla >= 0.6 && dineroRobero < 1) {
alert("Roberto comprate el helado de agua");
}
else if (dineroRobero >= 1 && dineroRobero < 1.6) {
	alert("Roberto compra el helado de crema");
}
else if(dineroRobero >= 1.6 && dineroRobero < 1.7){
	alert("Roberto comprate el helado de heladix");
}
else if (dineroRobero >= 1.7 && dineroRobero < 1.8) {
	alert("Roberto comprate el helado de heladovich");
}
else if (dineroRobero >= 1.8 && dineroRobero < 2.9) {
	alert("Roberto comprate el helado de helardo");
}
else if (dineroRobero>= 2.9) {
	alert("Roberto helado con cofites o pote de 1/4kg");
}else{
	alert("Roberto eres pobre");
}

if (dineroPedro >= 0.6 && dineroPedro < 1) {
alert("Pedro comprate el helado de agua");
}
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
	alert("Pedro caompra el helado de crema");
}
else if(dineroPedro >= 1.6 && dineroPedro < 1.7){
	alert("Pedro comprate el helado de heladix");
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
	alert("Pedro comprate el helado de heladovich");
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
	alert("Pedro comprate el helado de helardo");
}
else if (dineroPedro >= 2.9) {
	alert("Pedro helado con cofites o pote de 1/4kg");
}else{
	alert("Pedro eres pobre");
}

