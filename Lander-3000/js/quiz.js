const quizContainer = document.querySelector('.quiz-container');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const startQuizBtn = document.getElementById('start-quiz-btn');

startQuizBtn.addEventListener('click', () => {
    document.querySelector('.text-content').classList.add('hide');
    quizContainer.style.display = 'block';
    loadQuestion();
});

const quizData = [
    {
        question: "What is your primary back issue?",
        answers: [
            { text: "Lower back pain", value: "lower" },
            { text: "Upper back pain", value: "upper" },
            { text: "General discomfort", value: "general" }
        ]
    },
    {
        question: "How often do you experience back pain?",
        answers: [
            { text: "Daily", value: "daily" },
            { text: "Weekly", value: "weekly" },
            { text: "Occasionally", value: "occasionally" }
        ]
    },
    {
        question: "What activities aggravate your back pain?",
        answers: [
            { text: "Sitting for long periods", value: "sitting" },
            { text: "Lifting heavy objects", value: "lifting" },
            { text: "Physical exercise", value: "exercise" }
        ]
    },
    {
        question: "Have you tried any treatments for your back pain?",
        answers: [
            { text: "Physical therapy", value: "therapy" },
            { text: "Medication", value: "medication" },
            { text: "None", value: "none" },
            { text: "All of the above", value: "all" }
        ]
    }
];
let currentQuestionIndex = 0;
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = '';

    currentQuestion.answers.forEach(answer => {
        const li = document.createElement('li');
        li.textContent = answer.text;
        li.addEventListener('click', () => {
            currentQuestionIndex++;
            document.getElementById('current-question').textContent = currentQuestionIndex + 1;
            if (currentQuestionIndex < quizData.length) {
                loadQuestion();
            } else {
                quizContainer.innerHTML = '<h2>Thank you for completing the quiz!</h2>';
                let recommendedProduct = {
                    imageUrl: '../Decompressor-3000/images/decompressor.png',
                    name: 'Decompressor-3000',
                    description: 'Based on your answers, we recommend the Decompressor-3000 to help alleviate your back pain.',
                    link: '../Decompressor-3000/index.html'
                };
                const resultHTML = `
                    <div class="product-recommendation">
                        <h2>Recommended Product</h2>
                        <img src="${recommendedProduct.imageUrl}" alt="${recommendedProduct.name}" width="200">
                        <h3>${recommendedProduct.name}</h3>
                        <p>${recommendedProduct.description}</p>
                        <a href="${recommendedProduct.link}">Buy Now</a>
                    </div>
                `;
                quizContainer.innerHTML += resultHTML;
            }
        });
        answersElement.appendChild(li);
    });
}
loadQuestion();