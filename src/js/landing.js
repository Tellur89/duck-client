const { capitalize } = require('./capitilize');

const url = 'http://localhost:3000/questions/';


function getCategories(){
	try {
		//Fetch question categories 
		fetch(url)
		.then(resp => resp.json())
		.then(data => {
			temp(data);
			})	
	}
	catch (err) {
		console.log(err);
	}
}

function temp (data) 
{
	for(const dataCats in data){
		let categoryEl = document.querySelector('.row');
		const categoryBtn = 
		`
			<div class="col">
				<section class="georgraphy-section">
					<a href='./questions.html'>
						<div class="button">
							<h6>${capitalize(dataCats)}</h6>
							<img src="./img/icons/earthIcon.png" alt="Earth icon">
						</div>
					</a>
				</section>
			</div>
		`
		categoryEl.insertAdjacentHTML("beforeend",categoryBtn);
		return dataCats
	}
}

module.exports = { getCategories };
