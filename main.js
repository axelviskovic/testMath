// Questions
let variable1, data, joueur1, joueur2, joueur3

function defineQuestions(){
    data = {
        "jeu":[
            "Ceci est la première question du jeu, si vous tombez dessus tout le monde prend 4 gorgées",
            "Ceux qui n'ont pas le permis B prennent 3 gorgées",
            "Plutôt football ou basket ? Votez en même temps, les minoritaires prennent 2 gorgées",
            "Le joueur le plus grand en taille distribue 4 gorgées",
            "Tu as fait caca aujourd'hui ? Prends 1 gorgées",
            "Ceux qui n'ont jamais embrassé quelqu'un du même sexe prennent 2 gorgées",
            "Si tu n'as jamais vomi à cause de l'alcool c'est bien mais tu prends 3 gorgées",
            "Ceux qui ont déjà conduit sous drogue/alcool prennent 2 gorgées bande de dangers",
            "Prends une gorgée pour chaque tatouage que tu as",
            "Les personnes qui ont déjà couché le premier soir prennent 2 gorgées",
            "À tour de rôle citez une capitale, la personne qui répète ou ne trouve pas prend 3 gorgées",
            "Ceux qui n'ont pas continué les études après le bac prennent 2 gorgées",
            "Ceux qui sont ensemble ou on été ensemble en cours prennent 3 gorgées",
            "À tour de rôle épelez le nom de la famille de votre voisin de droite, 2 gorgées en cas d'échec",
            "Plutôt Damso ou Ninho ? Votez et les minoritaires prennent 3 gorgées",
            "Si tu t'es déjà fait arrêter ou contrôler par la police prends 2 gorgées",
            "Si tu t'appelles Axel tu peux distribuer 6 gorgées :)",
            "Les personnes qui pourraient embrasser leur voisin de droite distribuent 4 gorgées",
            "Ceux qui ne sont jamais allés en concert prennent 3 gorgées",
            "Les fumeurs prennent 2 gorgées",
            "Le premier à dire le nom de la musique qui passe distribue 2 gorgées (sauf celui qui lit)",
            "À tour de rôle citez un personnage des Simpson, la personne qui répète ou ne trouve pas prend 3 gorgées",
            "Plutôt Rick et Morty ou Les Simpson ? Les minoritaires prennent 3 gorgées",
            "Ceux qui n'ont vu aucun Star Wars prennent 3 gorgées. Cheh",
            "Les gens célibataires prennent 2 gorgées",
            "Les personnes en couple prennent 3 gorgées",
            "Plutôt Mister V ou Jonathan Cohen ? Les minoritaires prennent 3 gorgées",
            "Plutôt partir en Italie ou en Espagne ? Les minoritaires prennent 3 gorgées",
            "La personne qui lit met une musique, la personne qui trouve le titre distribue 4 gorgées",
            "Plutôt vodka ou rhum ? Les minoritaires prennent 2 gorgées",
            "À tour de rôle citez un rappeur d'ile de france, la personne qui ne trouve pas prend 3 gorgées",
            "Si tu es venu en moto tu peux distribuer 2 gorgées",
            "Si tu es venu en voiture distribue 3 gorgées",
            "La personne qui organise la soirée distribue 5 gorgées",
            "Ceux qui savent faire l'équilibre distribuent 2 gorgées. 2 de plus si il y a la preuve en direct",
            "La première personne à enlever son t-shirt distribue 4 gorgées",
            "La première personne à envoyer un message à sa mère distribue 3 gorgées",
            "Si tu chausses en dessous de 42 tu prends 2 gorgées",
            "Si t'as déjà trompé tu prends 3 gorgées.",
            "Si tu as déjà flirté avec quelqu'un ici prend 3 gorgées",
            "Ceux qui fument de la drogue à cette soirée prennent 3 gorgées",
            "Parc Astérix ou Disneyland ? Les minoritaires prennent 2 gorgées",
            "À tour de rôle citez un instrument de musique, la personne qui ne trouve pas prend 3 gorgées",
            "La personne qui a les plus petites mains prend 3 gorgées",
            "La personne qui a le plus bu distribue 3 gorgées à 2 personnes",
            "Si tu as un animal de compagnie donne son nom et prend 1 gorgée. Si tu en as au moins 2 Prends en 2",
            "Ceux qui sont nés avant 2000 prennent 2 gorgées",
            "Ceux qui connaissent la date de naissance d'au moins un de leurs voisins distribuent 2 gorgées",
            "Si tu as écouté Voyageur cette semaine tu es bg et tu distribues 3 gorgées",
            "Ceux qui ont un compte Twitter prennent 1 gorgée",
            "Ceux qui sont actifs sur TikTok prennent 2 gorgées",
            "Ceux qui postent du contenu sur Youtube ou Tiktok distribuent 2 gorgées",
            "Ceux qui ont quitté la France cette année prennent 3 gorgées",
            "Si tu as déjà pris de la drogue dure prend 3 gorgées",
            "Plutôt Rap fr ou Rap us ? Les minoritaires prennent 2 gorgées",
            "À tour de rôle citez une ville qui commence par une voyelle, la personne qui ne trouve pas prend 3 gorgées",
            "Si tu es percé tu peux distribuer 2 gorgées",
            "Si tu penses souvent à ton ex tu prends 2 gorgées",
            "Les détenteurs d'un skateboard prennent 3 pénaliés",
            "Ceux qui ont déjà fini en GAV prennent 3 gorgées",
            "Si tu connais la signification de BBC tu prends 2 gorgées",
            "À tour de rôle citez un chanteur décédé. La personne qui ne trouve pas prend 3 gorgées",
            "Votez pour la personne qui a le plus beau prénom et qui prendra 2 gorgées",
            "Votez pour la personne la plus belle qui prendra 3 gorgées",
            "Si tu as un grand frère ou une grande soeur prend 2 gorgées",
            "À tour de rôle dites la personne la plus connue que vous avez vue dans votre vie, la personne qui a la meilleure anecdote distribue 4 gorgées",
            "Plutôt Transformers ou Avengers ? Les minoritaires prennent 2 gorgées",
            "Désignez ensemble la personne qui prendra 2 gorgées",
            "Désignez ensemble la personne qui aura le choix entre faire 10 pompes et recevoir 3 gorgées",
            "Tous ceux qui ont de la vodka dans leur verre prennent 2 gorgées",
            "Tous ceux qui boivent de la bière à cette soirée prennent 2 gorgées",
            "Ceux qui ont déjà trouvé de l'argent par terre prennent 1 gorgée",
            "Votez pour la personne qui a le plus de chance de devenir riche. Bill Gates prendra 2 gorgées",
            "Ceux qui ont déjà pris une photo avec une célébrité prennent 1 gorgée, et disent avec qui c'était",
            "La personne qui organise la soirée sert un verre à tout le monde ou prend 2 gorgées",
            "Désignez ensemble la personne qui a le plus de chance de pécho ce soir",
            "Ceux qui regardent ou ont fini Stranger Things prennent 2 gorgées",
            "Le premier joueur qui propose un massage à un autre joueur peut distribuer 5 gorgées",
            "À tour de rôle, citez un film d'horreur. La personne qui ne trouve pas prend 3 gorgées.",
            "À tour de rôle, citez un super-héros. La personne qui répète ou ne trouve pas prend 3 gorgées.",
            "À tour de rôle, citez un Pokemon. La personne qui répète ou ne trouve pas prend 3 gorgées.",
            "À tour de rôle, citez une marque d'alcool. La personne qui répète ou ne trouve pas prend 3 gorgées.",
            "À tour de rôle, citez une capitale. La personne qui répète ou ne trouve pas prend 3 gorgées." ,
            "Tout le monde prend 4 gorgées en remerciant le jeu",
            "Ceux qui ont de la drogue sur eux prennent 3 gorgées",
            "Si tu as pris de la drogue aujourd'hui tu peux prendre 4 gorgées",


        ],
        "gage":[
            "Tu es maintenant la grosse merde du groupe. Quand les autres joueurs te parlent ils doivent t'insulter",
            "Tu dois finir toutes tes phrases par 'comme ma bite', tu bois à chaque oubli",
            "Tu dois maintenant parler en chantant",
            "Tu as le choix entre prendre un cul sec ou enlever 1 vêtement",
            "Tu dois passer le reste de la partie sur les genoux d'une personne de ton choix",
            "Tu es maintenant le roi du pouce !!",
            "Tu dois te lier de couple avec le joueur de ton choix : quand un membre du couple boit, l'autre boit aussi",
            "À partir de maintenant, quand tu poses une question à quelqu'un, il doit te répondre 'Ta gueule', sinon il boit 2 gorgées",
            "Tu as maintenant obligation de faire un tour sur toi-même à chaque fois que quelqu'un te le demande",
            "EH nique ta mère et prends toi 10 gorgées",
            "À chaque fois que tu taperas dans tes mains, la dernière personne à t'imiter prend 3 gorgées",
            "À chaque fois que quelqu'un boit tu dois dire 'CHEH', sinon tu prends 2 gorgées",
            "J'ai pas d'idée de question donc bah allez hop tout le monde prend 4 gorgées",
            "À chaque fois que tu consulteras ton téléphone on pourra te demander de boire 3 gorgées",
            "Casse toi de la soirée et rentre chez toi ou prends 15 gorgées",
            "Tu as l'opportunité de distribuer 20 gorgées parmi tous les jours",
            "Les autres joueurs choisissent un mot que tu n'as plus le droit de dire sous peine de prendre 4 gorgées",
            "Donne au moins 1 euro à un des joueurs ou prend 8 gorgées",
            "Tu es le roi du regard, si quelqu'un te regarde dans les yeux il prend 3 gorgées",
            "Eh nique ta mère et prends 6 gorgées dans ta gueule"
        ],
        "duel":[
            joueur1+", "+joueur2+" et "+joueur3+" prennent 2 gorgées",
            joueur1+", à toi de juger, entre "+joueur2+" et "+joueur3+" qui sent le plus bon ? Il prendra 4 gorgées",
            joueur1+", à toi de juger, entre "+joueur2+" et "+joueur3+" qui est le plus gros canard en amour ? Il prendra 4 gorgées",
            joueur1+", à toi de juger, entre "+joueur2+" et "+joueur3+" qui pisse encore au lit ? Il prendra 3 gorgées",
            joueur1+", à toi de juger, entre "+joueur2+" et "+joueur3+" qui pense encore à son ex ? Il prendra 4 gorgées",
            joueur1+", à toi de juger, entre "+joueur2+" et "+joueur3+" qui pourrait être infidèle ? Il prendra 5 gorgées",
            joueur1+", à toi de juger, entre "+joueur2+" et "+joueur3+" qui dort encore avec un doudou ? Il prendra 4 gorgées",
            joueur1+" avec qui ferais-tu une coloc entre "+joueur2+" et "+joueur3+"? Cette personne prend 3 gorgées",
            joueur1+" tu peux donner 4 gorgées à qui tu veux entre "+joueur2+" et "+joueur3,
            joueur1+" fais un bisou à l'un et mets une claque à l'autre entre "+joueur2+" et "+joueur3,
            joueur1+" fais un shi fu mi avec "+joueur2+", le perdant prend 4 gorgées",
            joueur1+" prends "+joueur2+" et "+joueur3+" en photo prends 3 gorgées",
            joueur1+", "+joueur2+" et "+joueur3+" prennent 5 gorgées",
            joueur1+" et "+joueur2+" vous prenez 5 gorgées",
            joueur1+" et "+joueur2+" vous distribuez 10 gorgées aux autres joueurs",
            joueur1+" et "+joueur2+" faites un chou-fleur, le perdant boit 4 gorgées",
            joueur1+", "+joueur2+" et "+joueur3+" discutez entre vous pour choisir qui boira 5 gorgées",
            joueur1+", "+joueur2+" et "+joueur3+" prennent 3 gorgées",
            joueur1+" prend 2 gorgées, "+joueur2+" prend 4 et "+joueur3+" prend 6 gorgées",
        ],
        "question":[
            "Imite quelqu'un ici, la première personne à deviner distribue "+variable1+" gorgées",
            "Sers un verre à la personne qui a le verre le moins rempli",
            "Fais un bisou au joueur de ton choix à l'endroit où il veut, ou bois "+variable1+" gorgées",
            "Cite 5 états américains, si tu échoues tu bois "+variable1+" gorgées",
            "Cite une qualité et un défaut pour chaque joueur",
            "Fais l'éloge d'un des joueurs et bois "+variable1+" gorgées",
            "Raconte une anecdote, les autres doivent deviner si c'est vrai ou faux. 2 gorgées pour les perdants",
            "Mets de l'eau dans ta bouche et chante une chanson, la première personne à trouver le titre distribue 3 gorgées",
            "Envoie un message à ton crush ou prends "+variable1+" gorgées. Si tu en as pas, envoie à ton ex",
            "Raconte ton meilleur souvenir avec quelqu'un ici",
            "Raconte une blague. Si personne rigole tu prends "+variable1+" gorgées",
            "Qui a écrit Les misérables ? "+variable1+" gorgées si tu te trompes",
            "Quel est ton artiste favori ? Ceux qui n'aiment pas prennent 2 gorgées",
            "Fais un mime, la personne qui devine distribue 3 gorgées",
            "Quel est ton record de pompes ? Si ça dépasse 50 t'es chaud tu peux distribuer "+variable1+" gorgées",
            "Où es tu allé pour tes vacances les plus récentes ? Ceux qui y sont déjà allé prennent 2 gorgées",
            "Si tu sais jouer un instrument de musique distribue "+variable1+" gorgées",
            "Pose une question sur toi, la première personne à donner la bonne réponse distribue 2 gorgées",
            "Propose un thème, à tour de rôle citez quelque chose de ce thème. La personne qui répète ou ne trouve pas prend 3 gorgées. (Exemples : séries, rappeurs, villes...)",
            "Donne nous tes 3 artistes préférés, les autres joueurs votent pour décider si c'est bien ou si c'est catastrophique. S'ils n'aiment pas tu prends "+variable1+" gorgées",
            "Appelle quelqu'un au hasard dans ton répértoire ou prends "+variable1+" gorgées",
            "Jusqu'à la fin de la manche tu devras terminer toutes tes phrases par \"N'est-il pas\". Un oubli = une gorgée",
            "Ferme les yeux jusqu'à la fin de la manche ou prends "+variable1+" gorgées",
            "Donne une qualité pour chaque joueur",
            "Qui s'habille le mieux ici ? Cette personne distribuera 3 gorgées",
            "Donne une gorgée à tous les joueurs qui sont plus grands que toi",
            "Dis nous ce que tu penses de la personne à ta droite ou prends "+variable1+" gorgées",
            "Qu'est ce que les autres joueurs ne savent pas sur toi ? "+variable1+" gorgées si tu ne réponds pas",
            "Si tu écoutes OTXO et/ou UNF, tu peux distribuer "+variable1+" gorgées",
            "Si tu pouvais ressusciter un artiste décédé qui serait-ce ? Ceux qui pensent pareil distribuent 1 gorgée.",
            "Fais une galipette ou prends "+variable1+" gorgées",
            "As-tu déjà passé 3 jours sans te laver ? Si oui prends "+variable1+" gorgées gros puant va",
            "Quel est l'artiste que tu aimes le moins ? Ceux qui écoutent souvent prennent 1 gorgée",
            "Distribue 1 gorgée pour chaque partenaire sexuel que tu as eu depuis 1 an",
            "Plutôt prendre un repas avec ton ex ou avec Eric Zemmour ?",
            "Raconte ton dernier rapport sexuel ou prends "+variable1+" gorgées",
            //"CHANCE : Tu peux te retirer 2 gorgées",
            //"CHANCE : Tu peux échanger ton score avec le joueur de ton choix",
            //"CHANCE : Tu es un sacré veinard qui peut remettre son compteur de gorgées à 0 !",
            //"MALCHANCE : Double ton nombre de gorgées",
            "MALCHANCE : Prends "+variable1+" gorgées",
            "MALCHANCE : Tu as vraiment pas de chance, tu prends "+variable1*2+" gorgées",
            "Qui es la personne la plus musclée selon toi ? The Rock prendra 3 gorgées",
            "En quelle année le mur de Berlin a-t-il été détruit ? "+variable1+" gorgées si tu te trompes",
            "Quelle est ta position sexuelle préférée ? Si tu la mimes avec le joueur de ton choix tu peux distribuer "+variable1+" gorgées",
            "Quelle est ta catégorie porno préférée ? "+variable1+" gorgées si tu ne réponds pas",
            "Distribue 1 gorgée à tous les joueurs chez qui tu as déjà dormi",
            "Si tu peux citer 4 beatmakers français distribue "+variable1+" gorgées, sinon prends les",
            "Quel joueur est le mieux foutu ici ? Il prendra "+variable1+" gorgées, mais tu les prends si tu ne réponds pas",
            "Qui est la personne la plus intelligente ici ? Cette personne pourra distribuer 2 gorgées à 2 joueurs de son choix",
            "As-tu déjà utilisé un sextoy ? Prends "+variable1+" gorgées si c'est le cas",
            "Prends une gorgée pour chaque drogue illégale que tu as testée",
            "Tu peux distribuer autant de gorgées que tu prendras de gorgées (max:5)",
            "Si tu arrives à citer 5 positions du kamasutra tu peux distribuer 3 gorgées",
            "Fais un pierre-feuille-ciseau avec ton voisin de droite, le perdant prend "+variable1+" gorgées",
            "Distribue 1 gorgée pour chaque objet rouge que tu peux toucher dans la pièce (max:4)",
            "Essaie de deviner l'artiste musical préféré d'un de tes voisins pour distribuer "+variable1+" gorgées",
            "Je n'ai jamais : dis nous quelque chose que tu n'as jamais fait, ceux qui l'ont déjà fait prennent 2 gorgées",
            "Imite une prostituée qui essaierait d'attirer des clients ou prends "+variable1+" gorgées. Si un joueur accepte tes services distribue "+variable1+" gorgées",
            "Avec qui ici ne ferais-tu pas une coloc ? "+variable1+" gorgées si tu ne réponds pas",
            "Si tu as déjà embrassé un joueur dans la pièce prends "+variable1+" gorgées, tu peux révéler qui c'est pour en distribuer "+variable1*2+".",
            "Laisse le joueur de ton choix remplir ton verre avec ce qu'il souhaite",
            "Si tu arrives à lacher un rôt dans les 10 secondes tu peux distribuer "+variable1+" gorgées",
            "Les autres joueurs doivent te faire rire, si pendant 1 minute tu arrives à ne pas rigoler tu distribues "+variable1+" gorgées, sinon tu les bois",
            "Tu as 10 secondes pour toucher quelque chose de violet sinon tu prends "+variable1+" gorgées",
            "Qui est la personne que tu préfères ici ? Dis pourquoi et donne lui "+variable1+" gorgées",
            "Tu bois "+variable1+" gorgées et tu niques ta mère"
        ],
        "facile":[
            "Fais un bisou sur la joue de ton voisin de droite",
            "À quel âge as-tu eu ton premier rapport sexuel ?",
            "Qui était ton premier bisou",
            "Ferme les yeux pendant 1 minute",
            "Fais 5 pompes",
            "Chante une musique que les autres devront reconnaître",
            "Avec qui ici ne pourrais-tu pas finir ta vie ?",
            "Qui ici est le mieux habillé ?",
            "Raconte nous une blague",
            "Avec qui partirais-tu en vacances ici ?",
            "Dis nous ce que tu penses de ton voisin de gauche",
            "Fais l'éloge de tes 2 voisins"
        ],
        "moyen":[
            "Embrasse le cou de ton voisin de gauche",
            "Sens l'aisselle de la personne de ton choix",
            "Raconte nous ton dernier rappport sexuel",
            "Laisse le joueur de ton choix te mettre une petite claque",
            "Mets toi pieds nus",
            "Mets toi sur les genoux de la personne de ton choix pendant 2 minutes",
            "Combien as-tu eu de partenaires sexuels ?",
            "Quelle est la personne la plus attirante ici ?",
            "Tourne 10 fois sur toi-même et marche droit",
            "Imite un joueur présent en le caricaturant",
            "Échange de haut avec le joueur de ton choix",
            "Qui ici est le plus sexy ?",
            "Pendant la prochaine partie finis toutes tes phrases par : je suce",
            "Essaie de convaincre le joueur de ta droite d'épouser le joueur de ta gauche"
        ],
        "difficile":[
            "Danse sans musique pendant 30 secondes",
            "Crie par la fenêtre",
            "Fais 20 pompes (sur les genoux si tu galères)",
            "Appelle quelqu'un de ton répertoire au hasard",
            "Enlève deux vêtements",
            "Bois un shot de grenadine",
            "Fais 30 squats",
            "Danse un slow avec la personne à ta droite",
            "Va au coin pendant la prochaine partie",
            "Dis nous avec qui ici tu pourrais sortir",
            "Raconte une anecdote gênante sur toi",
            "Raconte quelque chose que personne ici ne sait",
            "Ne fume pas jusqu'à la fin de la partie",
            "Envoie un message à ton crush",
            "Poste sur les réseaux une blague nulle que les joueurs choisissent",
            "Envoie à tes parents le mot : caca",
            "Quelle est la personne la moins attirante ici ?",
            "Pendant la prochaine partie parle en chuchotant",
            "Donne un défaut et une qualité pour chaque joueur",
            "Lèche le front du joueur à ta gauche",
            "Lèche l'oreille du joueur à ta droite"
            
        ]
    }
}

