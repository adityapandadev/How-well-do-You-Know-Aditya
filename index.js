// Importing Packages
var input = require('readline-sync');

// declaring variables

var output = console.log

var chalk = require('chalk');

var score = 0;

var uName = input.question(chalk.yellow("Hi..What is Your Name? "));

output("\n");

// Welcome messages and rules


output(chalk.magentaBright("Hello! ") + uName + chalk.magentaBright(" Welcome to How Well Do You Know Aditya game.\n"))

output(chalk.white.bgRed("Rule : all Input must be in LowerCase\n"));

// function declarartion

function play(question,answer){
  var uAnswer = input.question(question);
  if(uAnswer === answer){
    score = score + 1;
  }else{
    score = score;
  }
}

// questionList Array declarartion

var questionList = [
  {
    question : "What is Aditya's Nickname? ",
    answer : "kanu"
  },
  {
    question : "Aditya's Favourite Food Name? ",
    answer : "mushroom"
  },
  {
    question : "What is the name of Aditya's Laptop Brand? ",
    answer : "hp"
  },
  {
    question : "Aditya's Hometown name? ",
    answer : "jagdalpur"
  },
  {
    question : "What is Aditya's birth month? ",
    answer : "october",
  }
]
//  iterating through the questionList

for(i = 0 ; i < questionList.length ; i++){
  var currentQuestion = questionList[i];
  output("\n")
  play(chalk.green(currentQuestion.question),currentQuestion.answer);
}

// output statements
output(chalk.redBright("\nThanks For Playing!!!\n"))
output(chalk.redBright("Your Total Score is : ") + score)

// highscore
var name;
var tscore;

var highscoreList = [
  {
    name : "Purva",
    tscore : 5
  },
  {
    name : "Kanu",
    tscore : 3
  }
]

output(chalk.yellowBright("\nHigh Score list\n"));

for(h=0 ; h < highscoreList.length ; h++){
  var hs = highscoreList[h];
  output(hs.name + " " + hs.tscore);
}

output(chalk.redBright("\nSend me ScreenShot of your score, i will put your name if its High score"));
