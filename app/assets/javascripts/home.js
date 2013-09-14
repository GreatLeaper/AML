$(document).ready(function(){

  // Start the slider carousel on the home page
  $("#slides-home").slides({
    play: 8000,
    pause: 5000,
    effect: 'fade',
    crossfade: true
  });

  // Start the slider carousel on Tom's page
  $("#slides-tom").slides({
    play: 8000,
    effect: 'fade',
    fadeSpeed: 1800
  });

  // Start the slider carousels on the lure design page.
  $("#slides-lure").slides({
    play: 0000,
    effect: 'slide'
  });

  // Start the slider carousel on Tom's page
  $("#slides-color").slides({
    play: 0000,
    effect: 'slide'
  });

});
