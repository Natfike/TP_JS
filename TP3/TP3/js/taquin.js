/**
* 
* M413 - TD3 - Taquin Game
* * 
* @author Jean-Michel Bruneau
*	@copyright UCA - IUT -INFO
* @version	1.0
* @date			2021-01-31
*
*/
"use strict";

// M413 - Taquin
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

const boxList = document.querySelectorAll(".box");
boxList.forEach(element => {
	element.addEventListener('click',function(event){
		let tmp = '';
	
		let empty = document.querySelector('.empty');
		let clickedBox = event.target;
		if (element != event.target){
			return;
		}

		// Test si changement bon WIP
		var difX = Math.abs(clickedBox.id[1] - empty.id[1]);
		var difY = Math.abs(clickedBox.id[4] - empty.id[4]);
		if (difY + difX == 1){
		clickedBox.classList.add('empty');
			empty.classList.remove('empty');
			
			empty.innerHTML = clickedBox.innerHTML;
			clickedBox.innerHTML = "";
		}

		
		});
})