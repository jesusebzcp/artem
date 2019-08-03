$('.uno')
    .prop('number', 1)
    .animateNumber({
            number: 10
        },
        2000
    );
$('.dos')
    .prop('number', 1)
    .animateNumber({
            number: 365
        },
        2000
    );
var percent_number_step = $.animateNumber.numberStepFactories.append(' %');
$('#fun-level').animateNumber({
    number: 110,

    'font-size': '40px',

    numberStep: percent_number_step
}, {
    easing: 'swing',
    duration: 10000
});





/* }); */

var waypoint = new Waypoint({
    element: document.getElementById('bogota'),
    handler: function(direction) {
        $('.uno')
            .prop('number', 1)
            .animateNumber({
                    number: 110
                },
                2000
            );
        $('.dos')
            .prop('number', 1)
            .animateNumber({
                    number: 365
                },
                2000
            );
        var percent_number_step = $.animateNumber.numberStepFactories.append(' %');
        $('#fun-level').animateNumber({
            number: 100,

            'font-size': '40px',

            numberStep: percent_number_step
        }, {
            easing: 'swing',
            duration: 10000
        });




    },
    offset: '75%'
});


$(document).ready(function() {
    var altura = $('.navbar').offset().top;

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > altura) {
            $('.navbar').addClass('menu-fixed');
        } else {
            $('.navbar').removeClass('menu-fixed');
        }
    });

    //delizar


});