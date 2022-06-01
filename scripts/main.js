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


buttonValidationPlayer.addEventListener(
    'click',
    ()=>{
        pagePlayerSelect.style.display="none"
        pageGame.style.display="flex"
        pageGame.style.opacity="1"
        displayJoueur()
        selectQuestion()
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


// Changement des scores







// Si un joueur atteint 10, mettre défis


