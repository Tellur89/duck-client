const url = 'http://localhost:3000/questions/';


function getCategories(){
	fetch(url)
	.then(resp => resp.json())
	.then(data => {
			for(const dataCats in data){
				let categoryEl = document.querySelector('.row');
				const categoryBtn = 
				`
					<div class="col">
						<section class="georgraphy-section">
							<a href=#>
								<div class="button">
									<h6>${capitalize(dataCats)}</h6>
									<img src="./img/icons/earthIcon.png" alt="Earth icon">
								</div>
							</a>
						</section>
					</div>
				`
				categoryEl.insertAdjacentHTML("beforeend",categoryBtn);
			}
		})
	}

getCategories();


const capitalize = (word) => {
    let str = word.toLowerCase();
    let capitalizedWord = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalizedWord
}
