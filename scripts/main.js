// Questions


let data = {
    "questions":[
        "Ceci est la première question du jeu, si vous tombez dessus tout le monde prend 5 pénalités",
        "Ceux qui n'ont pas le permis prennent 3 pénalités",
        "Plutôt football ou basket ? Votez en même temps, les minoritaires prennent 2 pénalités",
        "Le joueur le plus grand en taille distribue 4 pénalités",
        "Tu as fait caca aujourd'hui ? Prends 3 pénalités"
    ]
}


// COUNT BEER

const firstDot = document.querySelector('#firstDot')
const secondDot = document.querySelector('#secondDot')
const thirdDot = document.querySelector('#thirdDot')

let numberBeer = 1


firstDot.addEventListener(
    'click',
    ()=>{
        emptyBeer()
    }
)

function emptyBeer(){
    if(numberBeer==0){
        firstDot.src='images/beer.png'
        firstDot.classList.remove("whiteDotImg")
        firstDot.classList.add("beerImg")
        numberBeer = 1 
    }
    else if(numberBeer==1){
        firstDot.src='images/whiteDot.png'
        firstDot.classList.add("whiteDotImg")
        firstDot.classList.remove("beerImg")
        numberBeer = 0
    }
    else if(numberBeer>1){
        secondDot.src='images/whiteDot.png'
        secondDot.classList.add("whiteDotImg")
        secondDot.classList.remove("beerImg")
        thirdDot.src='images/whiteDot.png'
        thirdDot.classList.add("whiteDotImg")
        thirdDot.classList.remove("beerImg")
        numberBeer=1
    }
}

secondDot.addEventListener(
    'click',
    ()=>{
        if(numberBeer==0){
            firstDot.src='images/beer.png'
            firstDot.classList.remove("whiteDotImg")
            firstDot.classList.add("beerImg")
            secondDot.src='images/beer.png'
            secondDot.classList.remove("whiteDotImg")
            secondDot.classList.add("beerImg")
            numberBeer = 2 
        }
        else if(numberBeer==1){
            secondDot.src='images/beer.png'
            secondDot.classList.remove("whiteDotImg")
            secondDot.classList.add("beerImg")
            numberBeer = 2
        }
        else if(numberBeer==3){
            thirdDot.src='images/whiteDot.png'
            thirdDot.classList.add("whiteDotImg")
            thirdDot.classList.remove("beerImg")
            numberBeer=2
        }
    }
)

thirdDot.addEventListener(
    'click',
    ()=>{
        if(numberBeer==0){
            firstDot.src='images/beer.png'
            firstDot.classList.remove("whiteDotImg")
            firstDot.classList.add("beerImg")
            secondDot.src='images/beer.png'
            secondDot.classList.remove("whiteDotImg")
            secondDot.classList.add("beerImg")
            thirdDot.src='images/beer.png'
            thirdDot.classList.remove("whiteDotImg")
            thirdDot.classList.add("beerImg")
            numberBeer = 3 
        }
        else if(numberBeer==1){
            secondDot.src='images/beer.png'
            secondDot.classList.remove("whiteDotImg")
            secondDot.classList.add("beerImg")
            thirdDot.src='images/beer.png'
            thirdDot.classList.remove("whiteDotImg")
            thirdDot.classList.add("beerImg")
            numberBeer = 3
        }
        else if(numberBeer==2){
            thirdDot.src='images/beer.png'
            thirdDot.classList.remove("whiteDotImg")
            thirdDot.classList.add("beerImg")
            numberBeer=3
        }
    }
)


// CREATION LISTE JOUEURS

const buttonAddPlayer = document.querySelector('.buttonAddPlayer')
const inputAddPlayer = document.querySelector('.inputAddPlayer')
const containerlistPlayer = document.querySelector('.containerlistPlayer')
let listeJoueur= []

buttonAddPlayer.addEventListener(
    'click',
    ()=>{
        let joueur1 = new Joueur
        inputAddPlayer.value=""
        emptyBeer()
        listeJoueur.push(joueur1)
    }
)

