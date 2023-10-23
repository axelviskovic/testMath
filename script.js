    ///////////////////////////////
    // Déclaration des variables //
    ///////////////////////////////

    const canvas = document.getElementById('roulette');
    const flecheButton = document.getElementById('fleche');
    const resultParagraph = document.querySelector('p');

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
        x = alea(n);
        a = (360 * x / n + 360 * (x - 1) / n) / 2;
        console.log(x)
        animRotation(flecheButton, (360*5) + a, 1500 + (a / 360 * 500), "ease");
    });



// QUESTIONS

let questions = [

      {
        "category": "Question",
        "regle": "Réponds à la question ou bois le nombre de gorgées",
        "questions": [
          {
            "question": "Quelle est la formule chimique de l'eau ?",
            "points": 2
          },
          {
            "question": "Qui a découvert la loi de la gravité ?",
            "points": 3
          },
          {
            "question": "Quelle est la plus grande planète du système solaire ?",
            "points": 1
          }
        ]
      },
      {
        "category": "Je n'ai jamais",
        "regle": "Ceux qui n'ont jamais fait ça prennent le nombre de gorgées",
        "questions": [
          {
            "question": "Quel est le résultat de 5 x 7 ?",
            "points": 1
          },
          {
            "question": "Résolvez l'équation x² - 4x + 4 = 0.",
            "points": 3
          },
          {
            "question": "Quelle est la racine carrée de 16 ?",
            "points": 2
          }
        ]
      },
      {
        "category": "Défi",
        "regle": "Réalise le défi ou bois le nombre de pénalité",
        "questions": [
          {
            "question": "Femme : tu as 30 secondes pour donner une érection à ton partenaire. Si tu y arrives il prend le nombre de gorgées indiquées. Sinon tu les prends.",
            "points": 2
          },
          {
            "question": "Donnez la définition du mot 'altruisme'.",
            "points": 3
          },
          {
            "question": "Conjuguez le verbe 'manger' au passé composé.",
            "points": 1
          }
        ]
      },
      {
        "category": "Gage",
        "regle": "Réalise le gage ET bois le nombre de pénalité",
        "questions": [
          {
            "question": "Qui est l'auteur de 'Les Misérables' ?",
            "points": 2
          },
          {
            "question": "Donnez la définition du mot 'altruisme'.",
            "points": 3
          },
          {
            "question": "Conjuguez le verbe 'manger' au passé composé.",
            "points": 1
          }
        ]
      },
      {
        "category": "Chill",
        "regle": "Moment chill, pas besoin de boire",
        "questions": [
          {
            "question": "Fais un massage à ton/ta partenaire pendant 1 minute, à l'endroit de son choix",
            "points": 2
          },
          {
            "question": "Pour ou contre le couple libre ?",
            "points": 3
          },
          {
            "question": "Conjuguez le verbe 'manger' au passé composé.",
            "points": 1
          }
        ]
      }
    ]
  
  console.log(questions)