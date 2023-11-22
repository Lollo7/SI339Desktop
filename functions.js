var randomCity; 

document.getElementById('randomButton').addEventListener('click', function() {

    var cities = ['Jasper, Canada', 'Jungfrau, Switzerland', 'Grand Canyon', 'Paris, France'];

    randomCity = cities[Math.floor(Math.random() * cities.length)];

    document.getElementById('cityDisplay').innerHTML = "Randomly Selected City: " + randomCity;
    document.getElementById('scrollButton').style.display = 'inline-block';

});

document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('cityDisplay').scrollIntoView({ behavior: 'smooth' });
    if (randomCity == "Jasper, Canada") {
        document.getElementById('jasper').scrollIntoView({ behavior: 'smooth' });
    } else if (randomCity == "Jungfrau, Switzerland") {
        document.getElementById('jungfrau').scrollIntoView({ behavior: 'smooth' });
    } else if (randomCity == "Grand Canyon") {
        document.getElementById('grand_canyon').scrollIntoView({ behavior: 'smooth' });
    } else if (randomCity == "Paris, France") {
        document.getElementById('paris').scrollIntoView({ behavior: 'smooth' });
    }
});


