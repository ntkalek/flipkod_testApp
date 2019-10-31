(function(){

    'use strict';

    var $projects = $('.js-gallery__projects');

    $projects.isotope({
        itemSelector: '.js-gallery__item',
        layoutMode: 'fitRows'

    });

    // Gallery set active/non active classes

    $('.js-gallery__filters > li').on('click', function(e){
        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('.js-gallery__filters > li').removeClass('active');
        $(this).addClass('active');

        $projects.isotope({filter: filter});
    });

    // gallery hover effect

    $('.js-gallery__card').mouseenter(function(){
        $(this).find('.js-gallery__card-overlay').css({'top': '-100%'});
        $(this).find('.js-gallery__card-hover').css({'top': '0'});

    }).mouseleave(function(){
        $(this).find('.js-gallery__card-overlay').css({'top': '0%'});
        $(this).find('.js-gallery__card-hover').css({'top': '-100%'});
    });

    // search submit on enter btn

  $('.js-enter-submit').keypress(function(e) {
    e.preventDefault();

    if (event.keyCode == 13) {
      this.form.submit();
      return false;
    }

  });

})(jQuery);