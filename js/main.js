// slider 1
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#slider1', {
        type: 'slide',
        perPage: 6,
        autoplay: true,
        pagination: false, // Set to true if you want pagination
        wheel: true,
        speed: 3000,
        arrows: false,
        breakpoints: {
            1399: { perPage: 5, },
            1199: { perPage: 4, },
            991: { perPage: 3, },
            767: { perPage: 2, },


        },
    });
    splide.mount();

    document.getElementById('sliderprev1').addEventListener('click', function () {
        splide.go('<'); // Navigate to previous slide
    });

    document.getElementById('slidernext1').addEventListener('click', function () {
        splide.go('>'); // Navigate to next slide
    });
});
// slider 1 end

// slider 2
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#slider2', {
        type: 'slide',
        direction: 'horizontal',
        perPage: 3,
        autoplay: true,
        pagination: false, // Set to true if you want pagination
        wheel: true,
        speed: 3000,
        arrows: false,
        breakpoints: {
            1399: { perPage: 2, },
            991: { pagination: true, },
            767: { perPage: 1, },


        },
    });
    splide.mount();

    document.getElementById('sliderprev2').addEventListener('click', function () {
        splide.go('<'); // Navigate to previous slide
    });

    document.getElementById('slidernext2').addEventListener('click', function () {
        splide.go('>'); // Navigate to next slide
    });
});
// slider 2 end

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

    document.getElementById('sliderprev3').addEventListener('click', function () {
        splide.go('<'); // Navigate to previous slide
    });

    document.getElementById('slidernext3').addEventListener('click', function () {
        splide.go('>'); // Navigate to next slide
    });
});

// slider 3 end


// slider4
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#slider4', {
        type: 'slide',
        perPage: 1,
        autoplay: true,
        pagination: false,
        wheel: true,
        gap: '5px',
        height: '580px',
        width: '463px',
        speed: 3000,
        arrows: false,
        breakpoints: {
            991: { pagination: true, },
        },
    });
    splide.mount();

    document.getElementById('prev4').addEventListener('click', function () {
        splide.go('<'); // Navigate to previous slide
    });

    document.getElementById('next4').addEventListener('click', function () {
        splide.go('>'); // Navigate to next slide
    });
});
// slider 4 end


// slider 5

document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#slider5', {
        type: 'loop',
        perPage: 5,
        perMove: 1,
        autoplay: false,
        speed: 10000,
        arrows: false,
        pagination: false,
        breakpoints: {
            1399: { perPage: 4, },
            1199: { perPage: 3, },
            991: { perPage: 2, },
        },
    });
    splide.mount();

    document.getElementById('sliderprev5').addEventListener('click', function () {
        splide.go('<'); // Navigate to previous slide
    });

    document.getElementById('slidernext5').addEventListener('click', function () {
        splide.go('>'); // Navigate to next slide
    });
});


// Countdown Timer
function countdownTimer(targetDate) {
    const timerInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(timerInterval);
            document.getElementById("countdown").innerHTML = "EXPIRED";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }, 1000);
}

const targetDate = new Date("Dec 31, 2024 23:59:59").getTime();
countdownTimer(targetDate);

window.onscroll = function () { updateScrollIndicator() };

function updateScrollIndicator() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    document.getElementById("progress-bar").style.width = scrollPercent + "%";
}








