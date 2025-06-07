let score1 = 0;
let score2 = 0;
let roundCount = 0;
let totalRounds = 5;
let isGameOver = false;

const p1Button = document.querySelector('#p1button');
const p2Button = document.querySelector('#p2button');
const p1score = document.querySelector('#p1score');
const p2score = document.querySelector('#p2score');
const resetPlay = document.querySelector('#reset');
const selectPlay = document.querySelector('#select');
const p1Round = document.querySelector("#p1Roundscore");
const p2Round = document.querySelector("#p2Roundscore");
const winnerMessage = document.querySelector('#winnerMessage');
const addNumber = document.querySelector("#addNumber")
// Change number of rounds
selectPlay.addEventListener('change', function () {
    totalRounds = parseInt(this.value);
    reset();
});

// Player 1 spin
p1Button.addEventListener('click', function () {
    if (!isGameOver && p1Round.innerHTML === '') {
        p1Round.innerHTML = '🎲 Spinning...';
        p1Round.classList.add('spin');

        setTimeout(() => {
            const rand = randomNumber();
            score1 += rand;
            p1Round.innerHTML = `This round: ${rand}`;
            p1score.textContent = `Total: ${score1}`;
            p1Round.classList.remove('spin');
            checkNext();
        }, 1000);
    }
});

// Player 2 spin
p2Button.addEventListener('click', function () {
    if (!isGameOver && p2Round.innerHTML === '') {
        p2Round.innerHTML = '🎲 Spinning...';
        p2Round.classList.add('spin');

        setTimeout(() => {
            const rand = randomNumber();
            score2 += rand;
            p2Round.innerHTML = `This round: ${rand}`;
            p2score.textContent = `Total: ${score2}`;
            p2Round.classList.remove('spin');
            checkNext();
        }, 1000);
    }
});

// Check if both players have played in a round
function checkNext() {
    const p1Played = p1Round.innerHTML.startsWith('This round');
    const p2Played = p2Round.innerHTML.startsWith('This round');

    if (p1Played && p2Played) {
        roundCount++;
        if (roundCount >= totalRounds) {
            isGameOver = true;
            declareWinner();
        }

        setTimeout(() => {
            p1Round.innerHTML = '';
            p2Round.innerHTML = '';
        }, 500);
    }
}

// Declare winner
function declareWinner() {
    if (score1 > score2) {
        winnerMessage.textContent = "🎉 Player 1 Wins!";
        p1score.style.backgroundColor = 'green';
        p2score.style.backgroundColor = 'red';
    } else if (score2 > score1) {
        winnerMessage.textContent = "🎉 Player 2 Wins!";
        p2score.style.backgroundColor = 'green';
        p1score.style.backgroundColor = 'red';
    } else {
        winnerMessage.textContent = "🤝 It's a Draw!";
        p1score.style.backgroundColor = 'orange';
        p2score.style.backgroundColor = 'orange';
    }

    p1score.style.color = 'white';
    p2score.style.color = 'white';
}

// Reset everything
resetPlay.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    roundCount = 0;
    score1 = 0;
    score2 = 0;
    p1score.textContent = 'Total: 0';
    p2score.textContent = 'Total: 0';
    p1score.style.backgroundColor = '';
    p2score.style.backgroundColor = '';
    p1score.style.color = '';
    p2score.style.color = '';
    p1Round.innerHTML = '';
    p2Round.innerHTML = '';
    winnerMessage.textContent = '';
}

// Generate random number 1–6
function randomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}


