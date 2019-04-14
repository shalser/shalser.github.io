var btn = $('.container-button'),
    modal = $('#overlay');

btn.on('click', function() {

    $('#title').text($(this).find('.text').text());
    $('#overlay-text').text($(this).find('.text').text());

    if (screen.width <= 1400 || $(document).width() <= 1400) {
        modal.fadeIn();
    }
});
    
// close modal
$('#popup-close').click(function() {

    modal.fadeOut();
});

$(document).ready(function(){

});

