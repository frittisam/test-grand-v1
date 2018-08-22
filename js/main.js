$(document).ready(function () {
    var trigger = $('.hamburger'),
        // overlay = $('.overlay'),
        isClosed = false;

    trigger.click(function () {
        hamburger_cross();
    });

    function hamburger_cross() {

        if (isClosed == false) {
            // overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = true;
        } else {
            // overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = false;
        }
    }

    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
    });


    var mediaquery = window.matchMedia("(max-width: 600px)");
    if (mediaquery.matches) {
        // mediaquery es 600

        // aquí declaramos que en celular el wrapper empieze cerrado
        $('#wrapper').removeClass('toggled');

        //redefinir función para que se lean correctamente
        function hamburger_cross() {

            if (isClosed == true) {
                // overlay.hide();
                trigger.removeClass('is-open');
                trigger.addClass('is-closed');
                isClosed = false;
            } else {
                // overlay.show();
                trigger.removeClass('is-closed');
                trigger.addClass('is-open');
                isClosed = true;
            }
        }


    } else {
        // mediaquery no es 600
    }
    

});

// on page load...
    moveProgressBar();
    // on browser resize...
    $(window).resize(function() {
        moveProgressBar();
    });

    // SIGNATURE PROGRESS
    function moveProgressBar() {
      console.log("moveProgressBar");
        var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
        var getProgressWrapWidth = $('.progress-wrap').width();
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = 2500;
        
        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
        $('.progress-bar').stop().animate({
            left: progressTotal
        }, animationLength);
    }

// on page load...
    moveProgressBar2();
    // on browser resize...
    $(window).resize(function() {
        moveProgressBar2();
    });

    // SIGNATURE PROGRESS
    function moveProgressBar2() {
      console.log("moveProgressBar2");
        var getPercent = ($('.progress2-wrap').data('progress-percent') / 100);
        var getProgressWrapWidth = $('.progress2-wrap').width();
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = 2500;
        
        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
        $('.progress2-bar').stop().animate({
            left: progressTotal
        }, animationLength);
    }

