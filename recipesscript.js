var randomRecipe; 

document.getElementById('randomButtonRecipes').addEventListener('click', function() {

    var recipes = ['Mapo Tofu', 'Sushi Bake', 'Chicken Tikka Masala', 'Tomato and Eggs', 'Tomato Basil Pasta'];

    randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];

    document.getElementById('recipeDisplay').innerHTML = "Randomly Selected Recipe: " + randomRecipe;
    document.getElementById('scrollButtonRecipe').style.display = 'inline-block';

});

document.getElementById('scrollButtonRecipe').addEventListener('click', function() {
    document.getElementById('recipeDisplay').scrollIntoView({ behavior: 'smooth' });
    if (randomRecipe == "Mapo Tofu") {
        document.getElementById('mapo_tofu').scrollIntoView({ behavior: 'smooth' });
    } else if (randomRecipe == "Sushi Bake") {
        document.getElementById('sushi_bake').scrollIntoView({ behavior: 'smooth' });
    } else if (randomRecipe == "Chicken Tikka Masala") {
        document.getElementById('chicken_tikka').scrollIntoView({ behavior: 'smooth' });
    } else if (randomRecipe == "Tomato and Eggs") {
        document.getElementById('tomato').scrollIntoView({ behavior: 'smooth' });
    } else if (randomRecipe == "Tomato Basil Pasta") {
        document.getElementById('pasta').scrollIntoView({ behavior: 'smooth' });
    }
});