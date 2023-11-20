document.addEventListener('DOMContentLoaded', function () {
  var controller = new ScrollMagic.Controller();

  // Create a scene for each section
  document.querySelectorAll('.section').forEach(function (section) {
    new ScrollMagic.Scene({
      triggerElement: section,
      triggerHook: 0.8, // Change this value to adjust when the animation starts
      reverse: false
    })
    .setClassToggle(section, 'visible') // Add a class when section enters the viewport
    .addTo(controller);
  });
});

