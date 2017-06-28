TweenMax.staggerFrom(".box", 1, {opacity: 0, delay: 0.5, scale: 0, ease: Back.easeOut}, 0.1);


var wrow = $(".wrow");

TweenLite.from(info, 1, {y: 712, ease:Quart.easeInOut});
TweenLite.from(infoin, 1, {y: 672, scale:0.1, ease:Quart.easeInOut});

TweenLite.from(wrow, 1.5, {
    backgroundPosition: "0px 0px",
    backgroundSize: "110%",
    ease:Quart.easeInOut});


// a1 = TweenMax.to(".a", 1.7, {
//     ease: Power4.easeInOut,
//     left: 0,
//     backgroundColor: "#42A5F5",
// })
//
// a2 = TweenMax.to(".a", 2, {
//     ease: Power4.easeInOut,
//     borderRight: 0,
// })
//
// b1 = TweenMax.to(".b", 2, {
//     ease: Power4.easeInOut,
//     right: 0,
//     backgroundColor: "#FF9800",
// })
//
// b2 = TweenMax.to(".b", 2.3, {
//     ease: Power4.easeInOut,
//     borderLeft: 0,
// })
//
//

//
// function reverse() {
//     TweenMax.staggerTo(".box", 0.1, {opacity: 0, scale: 2}, 0.1)
//     a1.reverse()
//     a2.reverse()
//     b1.reverse()
//     b2.reverse()
// }