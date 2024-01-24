function getAllCities() {
  fetch("http://localhost:3000/cities")
    .then((resp) => resp.json())
    .then(cities => {
      cities.forEach(renderCity);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  const commentForm = document.getElementById('new-comment-form');
  const commentsList = document.querySelector('.landing-page-cards-container');

  commentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const commentText = document.getElementById('comment-text').value.trim();

    if (commentText) {
      const newCommentItem = document.createElement('div');
      newCommentItem.textContent = commentText;

      commentsList.appendChild(newCommentItem);
      document.getElementById('comment-text').value = '';
    }
  });
});

function renderCity(city) {
  const cityList = document.querySelector('.landing-page-cards-container');

  // Create elements for city details
  const cityContainer = document.createElement('div');
  cityContainer.className = 'city-container';

  const img = document.createElement('img');
  img.src = city.image;
  img.className = 'place-card-image';
  cityContainer.appendChild(img);

  const span = document.createElement('span');
  span.textContent = city.name;
  cityContainer.appendChild(span);

  const descriptionSpan = document.createElement('span');
  descriptionSpan.textContent = city.description;
  cityContainer.appendChild(descriptionSpan);

  // Create comment box
  const commentBox = document.createElement('div');
  commentBox.className = 'comment-box';
  const commentForm = document.createElement('form');
  commentForm.className = 'city-comment-form';
  const commentInput = document.createElement('input');
  commentInput.type = 'text';
  commentInput.placeholder = 'Enter your comment';
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';

  commentForm.appendChild(commentInput);
  commentForm.appendChild(submitButton);
  commentBox.appendChild(commentForm);
  cityContainer.appendChild(commentBox);

  cityList.appendChild(cityContainer);
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

// Call the functions
document.addEventListener('DOMContentLoaded', () => {
  getAllCities();

  // Handle adding new comments
  const commentForms = document.querySelectorAll('.city-comment-form');

  commentForms.forEach(commentForm => {
    commentForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const commentText = commentForm.querySelector('input').value.trim();

      if (commentText) {
        const newCommentItem = document.createElement('div');
        newCommentItem.textContent = commentText;

        // Append the new comment under the respective city
        const cityContainer = commentForm.closest('.city-container');
        cityContainer.appendChild(newCommentItem);

        // Clear the input field
        commentForm.querySelector('input').value = '';
      }
    });
  });
});
