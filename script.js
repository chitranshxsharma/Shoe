var a = gsap.timeline();
a.to("#loader img", {
    scale: 1.5,
    duration: 1.2,
    opacity: 1,
})
a.to("#loader", {
    bottom: 1000,  //upper
    duration: 1.5,
    opacity: 1,
})
a.from("#nav", {
    top: -100,
    duration: .8,
    opacity: 1,
})
a.from("#right", {
    x: 1000,
    opacity: 1,
})
a.from("#text h3", {
    x: -1000,
    opacity: 1,
})
a.from("#text h1", {
    x: -1000,
    opacity: 1,
})
a.from("#text #rating", {
    x: -1000,
    opacity: 1,
})
a.from("#text p", {
    x: -1000,
    opacity: 1,
})
a.from("#text button", {
    x: -1000,
    opacity: 1,
})
a.from("#bottom", {
    y: -100,
    duration: 1.5,
    opacity: 0,
    ease: "bounce.out",

})
gsap.from("#center img", {
    x: -800,
    opacity: 0,
    duration: 2,
    delay: 4,
    rotate: 180,
})
gsap.from("#main>h1", {
    x: 300,
    opacity: 0,
    duration: 2,
    delay: 2,
})










