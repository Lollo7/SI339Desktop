var randomPet; 

document.getElementById('randomButtonPets').addEventListener('click', function() {

    var pets = ['Dollar', 'Milo', 'Cheeto', 'Leo', 'Lucy'];

    randomPet = pets[Math.floor(Math.random() * pets.length)];

    document.getElementById('petDisplay').innerHTML = "Randomly Selected Pet: " + randomPet;
    document.getElementById('scrollButtonPet').style.display = 'inline-block';

});

document.getElementById('scrollButtonPet').addEventListener('click', function() {
    document.getElementById('petDisplay').scrollIntoView({ behavior: 'smooth' });
    if (randomPet == "Dollar") {
        document.getElementById('dollar').scrollIntoView({ behavior: 'smooth' });
    } else if (randomPet == "Milo") {
        document.getElementById('milo').scrollIntoView({ behavior: 'smooth' });
    } else if (randomPet == "Cheeto") {
        document.getElementById('cheeto').scrollIntoView({ behavior: 'smooth' });
    } else if (randomPet == "Leo") {
        document.getElementById('leo').scrollIntoView({ behavior: 'smooth' });
    } else if (randomPet == "Lucy") {
        document.getElementById('lucy').scrollIntoView({ behavior: 'smooth' });
    }
});
