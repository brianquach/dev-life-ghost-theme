/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function($, undefined) {
    'use strict';

    const $document = $(document);

    $document.ready(function() {
        const $postContent = $('.post-content');
        $postContent.fitVids();

        $('.scroll-down').arctic_scroll();

        $('.menu-button, .nav-cover, .nav-close').on('click', function(e) {
            e.preventDefault();
            $('body').toggleClass('nav-opened nav-closed');
        });
    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function(options) {
        const defaults = {
            elem: this,
            $elem: $(this),
            speed: 500,
        };
        const allOptions = $.extend(defaults, options);

        allOptions.elem.click(function(event) {
            const el = defaults.elem;
            const $this = defaults.$elem;
            const $htmlBody = $('html, body');
            const offset = ($this.attr('data-offset'))
                ? $this.attr('data-offset')
                : false;
            const position = ($this.attr('data-position'))
                ? $this.attr('data-position')
                : false;
            let toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate(
                  {scrollTop: ($(el.hash).offset().top + toMove)},
                  allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate(
                  {scrollTop: toMove}, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate(
                  {scrollTop: ($(el.hash).offset().top)}, allOptions.speed);
            }
        });
      };
})(jQuery);
