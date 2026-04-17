/*Interactive Map*/

window.initMap = function() {
  var mapElement = document.getElementById("map-container");
  
  var campusCenter = { lat: 41.8353, lng: -87.6258 };
    
    var map = new google.maps.Map(mapElement, {
      zoom: 15,
      center: campusCenter,
    });

    var campusLocations = [
      {
        title: "IIT Tower",
        coords: { lat: 41.8315, lng: -87.6268 },
        description: "Illinois Tech's 19-story administrative and academic tower."
      },
      {
        title: "John T. Rettaliata Engineering Center",
        coords: { lat: 41.8373, lng: -87.6275 },
        description: "Where the engineering magic happens!"
      },
      {
        title: "Paul V. Galvin Library",
        coords: { lat: 41.8340, lng: -87.6276 },
        description: "The main library for late-night study and research."
      },
      {
        title: "McCormick Tribune Campus Center (MTCC)",
        coords: { lat: 41.8353, lng: -87.6258 },
        description: "The main student center. The train runs right through the roof!"
      }
    ];
};

/*Recipe Star Rating*/

document.addEventListener('DOMContentLoaded', () => {
  var ratingContainers = document.querySelectorAll('.star-rating');

  if (ratingContainers.length > 0) {
    ratingContainers.forEach(container => {
      var stars = container.querySelectorAll('.star');
      var recipeId = container.getAttribute('data-recipe');

      var storedRating = localStorage.getItem(`rating_${recipeId}`);
      if (storedRating) {
        updateStars(stars, storedRating);
      }

      stars.forEach(star => {
        star.addEventListener('mouseover', function() {
          var hoverValue = this.getAttribute('data-value');
          addHoverState(stars, hoverValue);
        });

        star.addEventListener('mouseout', function() {
          removeHoverState(stars);
        });

        star.addEventListener('click', function() {
          var ratingValue = this.getAttribute('data-value');
          updateStars(stars, ratingValue);
          
          localStorage.setItem(`rating_${recipeId}`, ratingValue);
          console.log(`Recipe '${recipeId}' rated: ${ratingValue} stars`);
        });
      });
    });
    function updateStars(stars, value) {
      stars.forEach(star => {
        var starValue = star.getAttribute('data-value');
        if (starValue <= value) {
          star.classList.add('selected');
        } else {
          star.classList.remove('selected');
        }
      });
    }
    function addHoverState(stars, value) {
      stars.forEach(star => {
        var starValue = star.getAttribute('data-value');
        if (starValue <= value) {
          star.classList.add('hover');
        } else {
          star.classList.remove('hover');
        }
      });
    }
    function removeHoverState(stars) {
      stars.forEach(star => star.classList.remove('hover'));
    }
  }
});
