var basic = require ("./BasicCard.js");
var cloze = require ("./ClozeCard.js");
var inquirer = require('inquirer');

var firstPresident = new basic ("Who was the first president of the United States?", "George Washington");
var firstPresidentCloze = new cloze ("George Washington was the first president of the United States.", "George Washington");

var firstProgrammer = new basic ("Who was the first person to write what we now know of as a computer program", "Ada Lovelace");
var firstProgrammerCloze = new cloze ("Ada Lovelace was the first person to write what we now know of as a computer program","Ada Lovelace");

var quesationsArray = [firstPresident, firstProgrammer];
var quesationsArrayCloze = [firstPresidentCloze, firstProgrammerCloze]


function startPrompt(){
	inquirer.prompt([
		{
		type: "list",
	      message: "Which kind of flashcard would you like to use?",
	      choices: ["Basic", "Cloze"],
	      name: "cardType"
	  	}
		]) .then(function(inquirerResponse) {
	    if (inquirerResponse.cardType === "Basic") {
	    	basicPrompt();
	    } else if (inquirerResponse.cardType === "Cloze"){
	     	clozePrompt();
	    };
	  });
};

function basicPrompt (){
	var random = Math.floor(Math.random()*2);
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
	var random = Math.floor(Math.random()*2);
	console.log(quesationsArrayCloze[random])
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
			console.log ("Not Quite. (It might have been a spelling mistake.)\nAnswer: "+quesationsArrayCloze[random].fulltext);
			startPrompt()
		};
	});
};


startPrompt();
