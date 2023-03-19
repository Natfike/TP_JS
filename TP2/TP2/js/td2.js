/**
* 
* M413 - TD2
* * 
* 	@author Jean-Michel Bruneau
*	@copyright UCA - IUT -INFO
* 	@version	1.0
* 	@date			2021-01-31
*
*/
"use strict";

// M413 - TD2
let message = 'JavaScript is ok :)';
// alert( message);
console.log( message);

function onLoad() {
	console.log( 'Processus de chargement du document terminé…');
	//document.querySelector('body').addEventListener('click',initSelect);
	//document.querySelector('body').addEventListener('click',select);

	// Création de la div des enfers ?

	var div = document.createElement('div');
	div.id="insert-div";
	var select = document.createElement('select');
	select.id="insert-type";
	select.name="type";
	let option1 = document.createElement('option');
	option1.value="div";
	option1.text="div";
	let option2 = document.createElement('option');
	option2.value="p";
	option2.text="p";
	let option3 = document.createElement('option');
	option3.value="span";
	option3.text="span";
	select.appendChild(option1);
	select.appendChild(option2);
	select.appendChild(option3);
	div.appendChild(select);
	document.body.insertBefore(div,document.body.firstChild);

	let input = document.createElement('input');
	input.type = "text";
	input.id = "insert-text";
	input.value = "My New Text Element";
	let br = document.createElement('br');
	div.appendChild(br);
	div.appendChild(input);

	//document.body.addEventListener('click',select2);
	var pageBase = document.body.innerHTML;
	document.getElementById("researchButton").addEventListener('click',rechercheGalere)
}

function initSelect(event){
	let target = event.target;
	target.classList.add('red');
}

function select(event){
	let target = event.target;
	console.log(target)
	target.classList.toggle('red')
}

function select2(event){
	let target = event.target;
	let div = event.target;
	var parent = event.target.parentNode;
	insertElement(target);
	//console.log(parent);
	var i = 0;
	while (parent.tagName!="BODY" && i<100) {
		//console.log(parent.tagName);
		if (parent.tagName==="DIV"){
			div = parent;
		}
		parent = parent.parentNode;
	}
	if (div.id != "insert-div"){
		target.classList.toggle('blue');
	} 
}

function rechercheGalere(){
	var texte = document.getElementById("researchText").value;
	console.log(texte);
	var t = document.body.innerHTML.replaceAll(texte,`<span class="select">${texte}</span>`);
	document.body.innerHTML = t;
}


function insertElement(target){
	var selectType = document.getElementById('insert-type').value;
	var selectText = document.getElementById('insert-text').value;
	var newElement = document.createElement(selectType);
	newElement.textContent = selectText;
	target.appendChild(newElement);

}

// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad;
