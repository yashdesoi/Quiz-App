const form = document.querySelector('form');
const correctAnswers = ['C','D','D','A','B','B','A'];
const scoreBoard = document.querySelector('.score-board');
const buttonContainer = document.querySelector('.button-container');
let userAnswers;

form.addEventListener('submit', event => {
    event.preventDefault();

    document.querySelectorAll('main > form > ol > li > label').forEach(element => {
        element.style.color = 'azure';
    });


    let score = 0;

    userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 100/7;
        }
    });

    score = Math.round(score);

    // This querySelector will only look of HTMLElement inside the scope of scoreBoard HTMLElement.
    let result = scoreBoard.querySelector('span')
    
    // window object with one of its method scrollTo()
    // window.scrollTo(0,0);
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });

    scoreBoard.style.display = 'block';

    let i = 0;

    // window object with one of its method setInterval()
    const timer = window.setInterval(() => {
        if (i > 42) {
            result.style.color = 'limegreen';
        } else {
            result.style.color = 'rgb(252, 83, 64)';
        }

        result.textContent = `${i}%`;

        if (i === score) {
            if (score < 100) {
                buttonContainer.style.display = 'block';
            }
            window.clearInterval(timer);
        } else {
            i += 1;
        }

    }, 15);
});

buttonContainer.querySelector('button').addEventListener('click', event => {
    event.stopPropagation();

    for (let i = 0; i < correctAnswers.length; i++) {
        form[`q${i+1}`].forEach(element => {
            if (element.defaultValue === correctAnswers[i]) {
                element.parentElement.style.color = 'lime';
            } else if (element.defaultValue === userAnswers[i]) {
                element.parentElement.style.color = 'red';
            }
        });
    }
});

