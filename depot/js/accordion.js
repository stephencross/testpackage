(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.accordionMobileDesktop = {
    attach: function (context, settings) {
      if (window.matchMedia("(max-width: 1040px)").matches) { // If media query matches

        $(context).find("#b-sidebar").attr("aria-expanded", "false");
      }
    },
  }
})(jQuery, Drupal);


