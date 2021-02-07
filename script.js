document.getElementById("search").addEventListener("click",function(){
    const inputValue = document.getElementById("mealSearch");
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+inputValue.value)
    .then(res => res.json())
    .then(data => allMealData(data.meals))
    inputValue.value = "";

});



const allMealData = data =>{
    const mealsContainer = document.getElementById("mealsList");
    mealsContainer.innerHTML = "";

    data.forEach(mealsName => {
        const mealDiv = document.createElement('div');
            mealDiv.className = 'card-box';
            
    
            const allMeals = `
            <div onclick="displayName('${mealsName.strMeal}')">
            <img src= ${mealsName.strMealThumb}>
            <h3 >${mealsName.strMeal}</h3>
            </div>
            `
            mealDiv.innerHTML = allMeals;
            mealsContainer.appendChild(mealDiv);
           
    });   
    
}


    const displayName = mealName =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
    fetch(url)
    .then(res => res.json())
    .then(data => dataStore(data))

}
const dataStore = data =>{
    const foodDetails = data.meals[0];
    const foodAll = document.getElementById("foodDetailContainer");
    foodAll.innerHTML = `
    <div class="food-box">
    <img src= ${foodDetails.strMealThumb}>
    <h2>${foodDetails.strMeal}</h2>
    <h5>Ingredients</h5>
    <ul>
    <li>${foodDetails.strIngredient1}</li>
    <li>${foodDetails.strIngredient2}</li>
    <li>${foodDetails.strIngredient3}</li>
    <li>${foodDetails.strIngredient4}</li>
    <li>${foodDetails.strIngredient5}</li>
    <li>${foodDetails.strIngredient6}</li>
    <li>${foodDetails.strIngredient7}</li>
    <li>${foodDetails.strIngredient8}</li>
    <li>${foodDetails.strIngredient9}</li>
    <li>${foodDetails.strIngredient10}</li>
    </ul>
    </div>
    `
}

