//======== Header ======//

//Parametrs
let activeElement = 0;
const timeChange = 4000;
// Call four elements
const colorImgHtml = document.querySelector('.color');
const grayImgHtml = document.querySelector('.gray');
const h1Html = document.querySelector('.member h1');
const h2Html = document.querySelector('.member h2');

//Swap Arrays
const colorImages = ['img/s1.png', 'img/s2.png'];
const grayImages = ['img/s1a.png', 'img/s2a.png'];
const names = ['Hi,', 'I like making things '];
const professions = ['I’m Pawel', 'and meeting new people'];

function changeElement() {
    console.log("automatyczne wwywołanie")
    activeElement++;
    if (activeElement == colorImages.length) {
        activeElement = 0;
    }
    colorImgHtml.src = colorImages[activeElement];
    grayImgHtml.src = grayImages[activeElement];
    h1Html.textContent = names[activeElement];
    h2Html.textContent = professions[activeElement];

}

setInterval(changeElement, timeChange)

//======== End Header ======//

$(document).ready(function () {
    $('.blog-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 9000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 1280,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 720,
            settings: {
                slidesToShow: 1
            }
        }]
    });

});

// $('.blog-wrapper').slick({
//     arrows: false
// })
//------ Arrows set up-------//

$('.left').click(function () {
    $('.blog-wrapper').slick('slickPrev');
})

$('.right').click(function () {
    $('.blog-wrapper').slick('slickNext');
})

//========End Blog slider ======//

//========Methods ======//