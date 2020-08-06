//Toggle class on hamburger
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", e => {
        hamburger.classList.toggle("is-active");
    });

        // new Glide('.glide').mount();

    // var input = document.querySelector('#options-autoplay-input')

    new Glide('.options-autoplay-1', {
      type: "carousel",
      autoplay: 2000,
      hoverpause: true,
      perView: 4,
      breakpoints: {
        1100: {
          perView: 3
        },
        900: {
          perView: 2
        },
        600: {
          perView: 1
        }
      }
    }).mount();

    new Glide('.options-autoplay-2', {
      type: "carousel",
      autoplay: 2000,
      hoverpause: true,
      perView: 6,
      breakpoints: {
        900: {
          perView: 4
        },
        600: {
          perView: 3
        },
        400: {
          perView: 2
        }
      }
    }).mount();

    new Glide('.options-autoplay-3', {
      type: "slider",
      autoplay: 2000,
      hoverpause: true,
      perView: 1
    }).mount();

    new Glide('.options-autoplay-4', {
      type: "carousel",
      autoplay: 2000,
      hoverpause: true,
      perView: 6,
      breakpoints: {
        900: {
          perView: 4
        },
        600: {
          perView: 3
        },
        400: {
          perView: 2
        }
      }
    }).mount();

    // Initialize and add the map
    function initMap() {
      // The location of Uluru
      var uluru = {lat: 51.3656, lng: -0.1963};
      // The map, centered at Uluru
      var map = new google.maps.Map(
          document.getElementById('map'), {zoom: 4, center: uluru});
      // The marker, positioned at Uluru
      var marker = new google.maps.Marker({position: uluru, map: map});
    }
    
    // input.addEventListener('input', function (event) {
    //   glide.update({
    //     autoplay: (event.target.value != 0) ? event.target.value : false
    //   })
    // })
    

