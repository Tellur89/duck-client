const url = 'http://localhost:3000/questions/';

fetch(url)
.then(resp => resp.json())
.then(data => 
    {
        for(const dataCats in data)
        {
            console.log(dataCats)
        }
    })
.catch(err => console.log(err));

function getCategories()
{

}

getCategories();

/* 
<div class="col">
	<section class="georgraphy-section">
		<a href=#>
			<div class="button">
				<h6>Geography</h6>
				<img src="./img/icons/earthIcon.png" alt="Earth icon">
			</div>
		</a>
	</section>
</div>
*/

