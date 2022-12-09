/**
 * @file
 * Javascript customizations for the Gin theme.
 */

(function ($, Drupal) {
  "use strict";

  Drupal.behaviors.GinCustom = {
    attach: function attach(context) {
      $(".sticky-shadow", context).once('gin-custom').each(function() {
        const offset = $(this).outerHeight();
        const h1 = $("#toolbar-administration", context).outerHeight();
        const h2 = $(".region-sticky", context).outerHeight();
        const top = (h1 + h2 - offset) + "px";
        $(this).css("top", top);
      });
    }
  };

})(jQuery, Drupal);