defineQuestions()

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
// let minusBtnList = []

buttonAddPlayer.style.height=buttonAddPlayer.offsetWidth+"px"


buttonAddPlayer.addEventListener(
    'click',
    ()=>{
        if(inputAddPlayer.value==''){
            inputAddPlayer.classList.add('noNameInput')
        }
        else{
            let joueur1 = new Joueur
            inputAddPlayer.value=""
            emptyBeer()
            listeJoueur.push(joueur1)
            inputAddPlayer.classList.remove('noNameInput')
            createListJoueur(listeJoueur)
            // const minusBtnList = document.querySelectorAll(".btnMinus")
            // const moreBtnList = document.querySelectorAll(".btnMore")
            // const editPlayer = document.querySelectorAll(".nameContainer img")
            // const editPlayerOldName = document.querySelectorAll(".subTitlePlayer")
            // const editPlayerOldLevel = document.querySelectorAll(".setLevelContainer img")

            // for(let i=0; i<editPlayer.length; i++){
            //     editPlayer[i].addEventListener(
            //         'click',
            //         ()=>{  
            //             const editPlayerContainer = document.querySelector(".editPlayerContainer").style.display="flex"
            //             const editPlayerName = document.querySelector('.editPlayerInner input').setAttribute("placeholder", listeJoueur[i].nom)
            //             const editPlayerLevel = document.querySelector('.editPlayerLevel img').src="images/level"+listeJoueur[i].niveau+".png"

            //             const decreasePlayerLevel = document.querySelector('#decreasePlayerLevel').addEventListener(
            //                 'click',
            //                 ()=>{
            //                     if(listeJoueur[i].niveau>0){
            //                         listeJoueur[i].niveau--
            //                         const editPlayerLevel = document.querySelector('.editPlayerLevel img').src="images/level"+listeJoueur[i].niveau+".png"
            //                     }
            //                 }
            //             )

            //             const increasePlayerLevel = document.querySelector('#increasePlayerLevel').addEventListener(
            //                 'click',
            //                 ()=>{
            //                     if(listeJoueur[i].niveau<3){
            //                         listeJoueur[i].niveau++
            //                         const editPlayerLevel = document.querySelector('.editPlayerLevel img').src="images/level"+listeJoueur[i].niveau+".png"
            //                     }
            //                 }
            //             )

            //             const editPlayerValidation = document.querySelector('.editPlayerValidation').addEventListener(
            //                 'click',
            //                 ()=>{
            //                     const editPlayerContainer = document.querySelector(".editPlayerContainer").style.display="none"
            //                     const editPlayerNameChange = document.querySelector(".editPlayerInner input").value
            //                     if(editPlayerNameChange!=""){
            //                         editPlayerOldName[i].innerText= editPlayerNameChange
            //                         listeJoueur[i].nom = editPlayerNameChange
            //                     }  
            //                     editPlayerOldLevel[i].src="images/level"+listeJoueur[i].niveau+".png"
            //                 }
            //             )
            //         }
            //     )
            // }  
            

             
       }      
    }
)


