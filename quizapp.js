
let questions =
[
    {
        question: "What is the capital of India?",
        answers: ["Mumbai", "New Delhi", "Chennai", "Kolkata"],
        correct: "New Delhi"
    },

    {
        question: "Which is the largest planet in our Solar System?",
        answers: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: "Jupiter"
    },

    {
        question: "Who is known as the Father of the Indian Constitution?",
        answers: [
            "Mahatma Gandhi",
            "Jawaharlal Nehru",
            "B. R. Ambedkar",
            "Sardar Patel"
        ],
        correct: "B. R. Ambedkar"
    },

    {
        question: "Which is the largest ocean on Earth?",
        answers: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Arctic Ocean",
            "Pacific Ocean"
        ],
        correct: "Pacific Ocean"
    },

    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: ["China", "Japan", "Thailand", "South Korea"],
        correct: "Japan"
    },

    {
        question: "How many continents are there on Earth?",
        answers: ["5", "6", "7", "8"],
        correct: "7"
    },

    {
        question: "Which is the longest river in India?",
        answers: ["Yamuna", "Godavari", "Ganga", "Narmada"],
        correct: "Ganga"
    },

    {
        question: "Which gas is most abundant in Earth's atmosphere?",
        answers: [
            "Oxygen",
            "Carbon dioxide",
            "Hydrogen",
            "Nitrogen"
        ],
        correct: "Nitrogen"
    },

    {
        question: "Who was the first person to walk on the Moon?",
        answers: [
            "Yuri Gagarin",
            "Neil Armstrong",
            "Buzz Aldrin",
            "Michael Collins"
        ],
        correct: "Neil Armstrong"
    },

    {
        question: "Which is the smallest continent by land area?",
        answers: [
            "Europe",
            "Antarctica",
            "Australia",
            "South America"
        ],
        correct: "Australia"
    }
];


let usedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function showQuestion()
{
    let random = Math.floor(Math.random() * questions.length);
    while(usedQuestions.includes(random))
    {
        random = Math.floor(Math.random() * questions.length);
    }
    usedQuestions.push(random);
    let currentQuestion = questions[random];

    document.getElementById("question").innerHTML =
        currentQuestion.question;

    let answers = document.getElementById("answers");
    answers.innerHTML = "";
    document.getElementById("feedback").innerHTML = "";

    for(let answer of currentQuestion.answers)
    {
        let button = document.createElement("button");
        button.innerHTML = answer;
        button.onclick = function()
        {
            if(answer == currentQuestion.correct)
            {
                score += 1;
                document.getElementById("feedback").innerHTML =
                    "Correct!";
            }
            else
            {
                document.getElementById("feedback").innerHTML =
                    "Wrong!";
            }
        };

        answers.appendChild(button);
    }


    document.getElementById("next-btn").onclick = function()
    {
        currentQuestionIndex++;
        if(currentQuestionIndex < 10)
        {
            showQuestion();
        }
        else
        {
            document.getElementById("quiz-box").style.display = "none";

            document.getElementById("result-box").style.display = "block";

            document.getElementById("score").innerHTML =
                "Your Score: " + score + " / 10";
        }
    };
}


document.getElementById("restart-btn").onclick = function()
{
    usedQuestions = [];
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("quiz-box").style.display = "block";
    document.getElementById("result-box").style.display = "none";
    showQuestion();
};

showQuestion();


