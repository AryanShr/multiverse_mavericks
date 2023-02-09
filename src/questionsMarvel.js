const universe = "Marvel";
document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp4990911.jpg')";
const questions = [
    {
        questionText: 'How many Infinity Stones are there??',
        answerOptions: [
            { answerText: 'three', isCorrect: false },
            { answerText: 'five', isCorrect: false },
            { answerText: 'six', isCorrect: true },
            { answerText: 'nine', isCorrect: false },
        ],
    },
    {
        questionText: 'What type of doctor is Doctor Strange?',
        answerOptions: [
            { answerText: 'obstetrician', isCorrect: false },
            { answerText: 'neurosurgeon', isCorrect: true },
            { answerText: 'gynecologist', isCorrect: false },
            { answerText: 'Orthopaedic', isCorrect: false },
        ],
    },
    {
        questionText: 'Captain America’s shield and Bucky`s arm are made of what?',
        answerOptions: [
            { answerText: 'vibranium', isCorrect: true },
            { answerText: 'steel', isCorrect: false },
            { answerText: 'titanium', isCorrect: false },
            { answerText: 'copper', isCorrect: false },
        ],
    },
    {
        questionText: 'Who was responsible for King T`Chaka`s death?',
        answerOptions: [
            { answerText: 'Loki', isCorrect: false },
            { answerText: 'Thanos', isCorrect: false },
            { answerText: 'Magneto', isCorrect: false },
            { answerText: 'Zemo', isCorrect: true },
        ],
    },
];

export {questions, universe};