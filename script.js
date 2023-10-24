    ///////////////////////////////
    // Déclaration des variables //
    ///////////////////////////////

    const canvas = document.getElementById('roulette');
    const flecheButton = document.getElementById('fleche');

    const closeButton = document.querySelector('.closeButton')
    const questionContainer = document.querySelector('.questionContainer')
    const questionTitle = document.querySelector('.questionTitle')
    const description = document.querySelector('.description')
    const question = document.querySelector('.question')

    let n = 5;
    let a = 0;
    let x = 1;
    let tab = [];
    const color = ["#331fc8", "#cb4945", "#3bae4e", "#c8c842","#c561b9"]

    // Animation de la rotation
    function animRotation(element, angle, duree, complet) {
        let startTime;
        const startAngle = 0;
        const duration = duree;

        function step(timestamp) {
            if (!startTime) {
                startTime = timestamp;
            }

            const progress = (timestamp - startTime) / duration;
            if (progress < 1) {
                const currentAngle = startAngle + angle * progress +100;
                element.style.transform = `rotate(${currentAngle}deg)`;
                requestAnimationFrame(step);
            } else {
                element.style.transform = `rotate(${startAngle + angle+100}deg)`;
                if (complet) complet();
                setTimeout(() => {
                    questionContainer.style.top="0"  
                }, 1000);
                
            }
        }

        requestAnimationFrame(step);
    }

    // Fonction qui donne un nombre au hasard entre 1 et n
    function alea(n) {
        return Math.floor(Math.random() * n);
    }

    let lastNb = 0

    // Lancer la rotation
    document.querySelector('.button').addEventListener('click', function() {
        do {
            x = alea(n);
        } while (x === lastNb);
        lastNb=x
        a = (360 * x / n + 360 * (x - 1) / n) / 2;
        chooseQuestion(x)
        animRotation(flecheButton, (360*8) + a, 3000 + (a / 360 * 500));
    });

    closeButton.addEventListener(
        'click',
        ()=>{
            questionContainer.style.top="300%" 
        }
    )
    let q,t
    function chooseQuestion(nb){
        questionContainer.style.backgroundColor=color[nb]
        questionTitle.textContent=questions[nb].category
        description.textContent=questions[nb].regle
        do{
          let m = Math.floor(Math.random() * questions[nb]["questions"].length)
          q = questions[nb]["questions"][m]
        } while(tab.includes(q.question))
        if(q.chrono){
          t=q.chrono
          document.querySelector('.timerContainer').style.display="flex"
          document.querySelector('.timer').textContent="Compte à rebours : "+t+"s"
        }
        console.log(q.question)
        tab.push(q.question)
        question.textContent=q.question
    }

    document.querySelector('.startButton').addEventListener('click', function() {
      startCountdown(t); // Démarrer un compte à rebours de 30 secondes
  });

  function startCountdown(seconds) {
      let timer = seconds;

      const countdownInterval = setInterval(function() {
          console.log(timer); // Afficher le temps restant dans la console
          timer--;
          document.querySelector('.timer').textContent="Compte à rebours : "+timer+"s"

          if (timer < 0) {
              clearInterval(countdownInterval); // Arrêter le compte à rebours
              document.querySelector('.timer').textContent="Terminé !"
          }
      }, 1000); // Actualiser toutes les 1000 millisecondes (1 seconde)
  }

// QUESTIONS