class Joueur {
    constructor(nom, niveau, points) {
        this.nom = inputAddPlayer.value
        this.niveau = numberBeer
        this.points = 0
    }
}

function createListJoueur(liste){
    document.querySelectorAll('.rowPlayerList').forEach((el)=>{el.remove()})
    liste.forEach((joueur, i)=>{
        let newDiv = document.createElement("div")
        newDiv.classList.add('rowPlayerList')

        let newSettingsDiv = document.createElement("div")
        newSettingsDiv.classList.add('setLevelContainer')

        let newPlayer = document.createElement("h2")
        newPlayer.classList.add('subTitlePlayer')
        newPlayer.innerText = joueur.nom

        let newLevel = document.createElement("img")
        newLevel.src = "images/level" + joueur.niveau + ".png"

        newDiv.appendChild(newPlayer)
        newDiv.appendChild(newSettingsDiv)
        
        const removePlayerIcone = document.createElement('img')
        removePlayerIcone.setAttribute('src', 'images/close.png')
        removePlayerIcone.classList.add('closeHowToPlay')
        removePlayerIcone.addEventListener('click',()=>{
            listeJoueur.splice(i, 1)
            createListJoueur(listeJoueur)
        })

        newDiv.appendChild(removePlayerIcone)

        newSettingsDiv.appendChild(newLevel)
        

        containerlistPlayer.appendChild(newDiv)
        sessionStorage.setItem('listeJoueur', JSON.stringify(listeJoueur))
    })
}


