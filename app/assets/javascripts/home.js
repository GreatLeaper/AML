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
    play: 6000,
    effect: 'fade',
    crossfade: true
  });

});
