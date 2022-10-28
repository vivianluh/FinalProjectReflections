gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin)

// gsap.to(".life-buoy-image", {
//     x: 200,
//     y: -20,
//     duration: 3,
//     scrollTrigger: {
//         trigger: ".life-buoy-image",
//         start: "top center", //when the top of the life buoy image hits the center of the viewport (scrollbar) it will start.
//         scrub: 1,
//         toggleActions: "play none none none",
//         //play pause resume reverse restart reset complete none
//                        //onEnter   //onLeave    //onEnterBack    //onLeaveBack
//         pin: ".introductory", //if you want to pin the page, you need to pin a container element
//         markers: true,   
//     }
// })

// let tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".life-buoy-image",
//         start: "top center",
//         scrub: 1,
//         toggleActions: "play none none none",
//         pin: ".introductory",
//         markers: true,
//     }
// });

// tl.to(".life-buoy-image", {x: 200, y: -20, rotation: 50, duration: 1})
//   .to(".life-buoy-image", {x: 300, y: 10, rotation: 60, duration: 1})
//   .to(".life-buoy-image", {x: 500, y: 50, duration: 1})

let lifebuoypath =   [
    {x: 10, y: -20}, 
    {x: 300, y: 10}, 
    {x: 500, y: 50}, 
    {x: 750, y: -50}, 
    {x: 800, y: -25},
    {x: 650, y: 100}, 
    {x: 800, y: -100}, 
    {x: 900, y: 0},  
    {x: window.innerWidth, y: -350}, 
]

let tl = gsap.timeline({
    scrollTrigger: {
        scrub: 1,
        pin: ".introductory",
    }
});

tl.to(".life-buoy-image", {
    motionPath:{
        path: lifebuoypath,
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    }
})


//MAP ANIMATIONS
gsap.to(".sphereicon img", {
    x: 500,
    duration: 0.1,
    scrollTrigger: {
        trigger: ".sphereicon img",
        start: "top bottom",
        scrub: 1,
        // markers: true
  
    }
})

gsap.to(".lawnicon img", {
    x: -500,
    duration: 0.1,
    scrollTrigger: {
        trigger: ".lawnicon img",
        start: "top bottom",
        scrub: 1,
        // markers: true,
    }
})

gsap.to(".raticon img", {
    x: 500,
    duration: 0.1,
    scrollTrigger: {
        trigger: ".raticon img",
        start: "top bottom",
        scrub: 1,
        // markers: true,
    }
})

gsap.to(".flowicon img", {
    x: -500,
    duration: 0.1,
    scrollTrigger: {
        trigger: ".flowicon img",
        start: "top bottom",
        scrub: 1,
        // markers: true,
    }
})

gsap.to(".promiseicon img", {
    x: 500,
    duration: 0.1,
    scrollTrigger: {
        trigger: ".promiseicon img",
        start: "top bottom",
        scrub: 1,
        // markers: true,
    }
})

gsap.to(".joyicon img", {
    x: -500,
    duration: 0.1,
    scrollTrigger: {
        trigger: ".promiseicon img",
        start: "top bottom",
        scrub: 1,
        // markers: true,
    }
})