if(sessionStorage.getItem('listeJoueur')){
    listeJoueur=JSON.parse(sessionStorage.getItem('listeJoueur'))
    createListJoueur(listeJoueur)
}

const compteurs = Array(listeJoueur.length).fill(0);

function designerJoueur() {
    // Vérifier si tous les joueurs ont été sélectionnés au moins une fois
    if (compteurs.every(count => count > 0)) {
      // Réinitialiser les compteurs si tous les joueurs ont été sélectionnés
      compteurs.fill(0);
    }
    // Sélectionner un joueur au hasard
    let joueurIndex;
    do {
      joueurIndex = Math.floor(Math.random() * listeJoueur.length);
    } while (compteurs[joueurIndex] >= 2);
  
    // Incrémenter le compteur du joueur sélectionné
    compteurs[joueurIndex]++;
  
    // Retourner le joueur sélectionné
    return listeJoueur[joueurIndex]
}
  

// Changer de page

const pagePlayerSelect = document.querySelector('.pagePlayerSelect')
const buttonValidationPlayer = document.querySelector('.buttonValidationPlayer')
const pageGame = document.querySelector('.pageGame')
const listeScoreGame = document.querySelector('.listeScoreGame')
const scoreJoueurs = document.querySelector('.scoreJoueurs')
const containerChangeScore = document.querySelector('.containerChangeScore')
const settingsContainer = document.querySelector('.settingsContainer')


