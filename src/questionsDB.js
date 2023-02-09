const universe = "Real World";
document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp4990911.jpg')";
const questions = [
    {
        questionText: 'What race is Goku?',
        answerOptions: [
            { answerText: 'Namekian', isCorrect: false },
            { answerText: 'Android', isCorrect: false },
            { answerText: 'Saiyan', isCorrect: true },
            { answerText: 'Earthling', isCorrect: false },
        ],
    },
    {
        questionText: 'Who is Goku`s brother?',
        answerOptions: [
            { answerText: 'Vegeta', isCorrect: false },
            { answerText: 'Raditz', isCorrect: true },
            { answerText: 'Nappa', isCorrect: false },
            { answerText: 'Gohan', isCorrect: false },
        ],
    },
    {
        questionText: 'Where does Goku live?',
        answerOptions: [
            { answerText: 'Earth', isCorrect: true },
            { answerText: 'Alpha', isCorrect: false },
            { answerText: 'Planet Vegeta', isCorrect: false },
            { answerText: 'Namek', isCorrect: false },
        ],
    },
    {
        questionText: 'Who teams up with Goku to fight Raditz?',
        answerOptions: [
            { answerText: 'Tien', isCorrect: false },
            { answerText: 'Krillin', isCorrect: false },
            { answerText: 'Vegeta', isCorrect: false },
            { answerText: 'Piccolo', isCorrect: true },
        ],
    },
];

export {questions, universe};