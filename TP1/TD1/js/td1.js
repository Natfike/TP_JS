'use strict';

// M413 - TD1
let message = 'JavaScript is ok :)';
let month=["January","February","March","April","May","June","July","August","September","October","November","December"];
let day=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];


// alert( message);
console.log(message);

function onLoad() {
	console.log( 'In onLoad() function…');
	// Your JavaScript code goes here !
}

function defineHeading1(){
	var h1 = document.getElementById("title");
	document.title=h1.textContent;
}

function defineHeading2(){
	var h2s = document.querySelectorAll('h2');
	if(h2s.length==0){return;}
	document.title = h2s[0].textContent;
}

function defineHeading3(){
	var h2s = document.querySelectorAll('h2');
	if (h2s.length==0){document.title="Erwan Hain";}
	else{document.title=h2s[h2s.length-1].textContent;}
}

function defineHeading4(){
	var firstOrLast = document.querySelectorAll('.firstOrLast');
	if(firstOrLast.length==0){document.title="Erwan Hain";}
	else if (firstOrLast.length%2==0){document.title=firstOrLast[0].textContent;}
	else{document.title=firstOrLast[firstOrLast.length-1].textContent;}
}

function swapInnerHTML(){
	var p = document.querySelectorAll('p');
	var tmp = p[0].innerHTML;
	p[0].innerHTML = p[1].innerHTML;
	p[1].innerHTML = tmp;
}

function dateAlter(){
	var derniereModif = new Date(document.lastModified);
	const texte = "Dernière modification : " + day[derniereModif.getDay()-1] + " the  " + derniereModif.getDate() + " of " + month[derniereModif.getMonth()] + " " + derniereModif.getFullYear() + " by " + document.querySelectorAll('meta[name]')[0].getAttribute("content");
	// le vendredi 18 janvier 2021 par Nom Prénom
	document.getElementById('holal').textContent=texte;
}

function getNbDays(){
	const now = Date.now();
	const vacances = Date.parse('19 Jul 2023 00:00:00 GMT');
	const dif = vacances - now;
	const waiting = dif/1000/60/60/24;
	document.getElementById('vacances').textContent=`Il reste ${waiting | 0} jours avant le 19 juillet 2023 `
}

function updateClock(){
	const time = new Date(Date.now());
	document.getElementById('clock').textContent=`Voici l'heure : ${time.toTimeString().split(' ')[0]}`
}

function clock(){
	const time = new Date(Date.now());
	document.getElementById('clock-nul').textContent=`Voici l'heure au chargement de la page: ${time.toTimeString().split(' ')[0]}`

}

function updateClock1(){
	window.setInterval(updateClock,1000);
}

function updateClock2(){
	window.setTimeout(clock,1)
}

function updateGraphicClock(){
	var time = new Date(Date.now());
	const timeString = time.toTimeString().split(' ')[0];
	const value = [timeString[0],timeString[1],timeString[3],timeString[4]];
	const liste_img = document.querySelectorAll('img');
	for(let i=0;i<liste_img.length;i++){
		liste_img[i].src=`assets/images/${value[i]}.gif`
	}
}

function intervalGraphicClock(){
	window.setInterval(updateGraphicClock,1000)
}

//defineHeading1();
//defineHeading2();
defineHeading3();
defineHeading4();
swapInnerHTML();
dateAlter();
const vacancesP = document.getElementById('vacances');
vacancesP.addEventListener('click',getNbDays);
updateClock1();
updateClock2();
updateGraphicClock();
intervalGraphicClock();

console.log(document.title);