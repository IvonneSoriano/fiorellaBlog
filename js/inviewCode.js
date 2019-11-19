$(document).ready(function () {

    $('.titles hr').on('inview', function (event, isInView) {
        if (isInView) {
            $(this).css('opacity', '1');
        }
        else {
            $(this).css('opacity', '0');
        }
    });
    $('.btn-container').on('inview', function (event, isInView) {
        if (isInView) {
            $(this).addClass('active');
        }
        else {
            $(this).removeClass('active');
        }
    });
});