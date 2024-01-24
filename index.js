    function getAllCities() {
      fetch("http://localhost:3000/cities")
        .then((resp) => resp.json())
        .then(cities => {
          cities.forEach(renderCity);
        });
    }


    function renderCity(city) {
      const cityList = document.getElementById('city-list');

      // Create elements for city details
      const cityContainer = document.createElement('div');
      cityContainer.className = 'city-container';

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
