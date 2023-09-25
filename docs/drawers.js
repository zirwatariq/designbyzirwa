
/*
let slideIndex = 1;

// Function to show the initial slide
showSlides(slideIndex);

// Function to navigate to the next or previous slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to navigate to a specific slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to display the slides
function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove active class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and set the corresponding dot as active
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

*/

  /*var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

*/


// Function to control the slides for each slideshow
/*function plusSlides(n, slideshowId) {
    if (slideshowId === 'logoSlideshow') {
        showSlides(slideIndexLogo += n, slideshowId);
    } else if (slideshowId === 'posterSlideshow') {
        showSlides(slideIndexPoster += n, slideshowId);
    } else if (slideshowId === 'vectorIllustrationSlideshow') {
        showSlides(slideIndexVectorIllustration += n, slideshowId);
    } else if (slideshowId === 'digitalIllustrationSlideshow') {
        showSlides(slideIndexDigitalIllustration += n, slideshowId);
    }
}*/

// Initialize slide indices for each slideshow
let slideIndexLogo = 1;
let slideIndexPoster = 1;
let slideIndexVectorIllustration = 1;
let slideIndexDigitalIllustration = 1;

function plusSlides(n, slideshowId) {
    let currentIndex;
    if (slideshowId === 'logoSlideshow') {
        currentIndex = slideIndexLogo;
    } else if (slideshowId === 'posterSlideshow') {
        currentIndex = slideIndexPoster;
    } else if (slideshowId === 'vectorIllustrationSlideshow') {
        currentIndex = slideIndexVectorIllustration;
    } else if (slideshowId === 'digitalIllustrationSlideshow') {
        currentIndex = slideIndexDigitalIllustration;
    }

    currentIndex += n;

    const slides = document.querySelectorAll(`#${slideshowId} .mySlides`);

    if (currentIndex > slides.length) {
        currentIndex = 1;
    }
    if (currentIndex < 1) {
        currentIndex = slides.length;
    }

    if (slideshowId === 'logoSlideshow') {
        slideIndexLogo = currentIndex;
    } else if (slideshowId === 'posterSlideshow') {
        slideIndexPoster = currentIndex;
    } else if (slideshowId === 'vectorIllustrationSlideshow') {
        slideIndexVectorIllustration = currentIndex;
    } else if (slideshowId === 'digitalIllustrationSlideshow') {
        slideIndexDigitalIllustration = currentIndex;
    }

    showSlides(currentIndex, slideshowId);
}

// Function to display the current slide for each slideshow
function currentSlide(n, slideshowId) {
    if (slideshowId === 'logoSlideshow') {
        showSlides(slideIndexLogo += n, slideshowId);
    } else if (slideshowId === 'posterSlideshow') {
        showSlides(slideIndexPoster += n, slideshowId);
    } else if (slideshowId === 'vectorIllustrationSlideshow') {
        showSlides(slideIndexVectorIllustration += n, slideshowId);
    } else if (slideshowId === 'digitalIllustrationSlideshow') {
        showSlides(slideIndexDigitalIllustration += n, slideshowId);
    }
}

// Function to display the slides for each slideshow
function showSlides(n, slideshowId) {
    let i;
    const slides = document.querySelectorAll(`#${slideshowId} .mySlides`);
    const dots = document.querySelectorAll(`#${slideshowId} .dot`);

    if (n > slides.length) {
        if (slideshowId === 'logoSlideshow') slideIndexLogo = 1;
        else if (slideshowId === 'posterSlideshow') slideIndexPoster = 1;
        else if (slideshowId === 'vectorIllustrationSlideshow') slideIndexVectorIllustration = 1;
        else if (slideshowId === 'digitalIllustrationSlideshow') slideIndexDigitalIllustration = 1;
    }
    if (n < 1) {
        if (slideshowId === 'logoSlideshow') slideIndexLogo = slides.length;
        else if (slideshowId === 'posterSlideshow') slideIndexPoster = slides.length;
        else if (slideshowId === 'vectorIllustrationSlideshow') slideIndexVectorIllustration = slides.length;
        else if (slideshowId === 'digitalIllustrationSlideshow') slideIndexDigitalIllustration = slides.length;
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        slides[i].classList.remove('fade-in-out');
    }

    // Remove the "active" class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    // Display the current slide and set the corresponding dot as active
    slides[n - 1].style.display = 'block';
    slides[n - 1].classList.add('fade-in-out');
    dots[n - 1].className += ' active';
}

// Initialize the slideshows
document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndexLogo, 'logoSlideshow');
    showSlides(slideIndexPoster, 'posterSlideshow');
    showSlides(slideIndexVectorIllustration, 'vectorIllustrationSlideshow');
    showSlides(slideIndexDigitalIllustration, 'digitalIllustrationSlideshow');

        // Add keyboard event listeners
        document.addEventListener('keydown', (event) => {
          if (event.key === 'ArrowLeft') {
              plusSlides(-1, 'logoSlideshow');
          } else if (event.key === 'ArrowRight') {
              plusSlides(1, 'logoSlideshow');
          } else if (event.key === 'Enter') {
              currentSlide(1, 'logoSlideshow');
          }
      });
  });

