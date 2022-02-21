const quizData = [
  {
    question: "Q.1 What is India's rank on EIU's Global Democracy Index 2019?",
    a: "48th Rank",
    b: "50th Rank",
    c: "53rd Rank",
    d: "51st Rank",
    correct: "d",
  },
  {
    question: "Q.2 Which of the following states is not located in the North?",
    a: " Jharkhand",
    b: "Jammu and Kashmir",
    c: "Himachal Pradesh",
    d: "Haryana",
    correct: "a",
  },
  {
    question: "Q.3 The head quarters of world trade organization is in",
    a: "Montreal",
    b: "Seattle",
    c: "Geneva",
    d: "the Hague",
    correct: "c",
  },
  {
    question: "Q.4 Which is the largest coffee producing state of India?",
    a: "Kerala",
    b: "Tamil Nadu",
    c: "Karnataka",
    d: "Arunachal Pradesh",
    correct: "c",
  },
  {
    question: "Q.5Which state has the largest population?",
    a: "Uttar Pradesh",
    b: "Maharastra",
    c: "Bihar",
    d: "Andra Pradesh",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("optionA");
const b_text = document.getElementById("optionB");
const c_text = document.getElementById("optionC");
const d_text = document.getElementById("optionD");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
             <h2>You answered ${score}/${quizData.length} questions correctly</h2>
  
             <button onclick="location.reload()">Reload</button>
             `;
    }
  }
});
