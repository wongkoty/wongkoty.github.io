// Get the modal
const inkneadModal = document.getElementById('inknead-modal');
const spaceModal = document.getElementById('space-modal');
const calorieModal = document.getElementById('calorie-modal');
const foodModal = document.getElementById('food-modal');
const blackjackModal = document.getElementById('blackjack-modal');


// Get the <span> element that closes the modal
const inkneadSpan = document.getElementById("inknead-close");
const spaceSpan = document.getElementById("space-close");
const calorieSpan = document.getElementById("calorie-close");
const foodSpan = document.getElementById("food-close");
const blackjackSpan = document.getElementById("blackjack-close");

// When the user clicks on the button, open the modal 
document.getElementById("inknead-btn").onclick = function() {
  inkneadModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
inkneadSpan.onclick = function() {
  inkneadModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == inkneadModal) {
    inkneadModal.style.display = "none";
  } else if (event.target == spaceModal) {
    spaceModal.style.display = "none";
  } else if (event.target == calorieModal) {
    calorieModal.style.display = "none";
  } else if (event.target == foodModal) {
    foodModal.style.display = "none";
  } else if (event.target == blackjackModal) {
    blackjackModal.style.display = "none";
  }
}

document.getElementById("space-btn").onclick = function() {
  spaceModal.style.display = "block";
}

spaceSpan.onclick = function() {
  spaceModal.style.display = "none";
}

document.getElementById("calorie-btn").onclick = function() {
  calorieModal.style.display = "block";
}

calorieSpan.onclick = function() {
  calorieModal.style.display = "none";
}

document.getElementById("food-btn").onclick = function() {
  foodModal.style.display = "block";
}

foodSpan.onclick = function() {
  foodModal.style.display = "none";
}


document.getElementById("blackjack-btn").onclick = function() {
  blackjackModal.style.display = "block";
}

blackjackSpan.onclick = function() {
  blackjackModal.style.display = "none";
}

// Click animation

$('a[href^="#about"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 850);
    }
});
$('a[href^="#portfolio"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 850);
    }
});
$('a[href^="#contact"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 850);
    }
});

// resizing

$(window).on('resize', function() {
  if ($(window).width() <= 640) {
    $('.fa').addClass('fa-1x');
    $('.fa').removeClass('fa-2x');
  } else if($(window).width() <= 780) {
    $('.fa').addClass('fa-2x');
    $('.fa').removeClass('fa-3x');
    document.getElementById("name").size = "17";
    document.getElementById("email").size = "17";
    document.getElementById("comment").size = "17";
  } else {
    $('.fa').addClass('fa-3x');
    $('.fa').removeClass('fa-2x');
    document.getElementById("name").size = "34";
    document.getElementById("email").size = "34";
    document.getElementById("comment").size = "34";
  }
})

