/*Interactive Map*/

window.initMap = function() {
  var mapElement = document.getElementById("map-container");
  
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