buttonValidationPlayer.addEventListener(
    'click',
    ()=>{
        if(listeJoueur.length>2){
            pagePlayerSelect.style.display="none"
            pageGame.style.display="flex"
            pageGame.style.opacity="1"
            displayJoueur()
            selectQuestion()
            changeScore()
            moveListPlayer()
        }
        else{
            inputAddPlayer.classList.add('noNameInput')
        }
    }
)

function moveListPlayer(){
    settingsContainer.appendChild(document.querySelector('.containerlistPlayer'))
    const setLevelContainer = document.querySelector('.setLevelContainer').classList.add('rowSettings')
}

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

function selectionnerDeuxJoueurs(){
    // Copier la liste pour ne pas la modifier directement
    const joueursRestants = [...listeJoueur];

    // Sélectionner le premier joueur au hasard
    const joueur1Index = Math.floor(Math.random() * joueursRestants.length);
    joueur1 = joueursRestants[joueur1Index].nom;
    // Retirer le premier joueur de la liste des joueurs restants
    joueursRestants.splice(joueur1Index, 1);

    // Sélectionner le deuxième joueur au hasard parmi les joueurs restants
    const joueur2Index = Math.floor(Math.random() * joueursRestants.length);
    joueur2 = joueursRestants[joueur2Index].nom;
    // Retirer le deuxième joueur de la liste des joueurs restants
    joueursRestants.splice(joueur2Index, 1);

    // Sélectionner le troisième joueur au hasard parmi les joueurs restants
    const joueur3Index = Math.floor(Math.random() * joueursRestants.length);
    joueur3 = joueursRestants[joueur3Index].nom;
    // Retourner les trois joueurs sélectionnés
}

