/*
const { capitalize } = require('./capitilize');

const url = 'http://localhost:3000/questions/';


async function getCategories(){
	try {
			const response = await fetch(url);
			const categories = await response.json();

			for(const dataCats in categories){
				let categoryEl = document.querySelector('.row');
				const categoryBtn = 
				`
					<div class="col">
						<section>
							<a href='./questions.html'>
								<button class="button" value='${dataCats}' onClick='btnUrl()'>
									<h6 id="btn">${capitalize(dataCats)}</h6>
									<img src="./img/icons/earthIcon.png" alt="Earth icon">
								</button>
							</a>
						</section>
					</div>
				`
				categoryEl.insertAdjacentHTML("beforeend",categoryBtn);
			}
		}	
	catch (err) {
		console.log(err);
	}
}
*/
function btnUrl() {
	const btn = document.querySelectorAll('#btn');
	for (i = 0; i < btn.length; i++) {
		console.log(btn.value);
	}
}

// module.exports = { btnUrl };
