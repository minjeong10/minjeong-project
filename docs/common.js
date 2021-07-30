gsap.from('.img-1', {
  ease: Expo.easeIn,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:'.img-1',
    start:'0 90%'
  }
});