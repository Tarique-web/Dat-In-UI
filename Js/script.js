

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 2000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
// ---------------------
$(document).ready(function () {
    $('.swipe_life_sec').waypoint(function (direction) {
        if (direction == "down") {
            $('.header_sec').addClass('sticky')
            $('.header_sec').removeClass('header_sticky_shadow')
            $('.header_sec').addClass('header__shadow__sec')
            $('.datum_logo_black').removeClass("d-none")

        }
        else {
            $('.header_sec').removeClass('sticky');
            $('.header_sec').removeClass('header__shadow__sec')

            $('.header_sec').addClass('header_sticky_shadow')
            $('.datum_logo_black').addClass("d-none")




        }
    }, {
        offset: '60px;'
    });
})