let questions = [

      {
        "category": "Question",
        "regle": "Réponds à la question ou bois le nombre de gorgées",
        "questions": [
          {
            "question": "Quel est ton plus grand fantasme ? (2 gorgées)",
          },
          {
            "question": "Tu aimerais te faire dominer par ton/ta partenaire ? (3 gorgées)",
          },
          {
            "question": "Quelle est la partie du corps de ton/ta partenaire que tu as envie de toucher tout de suite ? (1 gorgée)",
          
          },
          {
            "question": "Quelle est ta position préférée ? (1 gorgée)",
          },
          {
            "question": "Combien font 248x8799 ? (4 gorgées)",
          },
          {
            "question": "Combien as tu eu de partenaires sexuels ? (4 gorgées)",
          },
          {
            "question": "Quel est l'endroit où tu rêves de faire l'amour ? (2 gorgées)",
          },
          {
            "question": "Quelle est la date de naissance de ton/ta partenaire ? (5 gorgées)",
          },
          {
            "question": "Quel est le nom de la musique qui passe ? (3 gorgées)",
          },
          {
            "question": "Quel est le pire redflag chez un/e partenaire ? (1 gorgée)",
          },
          {
            "question": "Peux tu donner le prénom de ton meilleur coup ? (3 gorgées)",
          },
          {
            "question": "Quel est le nom de la musique qui passe ? (2 gorgées)",
          }
        ]
      },
      {
        "category": "Je n'ai jamais",
        "regle": "Ceux qui n'ont jamais fait ça prennent le nombre de gorgées",
        "questions": [
          {
            "question": "Je n'ai jamais fait de plan à 3 ou + (3 gorgées)"
          },
          {
            "question": "Je n'ai jamais simulé un orgasme. (2 gorgées)"
          },
          {
            "question": "Je n'ai jamais uriné sur mon partenaire. (4 gorgées)"
          },
          {
            "question": "Je n'ai jamais trompé mon partenaire (2 gorgées)"
          },
          {
            "question": "Je n'ai jamais fait de quicky. (3 gorgées)",
          },
          {
            "question": "Je n'ai jamais fait de plan en extérieur. (3 gorgées)",
          },
          {
            "question": "Je n'ai jamais été la première fois de quelqu'un. (4 gorgées)",
          },
          {
            "question": "Je n'ai jamais fait d'anulingus. (2 gorgées)",
          },
          {
            "question": "Je n'ai jamais payé pour du sexe (3 gorgées)",
          },
          {
            "question": "Je n'ai jamais eu de rapport homosexuel. (4 gorgées)",
          },
          {
            "question": "Je n'ai mis mon doigt dans un anus. (4 gorgées)",
          }
        ]
      },
      {
        "category": "Défi",
        "regle": "Réalise le défi ou bois le nombre de gorgées indiqué si tu échoues ou refuses.",
        "questions": [
          {
            "question": "Femme : tu as 30 secondes pour donner une érection à ton partenaire. (2 gorgées)",
            "chrono": 30
          },
          {
            "question": "Ferme les yeux. Ton/ta partenaire caresse une partie de ton corps avec la partie de son corps de son choix et tu dois deviner ce que c'est. (3 gorgées)"
          },
          {
            "question": "Enlève un vêtement. (5 gorgées)"
          },
          {
            "question": "Chuchotte à l'oreille de ton/ta partenaire sensuellement ce que tu aimerais qu'il/elle fasse. Il ne doit pas le faire. (2 gorgées)"
          }
          ,
          {
            "question": "Pendant le reste de la partie, réponds aux questions par 'Oui maître/maîtresse'. (1 gorgée par oubli)"
          },
          {
            "question": "Fais une galipette. (4 gorgées)"
          },
          {
            "question": "Fais un double backflip. (4 gorgées)"
          },
          {
            "question": "Fais une danse sexy. (3 gorgées)"
          },
          {
            "question": "Ferme les yeux et laisse ton/ta partenaire te toucher. (4 gorgées)"
          },
          {
            "question": "Envoie 'jai envie de toi' à un contact choisi par ton/ta partenaire. (4 gorgées)"
          },
          {
            "question": "Essaie de faire sourire ton/ta partenaire en moins de 40 secondes. (2 gorgées)",
            "chrono": 40
          },
          {
            "question": "Assieds toi sur les genoux de ton/ta partenaire pendant 3 tours. (4 gorgées)"
          },
          {
            "question": "Le premier qui enlève un vêtement distribue 5 gorgées à l'autre."
          },
          {
            "question": "Scroll dans ta galerie au hasard et montre la photo. (4 gorgées)"
          },
          {
            "question": "Enlève un vêtement. (4 gorgées)"
          },
          {
            "question": "Pendant 2 minutes tu dois faire tout ce que ton/ta partenaire te dis de faire. (3 gorgées)",
            "chrono": 120
          },
          {
            "question": "Fixe ton/ta partenaire dans les yeux pendant 1 minute. (2 gorgées)",
            "chrono": 60
          }
        ]
      },
      {
        "category": "Gage",
        "regle": "Réalise le gage ET bois le nombre de pénalité",
        "questions": [
          {
            "question": "Enlève un vêtement. (2 gorgées)"
          },
          {
            "question": "Enlêve un vêtement de ton/ta partenaire sans utiliser tes mains. (3 gorgées)"
          },
          {
            "question": "Vous prenez tous 3 gorgées !"
          },
          {
            "question": "Pose ta main sur le sexe de ton/ta partenaire pendant 3 tours. (2 gorgées)"
          },
          {
            "question": "Lèche le cou de ton/ta partenaire sensuellement. (3 gorgées)"
          },
          {
            "question": "Caresse la cuisse de ton/ta partenaire pendant le prochain tour. (4 gorgées)"
          },
          {
            "question": "Lèche la partie de ton choix du corps de ton/ta partenaire. (2 gorgées)"
          },
          {
            "question": "Caresse la poitrine de ton/ta partenaire. (2 gorgées)"
          },
          {
            "question": "Mime une position que tu aimes faire avec ton/ta partenaire. (3 gorgées)"
          },
          {
            "question": "La personne qui a fait à manger en dernier peut distribuer 3 gorgées."
          },
          {
            "question": "Demande à ton/ta partenaire si tu peux l'embrasser. (2 gorgées)"
          },
          {
            "question": "Tu as 40 secondes pour convaincre ton/ta partenaire d'enlever un vêtement. (4 gorgées)",
            "chrono": 40
          }  
        ]
      },
      {
        "category": "Chill",
        "regle": "Moment chill, pas besoin de boire",
        "questions": [
          {
            "question": "Fais un massage à ton/ta partenaire pendant 1 minute, à l'endroit de son choix",
            "chrono": 60
          },
          {
            "question": "Pour ou contre le couple libre ?",
          },
          {
            "question": "Faites vous un câlin (c bo lamour)",
          },
          {
            "question": "Resers à boire à ton/ta partenaire",
          },
          {
            "question": "Si tu t'appelles Axel tu as le droit à un massage gratuit de 1 minute",
            "chrono": 60
          },
          {
            "question": "Quoicoubeh mdrrr",
          },
          {
            "question": "Fais un bisou à ton/ta partenaire où tu veux",
          },
          {
            "question": "Choisis le prochain son qui passe",
          },
          {
            "question": "Fais un compliment à ton/ta partenaire",
          },
          {
            "question": "Plutôt ne plus jamais faire l'amour ou ne plus jamais écouter de musique",
          },
          {
            "question": "Relance la roue",
          },
          {
            "question": "Relance la roue",
          },
          {
            "question": "Relance la roue",
          }
        ]
      }
    ]
  
  console.log(questions)