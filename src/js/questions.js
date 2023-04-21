const { pickRandom } = require('./pickRandom');
// import pickRandom from './pickRandom';

async function displayQuestion() {
	try {
		const res = await fetch('http://localhost:3000/questions/history'); //replace history with the value of the clicked button on category page
		const questions = await res.json();
		const randomQuestions = pickRandom(questions, 5); // specify how many question you want to see

		// DISPLAY ONLY FIRST QESTION
		const titleQuestion = document.getElementById('titleQuestion0');
		titleQuestion.textContent = randomQuestions[0].question;
		console.log(randomQuestions[0].question);
		const answerA = document.getElementById('btn-answerA0');
		answerA.textContent = randomQuestions[0].answer1;
		const answerB = document.getElementById('btn-answerB0');
		answerB.textContent = randomQuestions[0].answer2;
		const answerC = document.getElementById('btn-answerC0');
		answerC.textContent = randomQuestions[0].answer3;
		const answerD = document.getElementById('btn-answerD0');
		answerD.textContent = randomQuestions[0].answer4;

		// DISPLAY THE REST OF THE QUESTIONS
		for (let i = 1; i < randomQuestions.length; i++) {
			const titleQuestion = document.getElementById('titleQuestion' + i);
			titleQuestion.textContent = randomQuestions[i].question;
			const answerA = document.getElementById('btn-answerA' + i);
			answerA.textContent = randomQuestions[i].answer1;
			const answerB = document.getElementById('btn-answerB' + i);
			answerB.textContent = randomQuestions[i].answer2;
			const answerC = document.getElementById('btn-answerC' + i);
			answerC.textContent = randomQuestions[i].answer3;
			const answerD = document.getElementById('btn-answerD' + i);
			answerD.textContent = randomQuestions[i].answer4;
		}

		//TIMER
		let index = 0;
		let timer;

		const nextBtn = document.getElementById('btn-next');
		function startTimer() {
			const timerBtn = document.getElementById('timer');
			let timeMax = 15;
			timerBtn.textContent = `Time left: ${timeMax}s`;
			timer = setInterval(function () {
				timeMax--;
				timerBtn.textContent = `Time left: ${timeMax}s`;
				if (timeMax <= 0) {
					clearInterval(timer);
					index++;
					if (index < randomQuestions.length) {
						startTimer();
					}
				}
				if (index === randomQuestions.length) {
					window.location.href = '../../src/completed.html';
				}
			}, 1000);

			// CREATE NUMBER OF QUESTIONS
			const questionsNum = document.getElementById('questionsNum');
			questionsNum.className = 'questions-num';
			questionsNum.textContent = `${index + 1} / ${randomQuestions.length}`;
		}

		startTimer();

		// NEXT BUTTON
		nextBtn.addEventListener('click', function () {
			index++;
			if (index < randomQuestions.length) {
				clearInterval(timer);
				startTimer();
			}
		});

		let questionIndex = 0;
		function findAnswer() {
			resetAnswers();
			const buttons = document.querySelectorAll('.btn-answer');
			const firstButtonIndex = questionIndex * 4;
			const lastButtonIndex = firstButtonIndex + 3;

			for (let i = firstButtonIndex; i <= lastButtonIndex; i++) {
				buttons[i].setAttribute('data-button-index', i - firstButtonIndex + 1);

				buttons[i].addEventListener('click', () => {
					const selectedButtonIndex = Number(buttons[i].getAttribute('data-button-index'));

					if (selectedButtonIndex === randomQuestions[questionIndex].ansIndex) {
						buttons[i].style.backgroundColor = 'green';
					} else {
						buttons[i].style.backgroundColor = 'red';
					}

					for (let j = firstButtonIndex; j <= lastButtonIndex; j++) {
						buttons[j].disabled = true;
					}
				});
			}
		}

		function resetAnswers() {
			const answerButtons = document.querySelectorAll('.btn-answer');
			answerButtons.forEach((button) => {
				button.classList.remove('selected');
				button.style.backgroundColor = '';
			});
		}
		findAnswer();
	} catch (err) {
		console.log(err);
	}
}
// displayQuestion();
module.exports = { displayQuestion };
