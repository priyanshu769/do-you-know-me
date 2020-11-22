var readlineSync = require("readline-sync");

var score=0

var userName = readlineSync.question("Your name please: ")
console.log("Hello! "+ userName +", and welcome to DO YOU KNOW Priyanshu?")

console.log("---------------------------")

console.log("It looks like, we are ready to start.")

var questions =[
{
  question: "Can you tell the name of the place he belongs to? ",
  answer:"Patna"
},
{
question: "You can't guess his age but if you know, you know. What's that? ",
answer:"21"
},
{
  question:"The thing that has never bored him, meaning what he loves the most? ",
  answer:"Riding"
}
]

  function play(question,answer){
    var userAnswer= readlineSync.question(question);
    if (userAnswer.toLowerCase() === answer.toLowerCase() ){
    console.log("You are absolutely right!")
    score= score + 5;
    }
    else{
      console.log("I can understand, knowing him is little tough. He's not that open.")
      score = score + 0;
    }
  }

for(var i=0;i<questions.length;i++){
  currentQuestion =questions[i]
  play(currentQuestion.question,currentQuestion.answer)
}

console.log("YAY! You SCORED: ", score);
