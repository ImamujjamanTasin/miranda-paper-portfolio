const scroll = new LocomotiveScroll({
    el: document.querySelector('#wrapper'),
    smooth: true
});

var timeLine = gsap.timeline()
timeLine.to("#page-1" ,{
    y:"100vh",
    scale:0.6,
    duration:1
})
timeLine.to("#page-1",{
    y:"30vh",
    duration:1,
})
timeLine.to("#page-1",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.8
})
