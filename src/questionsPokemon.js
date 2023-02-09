const universe = "Real World";
document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp4990911.jpg')";
const questions = [
    {
        questionText: 'Which Pokémon can use its black ink to draw pictures or issue warnings?',
        answerOptions: [
            { answerText: 'Starmie', isCorrect: false },
            { answerText: 'Digglet', isCorrect: false },
            { answerText: 'Horsea', isCorrect: true },
            { answerText: 'Bellsprout', isCorrect: false },
        ],
    },
    {
        questionText: 'Squirtle can eventually become which Pokémon?',
        answerOptions: [
            { answerText: 'Electabuzz', isCorrect: false },
            { answerText: 'Blastoise', isCorrect: true },
            { answerText: 'Magmar', isCorrect: false },
            { answerText: 'Starmie', isCorrect: false },
        ],
    },
    {
        questionText: 'Which Pokémon seems to always have a headache?',
        answerOptions: [
            { answerText: 'Psyduck', isCorrect: true },
            { answerText: 'Kangaskhan', isCorrect: false },
            { answerText: 'AbraKadabra', isCorrect: false },
            { answerText: 'Zapdos', isCorrect: false },
        ],
    },
    {
        questionText: 'Rock tunnel and power plant are closest to which of the following?',
        answerOptions: [
            { answerText: 'Vermilion City', isCorrect: false },
            { answerText: 'Cinnabar Island', isCorrect: false },
            { answerText: 'Celadon City', isCorrect: false },
            { answerText: 'Cerulean City', isCorrect: true },
        ],
    },
];

export {questions, universe};