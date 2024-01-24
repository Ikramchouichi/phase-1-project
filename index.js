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
