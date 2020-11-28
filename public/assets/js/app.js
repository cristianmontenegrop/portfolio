$(document).ready(() => {
  const controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      duration: 1050,
    },
  });

  new ScrollMagic.Scene({
    triggerElement: '#portfolio',
  })
    .setClassToggle('#port-nav', 'highlight') // add class toggle
    .addTo(controller);
  new ScrollMagic.Scene({
    triggerElement: '#about-me',
  })
    .setClassToggle('#about-nav', 'highlight') // add class toggle
    .addTo(controller);
  new ScrollMagic.Scene({
    triggerElement: '#contact',
  })
    .setClassToggle('#contact-nav', 'highlight') // add class toggle
    .addTo(controller);
});
