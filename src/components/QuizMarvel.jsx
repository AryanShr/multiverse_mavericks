import '../quiz.css';
import React, { useState } from 'react';
import {questions,universe} from '../questionsMarvel.js'

export default function QuizMarvel() {
	const bgUrl = 'https://wallpapercave.com/wp/W8SnI0A.jpg';
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='h-[100vh] flex items-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${bgUrl})` }}>
			<div className='quiz'>
				{showScore ? (
					<div className='score-section'>
						{score / questions.length > 0.9 ? (
							<p>Hurray! you have conquered the {universe} universe</p>
						) : (
							<p>Try again, your score is {score * 10}, score {questions.length * 9} points to conquer the {universe} Universe.</p>
						)}

					</div>
				) : (
					<>
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {currentQuestion + 1}</span>/{questions.length}
							</div>
							<div className='question-text'>{questions[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
							{questions[currentQuestion].answerOptions.map((answerOption) => (
								<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
							))}
						</div>
					</>
				)}
			</div>
		</div>
	);
}
