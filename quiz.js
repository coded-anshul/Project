
const rightAnswers = document.querySelectorAll('.right');
const wrongAnswers = document.querySelectorAll('.wrong');

const result = document.querySelector('.result');
const submitBtn = document.querySelector('.submit');


let score = 0;


rightAnswers.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.style.backgroundColor = 'green';
        score++;
    });
});


wrongAnswers.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.style.backgroundColor = 'red';
    });
});

submitBtn.addEventListener('click', () => {
    result.textContent = `Your score: ${score}`;
});
