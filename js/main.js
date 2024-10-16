// slider 1
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#slider1', {
        type: 'loop',
        perPage: 6,
        speed: 7000,
        autoplay: true,
        pagination: false, // Set to true if you want pagination
        arrows: true,  // Set to false if you don't want arrows
        breakpoints: {
            1399: { perPage: 5 },
            1199: { perPage: 4 },

            640: { gap: 0 },
        },

    });

    splide.mount();
});

// slider 2 


document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#slider2', {
        type: 'loop',
        perPage: 3,
        speed: 3000,
        autoplay: true,
        pagination: false, // Set to true if you want pagination
        arrows: true,  // Set to false if you don't want arrows
        breakpoints: {
            1399: { perPage: 2 },
            640: { gap: 0 },
        },

    });

    splide.mount();


});

// slider 3 

document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#slider3', {
        type: 'slide',
        direction: 'ttb',
        perPage: 3,
        autoplay: true,
        pagination: false, // Set to true if you want pagination
        arrows: true,  // Set to false if you don't want arrows
        wheel: true,
        gap: '5px',
        height: '580px',
        width: '463px',
        speed: 3000,
        arrows: false,
    });
    splide.mount();

    document.getElementById('prev').addEventListener('click', function () {
        splide.go('<'); // Navigate to previous slide
    });

    document.getElementById('next').addEventListener('click', function () {
        splide.go('>'); // Navigate to next slide
    });
});


// slider4 
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#slider4', {
        type: 'slide',
        perPage: 1,
        autoplay: true,
        pagination: false, // Set to true if you want pagination
        wheel: true,
        gap: '5px',
        height: '580px',
        width: '463px',
        speed: 3000,
        arrows: false,
    });
    splide.mount();

    document.getElementById('prev2').addEventListener('click', function () {
        splide.go('<'); // Navigate to previous slide
    });

    document.getElementById('next2').addEventListener('click', function () {
        splide.go('>'); // Navigate to next slide
    });
});





