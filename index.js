const quiz = require('./candidate-testing');
quiz.runProgram();

const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = input.question("Enter Your First name ");
let candidateName1 = input.question("Enter Your Last name ");
console.log("Greetings " + candidateName + " " + candidateName1);
//Update to greeting First/Last

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

candidateAnswer = input.question(question);
// storing the user input into canddiate answer ).question is a part of the input of what you are asking)


if (candidateAnswer === correctAnswer) {
  console.log("Correct!");
} else {
  console.log("Incorrect - Please check Chapter. 1");
};
// Look at my code - Hi hellllooooo!
/*
//Try 1
candidateAnswer == correctAnswer;

if (candidateAnswer === correctAnswer) {
  console.log("Correct!");
} else {
  console.log("Incorrect - Please review Chapter 1 - History of US Women in space");
}

*/

/*
//Try 2
if (question == correctAnswer) {
  candidateAnswer == true;
}
if (candidateAnswer == "Sally Ride") {
  console.log("Correct!")
} else {
  console.log("Incorrect - Please review Ch.1")
}
  */
/*
//Try 3
if ( correctAnswer === "Sally Ride") {
  candidateAnswer == true;
};

if (correctAnswer == true) {
  console.log("Correct!")
} else {
  console.log("Incorrect - Please review Chapter 1 - History of US Women in space");
};
*/


/*
Try 4
if (candidateAnswer == true) {
  console.log("Correct!");
} else {
  console.log("Incorrect - Please review Chapter 1 - History of US Women in space");
}

*/


//TODO: Variables for Part 2
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //


}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 



  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};