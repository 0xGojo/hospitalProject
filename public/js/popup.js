jQuery(document).ready(function ($) {
    $('.button-delete').on('click', function (event) {
        event.preventDefault();
        $('.cd-popup').addClass('is-visible');
        $('.doDeletion').attr("href", "/admin/adminContact/"+ event.target.id);
        console.log("/admin/adminContact/"+ event.target.id);
    });

    $('.error').on('click', function (event) {
        event.preventDefault();
        $('.cd-popup').removeClass('is-visible');
    });
    $(document).keyup(function (event) {
        if (event.which == '27') {
            $('.cd-popup').removeClass('is-visible');
        }
    });
})