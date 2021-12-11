const quizWorld = [{
        question: "Question 1 : Quel est le 6e Président de la Ve République française ?",
        A: "1-Jacques Chirac",
        B: "2-Emmanuel Macron",
        C: "3-Nicolas Sarkozy",
        reponse: "reponse 3"
    },
    {
        question: "Question 2 : Quelle est, à ce jour, la plus grande catastrophe nucléaire de l'histoire de l’humanité ? ",
        A: "1-Fukushima",
        B: "2-Tricastin",
        C: "3-Tchernobyl",
        reponse: "reponse 3"

    },
    {
        question: "Question 3 :Lequel de ces pays a envahi l'Ethiopie en 1935 - 1936 ?",
        A: "1-Espagne",
        B: "2-Royaume-Uni",
        C: "3-Italie",
        reponse: "reponse 3"
    },
    {
        question: "Question 4 :Le plus vieux squelette préhistorique ('Adam') a été retrouvé en",
        A: "1-Asie",
        B: "2-Afrique",
        C: "3-Antarctique",
        reponse: "reponse 2"
    },
    {
        question: "Question 5: Quelle est la capitale économique de la Suisse ?",
        A: "1-Zurich",
        B: "2-Genève",
        C: "3-Berne",
        reponse: "reponse 1"
    },
    {
        question: "Question 6 : Comment surnomme-t-on la première femme préhistorique ?",
        A: "1-Lucy",
        B: "2-La Dame de Flores",
        C: "3-Mary",
        reponse: "reponse 1"
    },
    {
        question: "Question 7 : Quel célèbre réseau social fut créé par Evan Spiegel, Bobby Murphy et Reggie Brown ? ",
        A: "1-Snapchat",
        B: "2-Facebook",
        C: "3-Tiktok",
        reponse: "reponse 1"
    }
];


// variables questions
const question = document.querySelector('.question');
const ques1 = document.querySelector('#ques1');
const ques2 = document.querySelector('#ques2');
const ques3 = document.querySelector('#ques3');
const submit = document.querySelector('#submit');
const reponses = document.querySelectorAll('.repond');

const scoreFull = document.querySelector('#scorefull');


//chargements questions
let questions = 0;
let score = 0;


const chargementQuest = () => {
    const listesQuestions = quizWorld[questions];
    question.innerHTML = listesQuestions.question;

    ques1.innerHTML = listesQuestions.A;
    ques2.innerHTML = listesQuestions.B;
    ques3.innerHTML = listesQuestions.C;
}

chargementQuest();
//on recuperr les reponses dans une variable
const getCheckReponse = () => {
    let repond;
    reponses.forEach((reponseEnCours) => {
        if (reponseEnCours.checked) {
            repond = reponseEnCours.id;



        }
    });
    return repond;
};
const desactiveAll = () => {
    reponses.forEach((reponseEnCours) => reponseEnCours.checked = false);

}
const applaud = () => {
    const audio = new Audio();
    audio.src = "audio/karaoke-tom-sawyer.mp3";
    audio.play();
};
//validation boutton 


submit.addEventListener('click', () => {
    const checkedReponse = getCheckReponse();

    if (checkedReponse === quizWorld[questions].reponse) {
        score++;
    };
    questions++;

    desactiveAll();

    if (questions < quizWorld.length) {
        chargementQuest();
    } else {
        scoreFull.innerHTML = `
        <h4>Quiz terminé, Vous avez réaliser un score de ${score}/${quizWorld.length}<img src="images/bye.gif"/>bye bye !!</4>
        <button class="btn" onclick="location.reload()">Recommencer le Quiz</button></button>`;
        scoreFull.classList.remove('resultat');
        applaud();


    }

});