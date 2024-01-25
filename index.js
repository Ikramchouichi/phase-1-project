function getAllCities() {
    fetch("http://localhost:3000/cities")
        .then((resp) => resp.json())
        .then(city => {
            city.forEach(renderCities);
        });
}

function renderCities(city) {
    const cardsContainer = document.querySelector('.landing-page-cards-container');

    const cardContainer = document.createElement('div');
    cardContainer.className = 'place-card-container';

    const cardContent = document.createElement('div');
    cardContent.className = 'place-card-container1';

    const img = document.createElement('img');
    img.src = city.image;
    img.className = 'place-card-image';
    cardContent.appendChild(img);

    const span = document.createElement('span');
    span.className = 'place-card-name';
    span.textContent = city.name;
    cardContent.appendChild(span);

    const descriptionSpan = document.createElement('span');
    descriptionSpan.textContent = city.description;
    descriptionSpan.style.display = 'none';
    cardContent.appendChild(descriptionSpan);



    const divButton = document.createElement('div');
    divButton.className = 'solid-button-button';
    cardContainer.appendChild(divButton);

    const button = document.createElement('button');
    button.className = "outline-button-container"
    cardContent.appendChild(button);


    const spanButton = document.createElement('span');
    spanButton.textContent = "Discover This Place"
    spanButton.className = "span-button"
    button.appendChild(spanButton);

    function toggleDescription() {
        const isHidden = descriptionSpan.style.display === 'none';
        descriptionSpan.style.display = isHidden ? 'block' : 'none';

    }


    button.addEventListener('click', toggleDescription);
    cardContainer.appendChild(cardContent);
    cardsContainer.appendChild(cardContainer);
}

function changeBackgroundImage() {
  const bannerContainer = document.querySelector('.landing-page-top-container');

    bannerContainer.addEventListener('mouseover', function () {
        this.style.backgroundImage = "url('./images/travel1.png')"; // New image when mouseover
    });

    bannerContainer.addEventListener('mouseout', function () {
        this.style.backgroundImage = "url('./images/travel.png')"; // Original image when mouseout
    });
}


function init() {
    getAllCities();
    changeBackgroundImage();
}
document.addEventListener('DOMContentLoaded', init)

function handleAddNewCity(e) {
    e.preventDefault();


    const cityName = e.target['city-name'].value;
    const cityPhoto = e.target['city-photo'].value;
    const cityDescription = e.target['city-description'].value;

    const newCityObj = {
        name: cityName,
        image: cityPhoto,
        description: cityDescription,
    };



    e.target.reset();
    renderCities(newCityObj);
}


document.getElementById('city-submission-form').addEventListener('submit', handleAddNewCity);
