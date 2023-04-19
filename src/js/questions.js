async function displayQuestion() {
	try {
		const res = await fetch('http://localhost:3000/questions');
		const questions = await res.json();
		const questionsContainer = document.querySelector('.carousel-inner');

		const pickRandom = (arr, num) => {
			const shuffled = [...arr].sort(() => 0.5 - Math.random());
			// console.log(shuffled);
			return shuffled.slice(0, num);
		};
		const randomQuestions = pickRandom(questions, 5); // specify how many question you want to see

		//DISPLAYING ONLY 1 QESTION
		//box
		const questionBox = document.createElement('div');
		questionBox.className = 'carousel-item active';
		questionBox.setAttribute('data-bs-interval', '2000');
		questionBox.setAttribute('data-bs-pause', 'false');

		//slide
		const question = document.createElement('div');
		question.className = 'question d-block w-100';
		questionBox.appendChild(question);

		//question
		const titleQuestion = document.createElement('div');
		titleQuestion.className = 'title-question';
		titleQuestion.textContent = randomQuestions[0].question;
		question.appendChild(titleQuestion);

		questionsContainer.appendChild(questionBox);

		// DISPLAY THE REST OF THE QUESTIONS
		for (let i = 1; i < randomQuestions.length; i++) {
			//box
			const questionBox = document.createElement('div');
			questionBox.className = 'carousel-item';
			questionBox.setAttribute('data-bs-interval', '2000');
			questionBox.setAttribute('data-bs-pause', 'false');

			//slide
			const question = document.createElement('div');
			question.className = 'question d-block w-100';
			questionBox.appendChild(question);

			//title
			const titleQuestion = document.createElement('div');
			titleQuestion.className = 'title-question';
			titleQuestion.textContent = randomQuestions[i].question;
			question.appendChild(titleQuestion);

			questionsContainer.appendChild(questionBox);
		}
	} catch (err) {
		console.log(err);
	}
}

displayQuestion();
