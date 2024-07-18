// Counter variables
let count = 0;
let timerInterval;

// DOM elements
const counterDisplay = document.getElementById('counter');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const likeButton = document.getElementById('like');
const pauseButton = document.getElementById('pause');
const commentForm = document.getElementById('comment-form');
const commentsList = document.getElementById('comments-list');

// Timer incrementation
function startTimer() {
    timerInterval = setInterval(() => {
        count++;
        counterDisplay.textContent = count;
    }, 1000);
}

// Plus button click
plusButton.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
});

// Minus button click
minusButton.addEventListener('click', () => {
    count--;
    counterDisplay.textContent = count;
});

// Like button click
likeButton.addEventListener('click', () => {
    // Implement logic to track and display likes
});

// Pause button click
let isPaused = false;
pauseButton.addEventListener('click', () => {
    if (!isPaused) {
        clearInterval(timerInterval);
        isPaused = true;
        pauseButton.textContent = 'Resume';
        plusButton.disabled = true;
        minusButton.disabled = true;
        likeButton.disabled = true;
        commentForm.querySelector('button').disabled = true;
    } else {
        startTimer();
        isPaused = false;
        pauseButton.textContent = 'Pause';
        plusButton.disabled = false;
        minusButton.disabled = false;
        likeButton.disabled = false;
        commentForm.querySelector('button').disabled = false;
    }
});

// Comment form submission
commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const commentInput = commentForm.querySelector('input');
    const comment = commentInput.value;
    const commentItem = document.createElement('li');
    commentItem.textContent = comment;
    commentsList.appendChild(commentItem);
    commentInput.value = '';
});

// Start the timer on page load
startTimer();
