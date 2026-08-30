const quizQuestions = [

    {
        question:
            "Which function is the entry point of a C program?",

        options: [
            "start()",
            "main()",
            "run()",
            "begin()"
        ],

        answer: 1
    },


    {
        question:
            "Which operator is used to get the address of a variable?",

        options: [
            "*",
            "&",
            "%",
            "#"
        ],

        answer: 1
    },


    {
        question:
            "Which data type stores a whole number?",

        options: [
            "float",
            "char",
            "int",
            "double"
        ],

        answer: 2
    },


    {
        question:
            "Which loop executes at least once?",

        options: [
            "for",
            "while",
            "do-while",
            "none"
        ],

        answer: 2
    },


    {
        question:
            "Which function opens a file?",

        options: [
            "open()",
            "fopen()",
            "file()",
            "read()"
        ],

        answer: 1
    }

];


let currentQuestion = 0;

let quizScore = 0;

let questionAnswered = false;


function renderQuiz() {

    const question =
        quizQuestions[currentQuestion];


    document.getElementById(
        "questionNumber"
    ).textContent =
        `Question ${currentQuestion + 1} / ${quizQuestions.length}`;


    document.getElementById(
        "question"
    ).textContent =
        question.question;


    const options =
        document.getElementById("options");


    options.innerHTML =
        question.options.map(
            (option, index) => `

                <button
                    class="option"
                    onclick="selectAnswer(${index})">

                    ${String.fromCharCode(65 + index)}.
                    ${option}

                </button>

            `
        ).join("");


    document.getElementById(
        "quizResult"
    ).textContent = "";


    document.getElementById(
        "nextQuestion"
    ).disabled = true;


    questionAnswered = false;

}


function selectAnswer(index) {

    if (questionAnswered) return;


    questionAnswered = true;


    const question =
        quizQuestions[currentQuestion];


    const buttons =
        document.querySelectorAll(".option");


    if (index === question.answer) {

        buttons[index]
            .classList.add("correct");

        quizScore++;

        document.getElementById(
            "quizResult"
        ).textContent =
            "✓ Correct!";

    }

    else {

        buttons[index]
            .classList.add("wrong");


        buttons[question.answer]
            .classList.add("correct");


        document.getElementById(
            "quizResult"
        ).textContent =
            "✕ Not quite.";

    }


    document.getElementById(
        "nextQuestion"
    ).disabled = false;

}


document.getElementById(
    "nextQuestion"
).addEventListener(
    "click",
    () => {

        currentQuestion++;


        if (
            currentQuestion <
            quizQuestions.length
        ) {

            renderQuiz();

        }

        else {

            document.getElementById(
                "questionNumber"
            ).textContent =
                "QUIZ COMPLETE";


            document.getElementById(
                "question"
            ).textContent =
                `Your Score: ${quizScore} / ${quizQuestions.length}`;


            document.getElementById(
                "options"
            ).innerHTML = `

                <p style="color:var(--muted)">
                    Great work! Keep practicing C.
                </p>

            `;


            document.getElementById(
                "quizResult"
            ).textContent =
                "🏆 Quiz completed";


            document.getElementById(
                "nextQuestion"
            ).disabled = true;

        }

    }
);


renderQuiz();
