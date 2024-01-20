function getAllCities(){
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
    span.textContent = city.name;
    cardContent.appendChild(span);

    const descriptionSpan = document.createElement('span');
    descriptionSpan.textContent = city.description;
    cardContent.appendChild(descriptionSpan);


    cardContainer.appendChild(cardContent);
    cardsContainer.appendChild(cardContainer);
}
function changeBackgroundImage() {
    const bannerContainer = document.querySelector('.landing-page-top-container');

    bannerContainer.addEventListener('mouseover', function() {
        this.style.backgroundImage = "url('./images/travel1.png')"; // New image when mouseover
    });

    bannerContainer.addEventListener('mouseout', function() {
        this.style.backgroundImage = "url('./images/travel.png')"; // Original image when mouseout
    });
}

// Call the functions
document.addEventListener('DOMContentLoaded', () => {
    getAllCities();
    changeBackgroundImage();
});
