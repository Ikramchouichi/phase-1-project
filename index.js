    function getAllCities() {
      fetch("http://localhost:3000/cities")
        .then((resp) => resp.json())
        .then(cities => {
          cities.forEach(renderCity);
        });
<<<<<<< HEAD
    }

    function renderCity(city) {
      const cityList = document.getElementById('city-list');

      // Create elements for city details
      const cityContainer = document.createElement('div');
      cityContainer.className = 'city-container';

      const img = document.createElement('img');
      img.src = city.image;
      img.alt = city.name;

      const nameElement = document.createElement('h2');
      nameElement.textContent = city.name;

      const countryElement = document.createElement('h3');
      countryElement.textContent = city.country;

      // Append elements to city container
      cityContainer.appendChild(img);
      cityContainer.appendChild(nameElement);
      cityContainer.appendChild(countryElement);

      // Append city container to city list
      cityList.appendChild(cityContainer);
    }

    getAllCities();

    // Handle adding new comments
    const commentForm = document.getElementById('new-comment-form');
    const commentsList = document.getElementById('comments-list');

    commentForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const commentText = document.getElementById('comment-text').value;

      if (commentText.trim() !== '') {
        addComment(commentText);
        document.getElementById('comment-text').value = '';
      }
    });

    function addComment(commentText) {
      const newCommentItem = document.createElement('li');
      newCommentItem.textContent = commentText;

      commentsList.appendChild(newCommentItem);
    }
=======
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
>>>>>>> 88bf1641fc8e539388da29d4f29ecab82d1fffe3
