const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Jupiter"
    },
    // Add more questions as needed
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons');

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    answerButtonsElement.innerHTML = '';
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.onclick = () => checkAnswer(answer, button); // Pass the button element to the function
        answerButtonsElement.appendChild(button);
    });
}

function checkAnswer(answer, button) {
    const currentQuestion = questions[currentQuestionIndex];
    const resultMessageElement = document.getElementById('result-message');

    if (answer === currentQuestion.correctAnswer) {
        resultMessageElement.textContent = 'Correct!';
        resultMessageElement.style.color = 'green';
        button.style.backgroundColor = 'green'; // Change the button color to green
    } else {
        resultMessageElement.textContent = 'Incorrect. The correct answer is ' + currentQuestion.correctAnswer;
        resultMessageElement.style.color = 'red';
        button.style.backgroundColor = 'red'; // Change the button color to red
    }

    // Enable the Next Question button after an answer is checked
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    const resultMessageElement = document.getElementById('result-message');
    resultMessageElement.textContent = ''; // Clear the message when moving to the next question

    currentQuestionIndex++;
    const completedCountElement = document.getElementById('completed-count');
    completedCountElement.textContent = currentQuestionIndex; // Update the completed count

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        resultMessageElement.textContent = 'Quiz completed!';
        resultMessageElement.style.color = 'blue';
        currentQuestionIndex = 0; // Reset for next time
    }

    // Disable the Next Question button again after moving to the next question
    document.getElementById('next-btn').disabled = true;
}

// Initially disable the Next Question button
document.getElementById('next-btn').disabled = true;

// Load the first question when the page loads
loadQuestion();