// Séléction d'une question au hasard

const question = document.querySelector('.question')
const playerNameTitle = document.querySelector('#playerNameTitle')
const levelIngame = document.querySelector('.levelIngame')
const beerInGame = levelIngame.querySelectorAll('.beerImg')

const body = document.querySelector('body')

let questionTab = []

function selectQuestion(){
    let randNb= Math.floor(Math.random() * 26)
    let actualQuestion
    if(randNb<10){
        body.style.background="linear-gradient(#FF986B, #F94A4A)"
        buttonSeeResult.style.border="10px solid #FF986B"
        playerNameTitle.innerText="Jeu"
        do{
            actualQuestion = data["jeu"][Math.floor(Math.random() * (data["jeu"].length - 0))]
        }
        while(questionTab.includes(actualQuestion))
        question.innerText = actualQuestion
        questionTab.push(actualQuestion)
        question.classList.remove('questionAnimation')
        question.classList.add('questionAnimation')
        levelIngame.style.opacity="0"
    }
    else if(randNb>10 && randNb<20){
        levelIngame.style.opacity="1"
        body.style.background="linear-gradient(#4bf8c6, #2a8c76)"
        buttonSeeResult.style.border="10px solid #4bf8c6"
        beerInGame.forEach((el)=>{el.style.display="none"})
        //const randomPlayer = Math.floor(Math.random() * listeJoueur.length)
        let actualPlayer = designerJoueur()
        playerNameTitle.innerText=actualPlayer.nom
        const randMath = Math.random() * 4 + 1;
        variable1 = Math.floor(randMath*actualPlayer.niveau)
        for(let i=0; i<actualPlayer.niveau; i++){
            beerInGame[i].style.display="block"
        }
        defineQuestions()
        
        do{
            actualQuestion = data["question"][Math.floor(Math.random() * (data["question"].length - 0))]
        }
        while(questionTab.includes(actualQuestion))
        question.innerText = actualQuestion
        questionTab.push(actualQuestion)
        question.classList.remove('questionAnimation')
        question.classList.add('questionAnimation')
    }
    else if(randNb>20 && randNb<22){
        body.style.background="linear-gradient(rgb(225 127 243), rgb(112 69 104))"
        buttonSeeResult.style.border="10px solid rgb(225 127 243)"
        //const randomPlayer = Math.floor(Math.random() * listeJoueur.length)
        let actualPlayer = designerJoueur()
        playerNameTitle.innerText=actualPlayer.nom
        for(let i=0; i<actualPlayer.niveau; i++){
            beerInGame[i].style.display="block"
        }
        defineQuestions()
        levelIngame.style.opacity="1"
        do{
            actualQuestion = data["gage"][Math.floor(Math.random() * (data["gage"].length - 0))]
        }
        while(questionTab.includes(actualQuestion))
        question.innerText = actualQuestion
        questionTab.push(actualQuestion)
        question.classList.remove('questionAnimation')
        question.classList.add('questionAnimation')
    }
    else if(randNb>21){
        body.style.background="linear-gradient(rgb(235 211 80), rgb(125 150 8))"
        buttonSeeResult.style.border="10px solid rgb(235 211 80)"
        playerNameTitle.innerText="Duel"
        selectionnerDeuxJoueurs()
        defineQuestions()
        levelIngame.style.opacity="0"
        actualQuestion = data["duel"][Math.floor(Math.random() * (data["duel"].length - 0))]
        question.innerText = actualQuestion
        questionTab.push(actualQuestion)
    }
    
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
        //pageGame.style.display="none"
        //pageResults.style.display="flex"
        //pageResults.style.opacity="1"
        selectQuestion()
    }
)


