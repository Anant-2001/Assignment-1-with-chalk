var readlineSync = require("readline-sync");
var chalk = require("chalk")
var score = 0;

const questionsAndAnswers = [
  {
    question : "When is my birthday? ",
    answer : "12 september",

  },
  {
    question: "What is my age? ",
    answer : "19",
  },
  {
    question: "What is my fav food? ",
    answer : "chilli potato",
  }
]

const highScores= [
  {
    friend : "Pushp",
    point: 3,
  },
  {
    friend : "Daxi",
    point: 2,
  },
  {
    friend : "Vaibhav",
    point: 1,
  },
]
var username = readlineSync.question("Please enter your name: ");
console.log("Lets see how much do you know me! ");

for (var i=0; i< questionsAndAnswers.length ; i++){
  console.log(questionsAndAnswers[i].question);
  var inputAnswer = readlineSync.question();
  if (questionsAndAnswers[i].answer.toLowerCase()===inputAnswer.toLowerCase()){
    console.log(chalk.green("Right Answer"));
    score++;
  }
  else {
    console.log(chalk.red("Wrong Answer"));
  }
}
console.log(chalk.bold.bgGrey(username + ", your score is", score));

for(var i = 0; i< highScores.length; i++){
  if(score===3) {
    console.log(chalk.bold.green("Yayy! New high score you have beaten everyone"));
    break;
    }
  if(score > highScores[i].point){
    console.log(chalk.cyan(`You have beaten ${highScores[i].friend } who has score ${highScores[i].point} `));
  }
}