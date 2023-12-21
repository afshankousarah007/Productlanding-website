$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-time');
        $('.navbar').toggleClass('nav-toggle'); // Corrected typo in 'toggleClass'
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times'); // Corrected class name
        $('.navbar').removeClass('nav-toggle'); // Corrected typo in 'removeClass'

        $('section').each(function () {

            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if (top >= offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    $('.accordion-heading').click(function () {
        $('.accordion .accordation-content').slideUp();
        $(this).next('.accordation-content').slideDown();
    });
});
