const searchFood = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    searchField.value = '';

    const foodUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(foodUrl)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
}

const displaySearchResult = meals => {
    const foodDetailsContainer = document.getElementById('food-details-container');
    foodDetailsContainer.textContent = ''
    meals.forEach(meal => {
        // console.log(meals)

        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
            <div onclick = "loadMealDetail(${meal.idMeal})" class="card h-100">
                <img height = auto; src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
                </div>
            </div>
        `
        foodDetailsContainer.appendChild(div)
    })

}

const loadMealDetail = mealId => {
    const mealUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(mealUrl)
        .then(res => res.json())
        .then(data => displayDetail(data.meals[0]))
}

const displayDetail = meal => {
    console.log(meal)
    const foodDetail = document.getElementById('food-detail');
    foodDetail.textContent = ''
    const foodDiv = document.createElement('div')
    foodDiv.classList.add('card')
    foodDiv.innerHTML = `
        <img height = auto; src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
            <a href="${meal.strYoutube}" target = "_blank" class="btn btn-primary">Watch Youtube Video</a>
        </div>
    `;
    foodDetail.appendChild(foodDiv);
}