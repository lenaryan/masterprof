$('.schemes__img-small').click(function() {
    $('.schemes__img-smdn').removeClass('schemes__img-smdn').slideDown();
    $(this).slideUp().addClass('schemes__img-smdn');
    var className = $(this).data('class');
    $('.schemes__img-big').each(function() {
        if ($(this).hasClass(className)) {
            $(this).removeClass('schemes__img-bigdn').slideDown();
        } else {
            $(this).slideUp().addClass('schemes__img-bigdn');
        }
        
    });
});