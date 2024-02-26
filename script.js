var crsr = document.querySelector('#cursor')
var crsrBlur = document.querySelector('#cursor-blur')

document.addEventListener("mousemove", function (dets) {
    // console.log('hey')
    // console.log(dets)
    // console.log(dets.x)
    crsr.style.left = dets.x + 15    + "px";
    crsr.style.top = dets.y  + 15 + "px";
    
    crsrBlur.style.left = dets.x -160 + "px";
    crsrBlur.style.top = dets.y -160 + "px";
})

var navAllBtn = document.querySelectorAll('#nav h4');
console.log(navAllBtn);

navAllBtn.forEach(function (elem) {
    // console.log(elem)
    elem.addEventListener('mouseenter', function () {
        crsr.style.scale = '3';
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
})

var nav = document.querySelector('#nav');
console.log(nav.children);
nav.addEventListener('mouseleave', function(){
    crsr.style.scale = 1;
    crsr.style.border = "none";
    crsr.style.backgroundColor = "lawngreen"
})

gsap.to('#nav', {
    backgroundColor: '#000',
    duration: 0.5,
    height: '6.8rem',
    scrollTrigger: {
        trigger: '#nav',
        scroller: 'body',
        markers: false,
        start: "top -10%",
        end: "top -11%",
        scrub: 2
    }
})

gsap.to('#main', {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: '#main',
        scroller: "body",
        markers: false,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.to('#about-us img, #about-us-in', {
    // backgroundColor: 'teal',
    y: 90,
    opacity: 1,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: '#about-us',
        scroller: 'body',
        markers: false,
        start: "top 50%",
        end:   "top 55%",
        scrub: 3
    }
} )

gsap.to('.card', {
    y: 90,
    opacity: 1,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: '.card',
        scroller: 'body',
        markers: false,
        start: "top 60%",
        end:   "top 55%",
        scrub: 5
    }
})

gsap.to('#colon-1', {
    x: 90,
    y: 30,
    duration: 1,
    scrollTrigger: {
        trigger: '#colon-1',
        scroller: 'body',
        markers: false,
        start: 'top 45%',
        end:   'top 40%',
        scrub: 5
    }
})

gsap.to('#colon-2', {
    x: -90,
    y: -30,
    duration: 1,
    scrollTrigger: {
        trigger: '#colon-2',
        scroller: 'body',
        markers: false,
        start: 'top 90%',
        end:   'top 85%',
        scrub: 5
    }
})


