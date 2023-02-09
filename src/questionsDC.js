const universe = "Real World";
document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp4990911.jpg')";
const questions = [
    {
        questionText: 'What is Superman`s birth name from Krypton?',
        answerOptions: [
            { answerText: 'Clark Kent', isCorrect: false },
            { answerText: 'Kon-El', isCorrect: false },
            { answerText: 'Kal-El', isCorrect: true },
            { answerText: 'Jor-El', isCorrect: false },
        ],
    },
    {
        questionText: 'Who actually kills Superman?',
        answerOptions: [
            { answerText: 'Parallax', isCorrect: false },
            { answerText: 'Doomsday', isCorrect: true },
            { answerText: 'Darkseid', isCorrect: false },
            { answerText: 'Atrocitus', isCorrect: false },
        ],
    },
    {
        questionText: 'Which of these characters does not have the ability to time travel?',
        answerOptions: [
            { answerText: 'Batman', isCorrect: true },
            { answerText: 'Ion', isCorrect: false },
            { answerText: 'The Flash', isCorrect: false },
            { answerText: 'Parallax', isCorrect: false },
        ],
    },
    {
        questionText: 'Who is the secret identity of Green Arrow?',
        answerOptions: [
            { answerText: 'Bruce Wayne', isCorrect: false },
            { answerText: 'Barry Allan', isCorrect: false },
            { answerText: 'Clark Kent', isCorrect: false },
            { answerText: 'Oliver Queen', isCorrect: true },
        ],
    },
];

export {questions, universe};