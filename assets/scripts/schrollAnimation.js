// $(document).ready(function() {
//     $('.animate-on-scroll').waypoint(function() {
//         $(this.element).addClass('animate__animated animate__fadeIn'); // Add Animate.css animation classes
//     }, {
//         offset: '75%' // Trigger when the element is 75% from the top of the viewport
//     });
// });


// $(document).ready(function() {
//     $('.animate-on-scroll').waypoint(function(direction) {
//         if (direction === 'down') {
//             $(this.element).addClass('animate__animated animate__fadeIn');
//         } else {
//             $(this.element).removeClass('animate__animated animate__fadeIn');
//         }
//     }, {
//         offset: '75%'
//     });
// });

$(document).ready(function() {
    // Animate left container on scroll
    $('.left-container').waypoint(function() {
        $(this.element).addClass('animate__animated animate__fadeInLeft');
    }, {
        offset: '75%' // Trigger animation when element is 75% from top of viewport
    });
    $('.service-container').waypoint(function() {
        $(this.element).addClass('animate__animated animate__fadeInLeft');
    }, {
        offset: '75%' // Trigger animation when element is 75% from top of viewport
    });
    $('.review-container-left').waypoint(function() {
        $(this.element).addClass('animate__animated animate__fadeInLeft');
    }, {
        offset: '75%' // Trigger animation when element is 75% from top of viewport
    });

    // Animate right container on scroll
    $('.right-container').waypoint(function() {
        $(this.element).addClass('animate__animated animate__fadeInRight');
    }, {
        offset: '75%'
    });
    $('.review-container-right').waypoint(function() {
        $(this.element).addClass('animate__animated animate__fadeInRight');
    }, {
        offset: '75%'
    });
    $('.project-container').waypoint(function() {
        $(this.element).addClass('animate__animated animate__fadeInRight');
    }, {
        offset: '75%'
    });
    $('.review-container-down').waypoint(function() {
        $(this.element).addClass('animate__animated animate__fadeInDown');
    }, {
        offset: '75%'
    });
    $('.contact-us-top').waypoint(function() {
        $(this.element).addClass('animate__animated animate__fadeInDown');
    }, {
        offset: '75%'
    });
});
