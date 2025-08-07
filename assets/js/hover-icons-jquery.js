// Hover icons using jQuery
(function ($) {
  'use strict';

  $(function () {
    // Early exit for mobile
    if (window.innerWidth <= 767) return;

    $('.chart-container').each(function (index) {
      const $container = $(this);
      const $icons = $container.find('.chart-icons-hover');
      if ($icons.length === 0) return;

      let entryX = 0;

      // Helper functions
      function showIcons() {
        // Stop ongoing animations and ensure initial state
        $icons.stop(true, true)
          .css({ opacity: 0, visibility: 'visible', transform: 'translateY(-50%) translateY(200px)' })
          // Use fadeTo for smooth opacity and let CSS transition handle transform
          .fadeTo(200, 1, function () {
            $icons.css('transform', 'translateY(-50%) translateY(0)');
          });
      }

      function hideIcons() {
        // Stop ongoing animations then hide
        $icons.stop(true, true)
          .css('transform', 'translateY(-50%) translateY(200px)')
          .fadeTo(200, 0, function () {
            $icons.css('visibility', 'hidden');
          });
      }

      // Mouse enters chart area
      $container.on('mouseenter', function (e) {
        entryX = e.clientX;
        showIcons();
      });

      // Mouse leaves chart area entirely
      $container.on('mouseleave', hideIcons);

      // Mouse moves right – hide if >150px from entry point
      $container.on('mousemove', function (e) {
        const deltaX = e.clientX - entryX;
        if (deltaX > 150) {
          hideIcons();
        }
      });
    });
  });
})(jQuery); 