var questions = [];

questions[0]={
  question: "What is the name of Hagrid's dog?",
	choice: ["Cerberus", "Fluffy", "Hydra", "Spot"],
	answer: 1
};
questions[1]={
	question: "What is Ron's last name?",
	choice: ["Weasley", "Wesley", "Westley", "Wisely"],
	answer: 0
}; 
questions[2]={
	question: "Which of the following is NOT a House at Hogwarts?",
	choice: ["Hufflepuff", "Ravenclaw", "Slytherin", "Waterloo"],
	answer: 3
};
  
document.getElementById("question").textContent = questions[0].question;
document.getElementById("choices0").textContent = questions[0].choice[0];
document.getElementById("choices1").textContent = questions[0].choice[1];
document.getElementById("choices2").textContent = questions[0].choice[2];
document.getElementById("choices3").textContent = questions[0].choice[3];

var userScore = 0;
var questionNum = 0;

  $("#next").click(function() {
   
  
  if($("form input[name=answer]:checked").val() == questions[questionNum].answer) {
    userScore++;
    console.log ("This works!")
  }
  

    if (questionNum == (questions.length - 1)) {
    document.getElementsByTagName("form")[0].style.display = "none";
      
    document.getElementById("question").textContent ="Your score is " + userScore  + " out of 3!";
    }
  
    questionNum++;
  
    document.getElementById("question").textContent = questions[questionNum].question;
    document.getElementById("choices0").textContent = questions[questionNum].choice[0];
    document.getElementById("choices1").textContent = questions[questionNum].choice[1];
    document.getElementById("choices2").textContent = questions[questionNum].choice[2];
    document.getElementById("choices3").textContent = questions[questionNum].choice[3];


  });    

  
