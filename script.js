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

    // Animation de la rotation
    function animRotation(element, angle, duree, easing, complet) {
        let startTime;
        const startAngle = 0;
        const duration = duree;

        function step(timestamp) {
            if (!startTime) {
                startTime = timestamp;
            }

            const progress = (timestamp - startTime) / duration;
            if (progress < 1) {
                const currentAngle = startAngle + angle * progress;
                element.style.transform = `rotate(${currentAngle}deg)`;
                requestAnimationFrame(step);
            } else {
                element.style.transform = `rotate(${startAngle + angle}deg)`;
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
        console.log(x)
        chooseQuestion(x)
        animRotation(flecheButton, (360*5) + a, 1500 + (a / 360 * 500), "ease");
    });

    closeButton.addEventListener(
        'click',
        ()=>{
            questionContainer.style.top="100%" 
        }
    )

    function chooseQuestion(nb){
        questionTitle.textContent=questions[nb].category
        description.textContent=questions[nb].regle
        let m = Math.floor(Math.random() * questions[nb]["questions"].length)
        let q = questions[nb]["questions"][m]
        console.log(q)
        question.textContent=q.question
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
            "question": "Qui a découvert la loi de la gravité ? (3 gorgées)",
          },
          {
            "question": "Quelle est la plus grande planète du système solaire ? (1 gorgée)",
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
          }
        ]
      },
      {
        "category": "Défi",
        "regle": "Réalise le défi ou bois le nombre de gorgées indiqué si tu échoues ou refuses.",
        "questions": [
          {
            "question": "Femme : tu as 30 secondes pour donner une érection à ton partenaire. (2 gorgées)"
          },
          {
            "question": "Ferme les yeux. Ton/ta partenaire caresse une partie de ton corps avec la partie de son corps de son choix et tu dois deviner ce que c'est. (3 gorgées)"
          },
          {
            "question": "Enlève un vêtement. (5 gorgées)"
          },
          {
            "question": "Chuchotte à l'oreille de ton partenaire sensuellement ce que tu aimerais qu'il/elle fasse. Il ne doit pas le faire. (2 gorgées)"
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
            "question": "Enlêve un vêtement de ton partenaire sans utiliser tes mains. (3 gorgées)"
          },
          {
            "question": "Vous prenez tous 3 gorgées !"
          }
        ]
      },
      {
        "category": "Chill",
        "regle": "Moment chill, pas besoin de boire",
        "questions": [
          {
            "question": "Fais un massage à ton/ta partenaire pendant 1 minute, à l'endroit de son choix",
          },
          {
            "question": "Pour ou contre le couple libre ?",
          },
          {
            "question": "Conjuguez le verbe 'manger' au passé composé.",
          }
        ]
      }
    ]
  
  console.log(questions)