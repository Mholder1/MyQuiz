const quizData = [
    {
        question: 'What is the capital of France?',
        a: 'Paris',
        b: 'Berlin',
        c: 'London',
        d: 'Lisbon',
        correct: 'a'
    }, {
        question: 'Most used programming language?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    }, {
        question: 'Who is the president of the US?',
        a: 'Obi Wan',
        b: 'Donald Trump',
        c: 'Joe Biden',
        d: 'Boris Johnson',
        correct: 'c'
    }, {
        question: 'Who plays at Loftus Road Stadium?',
        a: 'QPR',
        b: 'Fulham',
        c: 'Brentford',
        d: 'Chelsea',
        correct: 'a'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicopters Terminals Motorboats Lamborghinis',
        correct: 'a'
    }
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const question = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submit = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz() {
     
    deSelect();
    const currentQuizData = quizData[currentQuiz];

    question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

    

function deselectAnswers() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
        answer = answerEl.id

    }
});
    return answer;
}

function deSelect() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

submit.addEventListener('click', () => {

    const answer = deselectAnswers();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
        score++;
        }
        
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `<h2>You've finished.
             You scored ${score}/${quizData.length} questions.</h2>
             <button onclick="location.reload()">Reload</button>`
            
        }
    }
    });
