window.portfolio = function () {
   
    $container = $('#container');
    $container.isotope({
        // options
        itemSelector: '.item',
        layoutMode: 'cellsByRow',
        cellsByRow: {
            columnWidth: 295,
            rowHeight: 295
        }
    });

    $('.fancybox').fancybox({
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
}


$(document).ready(function () {

    $(document).on('mouseenter', '.item-list li', function () {
        $(this).find($('.item-list .hover')).stop(true, true).fadeIn(600);
        return false;
    });

    $(document).on('mouseleave', '.item-list li', function () {
        $(this).find($('.item-list .hover')).stop(true, true).fadeOut(400);
        return false;
    });

    //$('.item-list li').on('mouseleave', function () {
    //    $(this).find($('.item-list .hover')).stop(true, true).fadeOut(400);
    //    return false;
    //});

    $(document).on('click', '#filters li', function () {

  //  $('#filters').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
        $("#filters li").removeClass("active");
        $(this).addClass("active");
    });

      jQuery(document).on('click', ".menu_trigger", function (e) {
        e.preventDefault()
        window.setTimeout(function() {
            if(jQuery('#nav').hasClass('clicked')){
                jQuery('#nav').stop(true,true).animate({height:'hide'},100);
                jQuery('#nav').removeClass('clicked');
            }else{
                jQuery('#nav').stop(true,true).animate({height:'show'},400);
                jQuery('#nav').addClass('clicked');
            }
        }, 400);
        return false;
    });
    jQuery("#nav").on('click', '.drops', function () {
        if (jQuery(this).hasClass("active")) {
            jQuery(this).removeClass("active").parent().next().slideUp();
        } else {
            jQuery(this).addClass("active").parent().next().slideDown();
        }
        return false;
    });
}); 
$(window).resize(function() {
    if($(document).width() > 768){
      $( "#nav" ).addClass("active");
      $( "#nav ul" ).attr('style','');
      $( "#nav" ).attr('style','');
      $( "#nav" ).removeClass("clicked");
      $( "#nav .active" ).removeClass('active');
    }
    else {
        $( "#nav" ).removeClass("active");
    }
});