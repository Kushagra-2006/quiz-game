const questions = [
  {
    question: 'What is the process of photosynthesis?',
    choices: [
      'Conversion of light energy to chemical energy',
      'Conversion of chemical energy to light energy',
      'Conversion of chemical energy to heat energy',
      'Conversion of light energy to kinetic energy',
    ],
    correctAnswer: 'Conversion of light energy to chemical energy',
  },
  {
    question: 'Which gas is responsible for the greenhouse effect?',
    choices: ['Carbon Dioxide', 'Oxygen', 'Methane', 'Nitrogen'],
    correctAnswer: 'Carbon Dioxide',
  },
  {
    question: 'What is the chemical formula of water?',
    choices: ['CO2', 'H2O', 'O2', 'CH4'],
    correctAnswer: 'H2O',
  },
  {
    question: 'What is the unit of electric current?',
    choices: ['Ampere', 'Volt', 'Watt', 'Ohm'],
    correctAnswer: 'Ampere',
  },
  {
    question: 'Which gas is essential for respiration?',
    choices: ['Oxygen', 'Carbon Dioxide', 'Methane', 'Nitrogen'],
    correctAnswer: 'Oxygen',
  },
  {
    question: 'What is the chemical symbol of gold?',
    choices: ['Au', 'Ag', 'Fe', 'Cu'],
    correctAnswer: 'Au',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    choices: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    correctAnswer: 'Mars',
  },
  {
    question: 'What is the chemical formula of methane?',
    choices: ['CH4', 'H2O', 'CO2', 'O2'],
    correctAnswer: 'CH4',
  },
  {
    question: 'What is the unit of force?',
    choices: ['Newton', 'Joule', 'Watt', 'Ampere'],
    correctAnswer: 'Newton',
  },
  {
    question: 'Which gas is known as Laughing Gas?',
    choices: ['Nitrous Oxide', 'Oxygen', 'Carbon Dioxide', 'Methane'],
    correctAnswer: 'Nitrous Oxide',
  },
];

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

function showPage(pageId) {
  const pages = ['home', 'quiz', 'results'];
  pages.forEach((page) => {
    document.getElementById(page).style.display = 'none';
  });
  document.getElementById(pageId).style.display = 'block';
}

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  showPage('quiz');
  loadQuestion();
}

function loadQuestion() {
  const questionElement = document.getElementById('question');
  const choicesElement = document.getElementById('choices');

  const current = questions[currentQuestion];
  questionElement.innerText = current.question;

  choicesElement.innerHTML = '';
  current.choices.forEach((choice) => {
    const button = document.createElement('button');
    button.innerText = choice;
    button.classList.add('btn');
    button.onclick = () => checkAnswer(choice);
    choicesElement.appendChild(button);
  });
}

function checkAnswer(choice) {
  if (choice === questions[currentQuestion].correctAnswer) {
    score++;
  } else {
    incorrectAnswers.push({
      question: questions[currentQuestion].question,
      incorrectAnswer: choice,
    });
  }
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  showPage('results');
  document.getElementById('score').innerText =
    score + ' out of ' + questions.length;

  const incorrectAnswersElement = document.getElementById('incorrect-answers');
  incorrectAnswers.forEach((item) => {
    const li = document.createElement('li');
    li.innerText = `Q: ${item.question} | Incorrect Answer: ${item.incorrectAnswer}`;
    incorrectAnswersElement.appendChild(li);
  });
}

function restartQuiz() {
  showPage('home');
}

showPage('home');