// Retour au jeu et Changement des scores

// const buttonNextQuestion = document.querySelector('.buttonNextQuestion')
// let tenpenalties = false

// buttonNextQuestion.addEventListener(
//     'click',
//     ()=>{
//         const selectValue = document.querySelectorAll('.selectValue')

//         for(let i=0;i<listeJoueur.length; i++){
//             listeJoueur[i].points=selectValue[i].value
//             if(listeJoueur[i].points==10){
//                 tenpenalties=true
//             }
//         }
//         if(tenpenalties==true){
//             setChallenge()
//             tenpenalties=false
//         }
//         else if(tenpenalties==false){
//             pageResults.style.display="none"
//             pageGame.style.display="flex"
//             updateScore()
//             selectQuestion()
//         }


//     }
// )

// function updateScore(){
//     const scoreJoueursList = document.querySelectorAll('.scoreJoueurs')
//     for(let i=0; i<scoreJoueursList.length; i++){
//         scoreJoueursList[i].innerText= listeJoueur[i].nom + " : " + listeJoueur[i].points +" points"
//     }
// }

// function setChallenge(){
//     const pageChallenge = document.querySelector('.pageChallenge')
//     pageResults.style.display="none"
//     pageChallenge.style.display="flex"   
// }

// CHANGER DE PERSONNE POUR LES CHALLENGES

// const buttonNextPerson = document.querySelector('.buttonNextPerson')
// let aquicestletour = 0

// buttonNextPerson.addEventListener(
//     'click',
//     ()=>{
//         if(aquicestletour==listeJoueur.length){
//            aquicestletour=0
//            nameJoueurChallenge.innerText="Alerte"
//            const selectValue = document.querySelectorAll('.selectValue')
//            for(let i=0; i<listeJoueur.length; i++){
//                 listeJoueur[i].points=0
//                 selectValue[i].value=0
//            }
//            updateScore()
//            const pageChallenge = document.querySelector('.pageChallenge').style.display="none"
//            pageGame.style.display="flex"
//            const imgBiere = document.querySelector('.firstChallenge img').src="images/beer.png"
//            const firstChallenge = document.querySelector('.firstChallenge h3').innerText="Gage boisson"
//            const secondChallenge = document.querySelector('.secondChallenge h3').innerText="Gage action"
//         }
//         else{
//             const nameJoueurChallenge = document.querySelector("#nameJoueurChallenge")
//             nameJoueurChallenge.innerText=listeJoueur[aquicestletour].nom+" - "+listeJoueur[aquicestletour].points+" pts"

//             let coeff = 1
//             if(listeJoueur[aquicestletour].niveau==1){
//                 coeff=0.5
//             }
//             else if(listeJoueur[aquicestletour].niveau==3){
//                 coeff=1.5
//             }

//             // Si le jour est level 0, remplacer beer par action et mettre 2 actions du niveau de gorgées
//             if(listeJoueur[aquicestletour].niveau==0){
//                 const imgBiere = document.querySelector('.firstChallenge img').src="images/challenge.png"
//                 const firstChallenge = document.querySelector('.firstChallenge h3')
//                 const secondChallenge = document.querySelector('.secondChallenge h3')
//                 if(listeJoueur[aquicestletour].points<4){
//                     firstChallenge.innerText=data["facile"][Math.floor(Math.random() * (data["facile"].length - 0))]
//                     secondChallenge.innerText=data["facile"][Math.floor(Math.random() * (data["facile"].length - 0))]
//                 }
//                 else if(listeJoueur[aquicestletour].points<8){
//                     firstChallenge.innerText=data["moyen"][Math.floor(Math.random() * (data["moyen"].length - 0))]
//                     secondChallenge.innerText=data["moyen"][Math.floor(Math.random() * (data["moyen"].length - 0))]
//                 }
//                 else if(listeJoueur[aquicestletour].points>7){
//                     firstChallenge.innerText=data["difficile"][Math.floor(Math.random() * (data["difficile"].length - 0))]
//                     secondChallenge.innerText=data["difficile"][Math.floor(Math.random() * (data["difficile"].length - 0))]
//                 }
//             }
//             else{
//                 const firstChallenge = document.querySelector('.firstChallenge h3')
//                 const secondChallenge = document.querySelector('.secondChallenge h3') 
//                 if(listeJoueur[aquicestletour].points==0){
//                     firstChallenge.innerText="Distribue "+(Math.floor(Math.random(3))+1)+" gorgées"
//                 }
//                 else{
//                     firstChallenge.innerText="Bois "+ Math.floor((listeJoueur[aquicestletour].points)*coeff) +" gorgées"
//                 }
                
