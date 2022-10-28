gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(MotionPathPlugin)

//ANIMATION OF IMAGE SWAP
gsap.utils.toArray(".comparisonSection").forEach(section => {
	let tl = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: "center center",
        // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
				end: () => "+=" + section.offsetWidth, 
				scrub: true,
				pin: true,
        anticipatePin: 1
			},
			defaults: {ease: "none"}
		});
	// animate the container one way...
	tl.fromTo(section.querySelector(".afterImage"), { xPercent: 100, x: 0}, {xPercent: 0})
	  // ...and the image the opposite way (at the same time)
	  .fromTo(section.querySelector(".afterImage img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0);
});



//ANIMATION OF LIFE RAFT
let animation;

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

gsap.set(".life-raft-sphere img", { scale: 1.2, autoAlpha: 1 });
gsap.set(".life-raft-sphere img", {transformOrigin: "50% 50%"});

animation = gsap.to(".life-raft-sphere img", {
  scrollTrigger: {
    trigger: "#motionPath",
    start: "top 20%",
    scrub: 1,
    pin: ".linesvg",
    // markers: true,
  },

  duration: 10,
  ease: "none",
  immediateRender: true,
  motionPath: {
    path: "#motionPath",
    align: "#motionPath",
    alignOrigin: [0.5, 0.5],
    autoRotate: 90,
  }
});





