let API = 'https://dog.ceo/api/breeds/image/random';
const bild = document.getElementById('randDog');
const bild2 = document.getElementById('breed-dogs');

async function randDog() {
    try {
        const response = await fetch(API);

        if(!response.ok) {
            throw new error(`HTTP error! Status: ${response.status}`);
        };

        const dogs = await response.json();
        console.log(dogs);
        console.log(dogs['message']);

        bild.querySelector('img').src = dogs['message'];


    } catch (error){
        console.log(error.massage);
    };
};

$('#rbtn').on('click', randDog);

async function breedDog() {
    try {
        const breed = $('#breed-select').val();
        const response = await fetch('https://dog.ceo/api/breed/' + breed + '/images/random');

        if(!response.ok) {
            throw new error(`HTTP error! Status: ${response.status}`);
        }

        const breeds = await response.json();
        console.log(breeds);
        console.log(breeds['message']);

        bild2.querySelector('img').src = breeds['message'];

    } catch (error){
        console.log(error.massage);
    };
}

$('#breedBtn').on('click', breedDog);