//                 if(listeJoueur[aquicestletour].points<4){
//                     secondChallenge.innerText=data["facile"][Math.floor(Math.random() * (data["facile"].length - 0))]
//                 }
//                 else if(listeJoueur[aquicestletour].points<8){
//                     secondChallenge.innerText=data["moyen"][Math.floor(Math.random() * (data["moyen"].length - 0))]
//                 }
//                 else if(listeJoueur[aquicestletour].points>7){
//                     secondChallenge.innerText=data["difficile"][Math.floor(Math.random() * (data["difficile"].length - 0))]
//                 }
//             }



//             aquicestletour++
//         }

//     }
// )

// SETTINGS

// const settingsBtn = document.querySelector('#settings')

// settingsBtn.addEventListener(
//     'click',
//     ()=>{
//         settingsContainer.style.display="block"

//         const closeBtn = document.querySelector('#close').addEventListener(
//             'click',
//             ()=>{
//                 settingsContainer.style.display="none"
//             }
//         )
//     }
// )

// HOW TO PLAY

// const btnOpen = document.querySelector('.btnOpen')
// const closeHowToPlay = document.querySelector('.closeHowToPlay')
// const howToPlayContainer = document.querySelector('.howToPlayContainer')


// btnOpen.addEventListener(
//     'click',
//     ()=>{
//         howToPlayContainer.style.display="flex"
//         closeHowToPlay.addEventListener(
//             'click',
//             ()=>{
//                 howToPlayContainer.style.display="none"
//             }
//         )
//     }
// )

// const howToNiveaux = document.querySelector('.howToNiveaux')
// const howToPartie = document.querySelector('.howToPartie')
// const howToGage = document.querySelector('.howToGage')

// const sectionNiveaux = document.querySelector('#sectionNiveaux')
// const sectionPartie = document.querySelector('#sectionPartie')
// const sectionGage = document.querySelector('#sectionGage')

// sectionNiveaux.addEventListener(
//     'click',
//     ()=>{
//         howToPartie.style.display="none"
//         howToGage.style.display="none"
//         howToNiveaux.style.display="flex"
//     }
// )

// sectionPartie.addEventListener(
//     'click',
//     ()=>{
//         howToPartie.style.display="flex"
//         howToNiveaux.style.display="none"
//         howToGage.style.display="none"
//     }
// )

// sectionGage.addEventListener(
//     'click',
//     ()=>{
//         howToPartie.style.display="none"
//         howToNiveaux.style.display="none"
//         howToGage.style.display="flex"
//     }
// )




// let listeQuestion = []
// let questionAlready = true

// function selectQuestion(){
//     let randNb= Math.floor(Math.random() * 2)
//     if(randNb==0){
//         playerNameTitle.innerText="Jeu"
//         if(questionAlready==true && listeQuestion.length>0){
//             questionAsked = data["jeu"][Math.floor(Math.random() * (data["jeu"].length - 0))]
//             for(let i=0; i<listeQuestion.length; i++){
//                if(listeQuestion[i]!=questionAsked){
//                    questionAlready=false
//                    console.log(questionAlready)
//                } 
//             }
//         }
//         else if(listeQuestion.length==0){
//             questionAsked = data["jeu"][Math.floor(Math.random() * (data["jeu"].length - 0))]
//         }
//         question.innerText = questionAsked
//         question.classList.remove('questionAnimation')
//         question.classList.add('questionAnimation')
//         listeQuestion.push(question.textContent)
//         questionAlready=true
//     }
//     else if(randNb==1){
//         if(questionAlready==true && listeQuestion.length>0){
//             questionAsked = data["question"][Math.floor(Math.random() * (data["question"].length - 0))]
//             for(let i=0; i<listeQuestion.length; i++){
//                if(listeQuestion[i]!=questionAsked){
//                    questionAlready=false
//                    console.log(questionAlready)
//                } 
//             }
//         }
//         else if(listeQuestion.length==0){
//             questionAsked = data["question"][Math.floor(Math.random() * (data["question"].length - 0))]
//         }
//         playerNameTitle.innerText=listeJoueur[Math.floor(Math.random() * listeJoueur.length)].nom
//         questionAsked.innerText = data["question"][Math.floor(Math.random() * (data["question"].length - 0))]
//         question.classList.remove('questionAnimation')
//         question.classList.add('questionAnimation')
//         listeQuestion.push(question.textContent)
//         questionAlready=true
//     }
    
// }