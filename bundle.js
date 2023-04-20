(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const { displayQuestion } = require('./src/js/questions.js');
// import displayQuestion from './src/questions.html';

displayQuestion();

},{"./src/js/questions.js":3}],2:[function(require,module,exports){
function pickRandom(arr, num) {
	const shuffled = [...arr].sort(() => 0.5 - Math.random());

	return shuffled.slice(0, num);
}

module.exports = { pickRandom };

},{}],3:[function(require,module,exports){
const { pickRandom } = require('./pickRandom');
// import pickRandom from './pickRandom';

async function displayQuestion() {
	try {
		const res = await fetch('http://localhost:3000/questions/history'); //replace history with the value of the clicked button on category page
		const questions = await res.json();
		// console.log(questions);

		const questionsContainer = document.querySelector('.carousel-inner');
		const randomQuestions = pickRandom(questions, 5); // specify how many question you want to see
		// console.log(randomQuestions);

		// DISPLAY ONLY FIRST QESTION
		// box
		const questionBox = document.createElement('div');
		questionBox.className = 'carousel-item active';
		questionBox.setAttribute('data-bs-interval', '15000');
		questionBox.setAttribute('data-bs-pause', false);

		//slide
		const question = document.createElement('div');
		question.className = 'd-block question position-relative';
		questionBox.appendChild(question);

		//question title
		const titleQuestion = document.createElement('div');
		titleQuestion.className = 'title-question';
		titleQuestion.textContent = randomQuestions[0].question;
		question.appendChild(titleQuestion);

		//answers box
		const answers = document.createElement('div');
		answers.className = 'answers';
		question.appendChild(answers);

		//answers row A and B
		const answersCol1 = document.createElement('div');
		answersCol1.className = 'd-flex justify-content-around';
		answers.appendChild(answersCol1);

		//answer A
		const answerA = document.createElement('div');
		answerA.className = 'btn btn-purple';
		answerA.textContent = randomQuestions[0].answer1;
		answersCol1.appendChild(answerA);

		//answer B
		const answerB = document.createElement('div');
		answerB.className = 'btn btn-purple';
		answerB.textContent = randomQuestions[0].answer2;
		answersCol1.appendChild(answerB);

		//answers row C and D
		const answersCol2 = document.createElement('div');
		answersCol2.className = 'd-flex justify-content-around';
		answers.appendChild(answersCol2);

		//answer C
		const answerC = document.createElement('div');
		answerC.className = 'btn btn-purple';
		answerC.textContent = randomQuestions[0].answer3;
		answersCol2.appendChild(answerC);

		//answer D
		const answerD = document.createElement('div');
		answerD.className = 'btn btn-purple';
		answerD.textContent = randomQuestions[0].answer4;
		answersCol2.appendChild(answerD);

		questionsContainer.appendChild(questionBox);

		// DISPLAY THE REST OF THE QUESTIONS
		for (let i = 1; i < randomQuestions.length; i++) {
			//box
			const questionBox = document.createElement('div');
			questionBox.className = 'carousel-item';
			questionBox.setAttribute('data-bs-interval', '15000');
			questionBox.setAttribute('data-bs-pause', false);

			//slide
			const question = document.createElement('div');
			question.className = 'd-block question position-relative';
			questionBox.appendChild(question);

			//title
			const titleQuestion = document.createElement('div');
			titleQuestion.className = 'title-question';
			titleQuestion.textContent = randomQuestions[i].question;
			question.appendChild(titleQuestion);

			//answers box
			const answers = document.createElement('div');
			answers.className = 'answers';
			question.appendChild(answers);

			//answers row A and B
			const answersCol1 = document.createElement('div');
			answersCol1.className = 'd-flex justify-content-around';
			answers.appendChild(answersCol1);

			//answer A
			const answerA = document.createElement('div');
			answerA.className = 'btn btn-purple';
			answerA.textContent = randomQuestions[i].answer1;
			answersCol1.appendChild(answerA);

			//answer B
			const answerB = document.createElement('div');
			answerB.className = 'btn btn-purple';
			answerB.textContent = randomQuestions[i].answer2;
			answersCol1.appendChild(answerB);

			//answers row C and D
			const answersCol2 = document.createElement('div');
			answersCol2.className = 'd-flex justify-content-around';
			answers.appendChild(answersCol2);

			//answer C
			const answerC = document.createElement('div');
			answerC.className = 'btn btn-purple';
			answerC.textContent = randomQuestions[i].answer3;
			answersCol2.appendChild(answerC);

			//answer D
			const answerD = document.createElement('div');
			answerD.className = 'btn btn-purple';
			answerD.textContent = randomQuestions[i].answer4;
			answersCol2.appendChild(answerD);

			questionsContainer.appendChild(questionBox);
		}

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
						nextBtn.disabled = true;
					}
				}
				if (index === randomQuestions.length) {
					window.location.href = '../completed.html';
				}
			}, 1000);
		}

		startTimer();

		nextBtn.addEventListener('click', function () {
			index++;
			if (index < randomQuestions.length) {
				clearInterval(timer);
				startTimer();
			}
		});
	} catch (err) {
		console.log(err);
	}
}

module.exports = { displayQuestion };

},{"./pickRandom":2}]},{},[1]);
