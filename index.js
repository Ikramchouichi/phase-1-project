function getAllCities(){
    fetch("http://localhost:3000/cities")
        .then((resp) => resp.json())
        .then(city => {
            city.forEach(renderCities);
        });
  }
  
  
  
  
  function renderCities(city) {
  
  
  const cityMenu = document.querySelector('#cities')
  
  
  
      const img = document.createElement('img')
      img.src = city.image
  
      cities.appendChild(img)
  console.log(img)
      
      }
      getAllCities()
  
    
  
  