import Questions from "./question.js";

const container = document.querySelector("#container");
const buttonAnswer = document.querySelector("#btnAnswer");
const questionElement = document.querySelector("#question");
const nextBtn = document.querySelector("#next");
const backButton = document.querySelector("#back")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = Questions[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerHTML = answer.text;
    btn.classList.add("btn");

    if (answer.correct) {
      btn.dataset.correct = "true";
    }

    btn.addEventListener("click", selectAnswer);
    buttonAnswer.appendChild(btn);
  });
}

function selectAnswer(e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";

  if (isCorrect) {
    selectBtn.classList.add("correct");
    selectBtn.style.backgroundColor = "green";
    score++;
  } else {
    selectBtn.classList.add("incorrect");
    selectBtn.style.backgroundColor = "red";
  }

  [...buttonAnswer.children].forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextBtn.style.display = 'block';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Your score is ${score} out of ${Questions.length}`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
}

function resetState() {
 
  document.body.style.backgroundColor = "#fff";

  while (buttonAnswer.firstChild) {
    buttonAnswer.removeChild(buttonAnswer.firstChild);
  }
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < Questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < Questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
function backQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
}

backButton.addEventListener("click",()=>{
  backQuestion()
})

// Start the quiz when page loads
startQuiz();
