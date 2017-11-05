var basic = require ("./BasicCard.js");
var cloze = require ("./ClozeCard.js");
var inquirer = require('inquirer');

var q1 = new basic ("Who proposed a 'mechanical difference engine,' the first concept of a programmable computer, in 1833?", "Charles Babbage");
var q1c = new cloze ("In 1833, Charles Babbage proposed a 'mechanical difference engine,' the first concept of a programmable computer", "Charles Babbage")

var q2 = new basic ("Who was the first person to write what we now know of as a 'computer program' in 1842", "Ada Lovelace");
var q2c = new cloze ("in 1842, Ada Lovelace was the first person to write what we now know of as a 'computer program'","Ada Lovelace");

var q3 = new basic ("This US Navy Rear Admiral is colloquially known to have coined the phrase 'debugging'","Grace Hopper");
var q3c = new cloze ("Grace Hopper was a US Navy Rear Admiral who is colloquially known to have coined the term 'debugging'", "Grace Hopper");

var q4 = new basic ("What was the scientific research organization created the first website in 1990", "CERN");
var q4c = new cloze ("CERN is a scientific research organization that created the first website in 1990", "CERN");

var quesationsArray = [q1, q2, q3, q4];
var quesationsArrayCloze = [q1c, q2c, q3c, q4c];


function startPrompt(){
	inquirer.prompt([
		{
		type: "list",
	      message: "Which kind of flashcard would you like to use?",
	      choices: ["Basic", "Cloze", "End Program"],
	      name: "cardType"
	  	}
		]) .then(function(inquirerResponse) {
	    if (inquirerResponse.cardType === "Basic") {
	    	basicPrompt();
	    } else if (inquirerResponse.cardType === "Cloze"){
	     	clozePrompt();
	    } else {
	    	console.log ("See you later!")
	    }
	  });
};

function basicPrompt (){
	var random = Math.floor(Math.random()*4);
	inquirer.prompt([
		{
		type: "input",
		name: "answer",
		message: quesationsArray[random].front +"\n"
		}
	]).then(function(inquirerResponse){
		if (inquirerResponse.answer === quesationsArray[random].back){
			console.log("Correct!");
			startPrompt()
		} else {
			console.log ("Not Quite. (It might have been a spelling mistake.)\nAnswer: "+quesationsArray[random].back);
			startPrompt()
		};
	});
};

function clozePrompt (){
	var random = Math.floor(Math.random()*4);
	inquirer.prompt([
		{
		type: "input",
		name: "answer",
		message: quesationsArrayCloze[random].partial + "\n"
		}
	]).then(function(inquirerResponse){
		if (inquirerResponse.answer === quesationsArrayCloze[random].cloze){
			console.log("Correct!");
			startPrompt()
		} else {
			console.log ("Not Quite. (It might have been a spelling mistake.)\nAnswer: "+quesationsArrayCloze[random].cloze);
			startPrompt()
		};
	});
};


startPrompt();
