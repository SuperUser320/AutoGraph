$(document).ready(function () {
    'use strict';

    /* Global variables */
    var divs = $('#intro'), limit = 0 * $(window).height() / 2, window_height = $(document).height();

    /* On-load fade-in */
    $('.fadein').each(function (i) {
      $(this).css({'opacity': '1', 'transform': 'translateY(0px)'}, 750);
    });
});
