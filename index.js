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

// const likesCounter = document.querySelector('likes')
// likesCounter.innertext = `${cities.likes} likes`

// const likeButton = document.querySelector('like-button')

// likeButton.addEventListener(click, function(event) {
// likes.counter.innerText = incrementLikes(data)
// } )


// const btn1 = document.querySelector('#green');
// const btn2 = document.querySelector('#red');

// btn1.addEventListener('click', function() {
//       if (btn2.classList.contains('red')) {
//       btn2.classList.remove('red');
//     } 
//   this.classList.toggle('green');
//   });

// btn2.addEventListener('click', function() {
//     if (btn1.classList.contains('green')) {
//     btn1.classList.remove('green');
//     } 
//   this.classList.toggle('red');
//   });


document.addEventListener("DOOMContentLoaded", function() {
    fetch('http://localhost:3000/images/1')
    .then(resource => resource.json())
    .then((data) => {addLikeToPage(data)
    }) 
})
  function addLikeToPage(data){
const likeButton = document.querySelector('.likes')

likeButton.addEventListener('click', function(event) {
likeCounter.innerText = incrementLikes(data)

})
  }

  function incrementLikes(image){
  let likes = 0
 fetch(`http://localhost:3000/images/${image.id}`)
  .then(resource => resource.json())
  .then((data) => {
    likes = data.likes
  })
  
  let newLikes = likes + 1 

  fetch('http://localhost:3000/images/1', {
    method: 'PATCH',
    headers: { 
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    body: JSON.stringify({
        "likes": newLikes
    })
   }) 
const likesText = `${newLikes} likes`
return likesText
  

  }




  function addDislikeToPage(data){
    const likeButton = document.querySelector('.dislikes')
    
    likeButton.addEventListener('click', function(event) {
    likeCounter.innerText = incrementLikes(data)
    
    })
      }
    
      function incrementLikes(image){
      let dislikes = 0
     fetch(`http://localhost:3000/images/${image.id}`)
      .then(resource => resource.json())
      .then((data) => {
        likes = data.likes
      })
      
      let newDislikes = Dislikes + 1 
    
      fetch('http://localhost:3000/images/1', {
        method: 'PATCH',
        headers: { 
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            "dislikes": newDisikes
        })
       }) 
    const likesText = `${newDislikes} dislikes`
    return dislikesText
      
    
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