class Joueur {
    constructor(nom, niveau, points) {
        this.nom = inputAddPlayer.value
        this.niveau = numberBeer
        this.points = 0
        
        

        let newDiv = document.createElement("div")
        newDiv.classList.add('rowPlayerList')

        let newPlayer = document.createElement("h2")
        newPlayer.classList.add('subTitlePlayer')
        newPlayer.innerText = this.nom

        let newLevel = document.createElement("img")
        newLevel.src = "images/level" + numberBeer + ".png"



        newDiv.appendChild(newPlayer)
        newDiv.appendChild(newLevel)
        containerlistPlayer.appendChild(newDiv)

    }
}

// Changer de page

const pagePlayerSelect = document.querySelector('.pagePlayerSelect')
const buttonValidationPlayer = document.querySelector('.buttonValidationPlayer')
const pageGame = document.querySelector('.pageGame')
const listeScoreGame = document.querySelector('.listeScoreGame')
const scoreJoueurs = document.querySelector('.scoreJoueurs')
const containerChangeScore = document.querySelector('.containerChangeScore')


buttonValidationPlayer.addEventListener(
    'click',
    ()=>{
        pagePlayerSelect.style.display="none"
        pageGame.style.display="flex"
        pageGame.style.opacity="1"
        displayJoueur()
        selectQuestion()
        changeScore()
    }
)

function displayJoueur(){
    for(let i=0; i<listeJoueur.length; i++){
        let addPlayerScore = document.createElement("div")
        addPlayerScore.classList.add('scoreJoueurs')
        addPlayerScore.innerText= listeJoueur[i].nom + " : " + listeJoueur[i].points +" points"
        listeScoreGame.appendChild(addPlayerScore)
    }
}

function changeScore(){
    for(let i=0;i<listeJoueur.length; i++){
       let changePlayerScore = document.createElement("div")
       changePlayerScore.classList.add('rowScorePlayer') 
       let changePlayerScoreName = document.createElement('h2')
       changePlayerScoreName.classList.add('subTitle')
       changePlayerScoreName.innerText= listeJoueur[i].nom
       let changePlayerScoreInput = document.createElement('input')
       changePlayerScoreInput.setAttribute("type", "number")
       changePlayerScoreInput.setAttribute("min", "0")
       changePlayerScoreInput.setAttribute("max", "10")
       changePlayerScoreInput.classList.add('selectValue')
       changePlayerScore.appendChild(changePlayerScoreName)
       changePlayerScore.appendChild(changePlayerScoreInput)
       containerChangeScore.appendChild(changePlayerScore)       
    }
}

// Séléction d'une question au hasard

const question = document.querySelector('.question')

function selectQuestion(){
    question.innerText = data["questions"][Math.floor(Math.random() * (data["questions"].length - 0))]
}

// Possiblité de relancer la question

const replayBtn = document.querySelector('#replay')

replayBtn.addEventListener(
    'click',
    ()=>{
        selectQuestion()
    }
)




// Affichage des résultats

const buttonSeeResult = document.querySelector('.buttonSeeResult')
const pageResults = document.querySelector('.pageResults')

buttonSeeResult.addEventListener(
    'click',
    ()=>{
        pageGame.style.display="none"
        pageResults.style.display="flex"
        pageResults.style.opacity="1"
        
    }
)


// Retour au jeu et Changement des scores

const buttonNextQuestion = document.querySelector('.buttonNextQuestion')
let tenpenalties = false

buttonNextQuestion.addEventListener(
    'click',
    ()=>{
        const selectValue = document.querySelectorAll('.selectValue')

        for(let i=0;i<listeJoueur.length; i++){
            listeJoueur[i].points=selectValue[i].value
            if(listeJoueur[i].points==10){
                tenpenalties=true
            }
        }
        if(tenpenalties==true){

        }
        else if(tenpenalties==false){
            pageResults.style.display="none"
            pageGame.style.display="flex"
            updateScore()

        }

    }
)

function updateScore(){
    const scoreJoueursList = document.querySelectorAll('.scoreJoueurs')
    for(let i=0; i<scoreJoueursList.length; i++){
        scoreJoueursList[i].innerText= listeJoueur[i].nom + " : " + listeJoueur[i].points +" points"
    }
}

function setChallenge(){
    
}






// Si un joueur atteint 10, mettre défis


