const questions = [
    {
        question : "What is the capital of India?",
        options : [
                    {text: "Rome", correct: false},
                    {text: "New Delhi", correct: true},
                    {text: "Tokyo", correct: false},
                    {text: "London", correct: false}
        ]
    },

    {
        question : "Which is largest ocean in the world?",
        options : [
                    {text: "Antlantic", correct: false},
                    {text: "Indian", correct: false},
                    {text: "Pacific", correct: true},
                    {text: "Arctic", correct: false}
        ]
    },

    {
        question : "Which planet in the solar system is known as the “Red Planet”?",
        options : [
                    {text: "Venus", correct: false},
                    {text: "Earth", correct: false},
                    {text: "Mars", correct: true},
                    {text: "Jupiter", correct: false}
        ]
    },

    {
        question : "What is the capital of Japan?",
        options : [
                    {text: "Beijing", correct: false},
                    {text: "Tokyo", correct: true},
                    {text: "Seoul", correct: false},
                    {text: "Bangkok", correct: false}
        ]
    },

    {
        question : "What gas is used to extinguish fires?",
        options : [
                    {text: "Oxygen", correct: false},
                    {text: "Nitrogen", correct: true},
                    {text: "Carbon dioxide", correct: false},
                    {text: "Hydrogen", correct: false}
        ]
    },

    {
        question : "What animal is the national symbol of Australia?",
        options : [
                    {text: "Kangaroo", correct: true},
                    {text: "Koala", correct: false},
                    {text: "Emu", correct: false},
                    {text: "Crocodile", correct: false}
        ]
    },

    {
        question : "Which of the following planets is not a gas giant?",
        options : [
                    {text: "Mars", correct: true},
                    {text: "Jupiter", correct: false},
                    {text: "Saturn", correct: false},
                    {text: "Uranus", correct: false}
        ]
    },

    { 
        question : "Hitler's party is known as:",
        options : [
                    {text: "Labour Party", correct: false},
                    {text: "Nazi Party", correct: true},
                    {text: "Ku-Klux-Klan", correct: false},
                    {text: "Democratic Party", correct: false}
        ]
    },

    {
        question : "Which is the largest island?",
        options : [
                    {text: "New Guinea", correct: false},
                    {text: "Andaman Nicobar", correct: false},
                    {text: "Greenland", correct: true},
                    {text: "Hawaii", correct: false}
        ]
    },

    {
        question : "Which one is the hottest continent?",
        options : [
                    {text: "Africa", correct: true},
                    {text: "South Asia", correct: false},
                    {text: "North America", correct: false},
                    {text: "Australia", correct: false}
        ]
    }
];




let startBtn = document.querySelector('.start-btn');
let exitBtn = document.querySelectorAll('.exit-btn');
let conReplayBtn = document.querySelectorAll(".continue-btn");
let nextBtn = document.querySelector('.next-btn');

let ques = document.querySelector('.ques');
let optBtns = document.querySelectorAll(".options-box button");

let questionNoIndex = 0;
let TotalScore = questions.length;

startBtn.addEventListener("click",() => {
    startBtn.style.display = "none";
    document.querySelector('.rules-box').style.display = "block";   
})


conReplayBtn.forEach(crBtn => {
    crBtn.addEventListener("click",() => {
        document.querySelector('.rules-box').style.display = "none";
        document.querySelector('.score-box').style.display = "none";
        document.querySelector('.quiz-box').style.display = "block";
        TotalScore = questions.length;
        questionNoIndex = 0;
        getQuestion(questionNoIndex);
    });
})



function getQuestion(questionNoIndex){
    nextBtn.style.display = "none";
    let i=0;
    document.querySelector('#quesNo').innerText = questionNoIndex + 1;
    ques.innerText = questionNoIndex+1 + ". "+questions[questionNoIndex].question;
    optBtns.forEach(option => {
        option.innerText = questions[questionNoIndex].options[i].text;
        option.dataset.correct = questions[questionNoIndex].options[i].correct;
        i++;

        option.onclick = () => {
            getAnswer(option,option.dataset.correct);
        }
        
    })

}


function getAnswer(button,isCorrect){
    if(isCorrect === "false"){
        button.classList.add("incorrect");
        TotalScore--;
    }

    optBtns.forEach(option => {
        if(option.dataset.correct === "true"){
            option.classList.add("correct");
        }

        option.disabled = true;
    })
    
    nextBtn.style.display = "block";
}


nextBtn.addEventListener("click",() => {
    
    optBtns.forEach(option => {
        option.disabled = false;
        option.classList.remove("incorrect");
        option.classList.remove("correct");
        option.dataset.correct = "false";
    })

    questionNoIndex++;
    if(questionNoIndex < questions.length){
        getQuestion(questionNoIndex);
    }else{
        document.querySelector('.quiz-box').style.display = "none";
        document.querySelector('.score-box').style.display = "flex";
        document.querySelector('#totalScore').innerText = TotalScore;
        if(TotalScore < 5){
            document.querySelector('.wish').innerText = "Good Try!";
        }else{
            document.querySelector('.wish').innerText = "Congratulations!";
        }
    }
    
})

exitBtn.forEach(eBtn => {
    eBtn.addEventListener("click",() => {
        document.querySelector('.rules-box').style.display = "none";
        document.querySelector('.score-box').style.display = "none";
        startBtn.style.display = "block";
    })
})



