function loco() {
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();

var btn1 = document.querySelector("#button1 .first")
var btn2 = document.querySelector("#button1 .second")
var first = document.querySelector(".first");
var second = document.querySelector(".second");

btn1.addEventListener("mouseenter",function (params) {
  first.style.backgroundColor = "#61FCFF "
  first.style.color = "#010DBF" 

})
btn1.addEventListener("click",function (params) {
  contactP.style.display = "block"
    page0.style.display = "none"
   page1.style.display = "none"
})
btn1.addEventListener("mouseleave",function (params) {
  first.style.backgroundColor = "transparent" 
  first.style.color = "white" 

})
btn2.addEventListener("mouseenter",function (params) {
  second.style.backgroundColor = "#61FCFF "
  second.style.color = "#010DBF" 
})
btn2.addEventListener("mouseleave",function (params) {
  second.style.backgroundColor = "transparent" 
  second.style.color = "white" 

})


var btn3 = document.querySelector("#button0 .first0")
var btn4 = document.querySelector("#button0 .second0")
var first0 = document.querySelector(".first0");
var second0 = document.querySelector(".second0");

btn3.addEventListener("mouseenter",function (params) {
  first0.style.backgroundColor = "#61FCFF "
  first0.style.color = "#010DBF" 
})

btn3.addEventListener("mouseleave",function (params) {
  first0.style.backgroundColor = "transparent" 
  first0.style.color = "white" 

})
btn4.addEventListener("mouseenter",function (params) {
  second0.style.backgroundColor = "#61FCFF "
  second0.style.color = "#010DBF" 
})
btn4.addEventListener("mouseleave",function (params) {
  second0.style.backgroundColor = "transparent" 
  second0.style.color = "white" 

})

btn3.addEventListener("click",function (params) {
    contactP.style.display = "block"
    page0.style.display = "none"
   page1.style.display = "none"
})



var page1 = document.querySelector("#page1");
var page0 = document.querySelector("#ex-page");

second.addEventListener("click",function () {
   page0.style.display = "block"
   page1.style.display = "none"
})
second0.addEventListener("click",function (event) {
   page0.style.display = "none"
   page1.style.display = "block"
})

// var clutter = "";

// document.querySelector("#text1 h1").textContent.split("").forEach(function (dets) {
//    clutter += `<span> ${dets} </span>`
//    document.querySelector("#text1 h1").innerHTML = clutter
// })

gsap.from("#text1 h1",{
    y:-50,
    opacity:1,
    stagger:0.3,
    delay:1,
    // duration:2

})

var btn5 = document.querySelector("#button-c .first-c")
var btn6 = document.querySelector("#button-c .second-c")
var firstc = document.querySelector(".first-c");
var secondc = document.querySelector(".second-c");

btn5.addEventListener("mouseenter",function (params) {
  firstc.style.backgroundColor = "#61FCFF "
  firstc.style.color = "#010DBF" 
})
btn5.addEventListener("mouseleave",function (params) {
  firstc.style.backgroundColor = "transparent" 
  firstc.style.color = "white" 

})
btn6.addEventListener("mouseenter",function (params) {
  secondc.style.backgroundColor = "#61FCFF "
  secondc.style.color = "#010DBF" 
})
btn6.addEventListener("mouseleave",function (params) {
  secondc.style.backgroundColor = "transparent" 
  secondc.style.color = "white" 

})

var page1 = document.querySelector("#page1");
var contactP = document.querySelector("#contact-page");

firstc.addEventListener("click",function () {
   contactP.style.display = "block"
   page1.style.display = "none"
   page0.style.display = "none"
})
secondc.addEventListener("click",function (event) {
  contactP.style.display = "none"
   page0.style.display = "none"
   page1.style.display = "block"
})

gsap.to("#page2 h1",{
  top:100,
  y:100,
  opacity:1,
  stagger:0.3,
  delay:1,
  // duration:2
  scrollTrigger:{
     trigger:"#page2 h1",
     scroller:"#main",
     scrub:true,
    //  markers:true,
     start:"top 60%",
     end:"bottom 60%"
  }
})

gsap.to("#card0",{
  y:100,
  top:100,
  opacity:1,
  stragger:0.3,
  delay:1,
  // duration:1,
  scrollTrigger:{
    trigger:"#card0",
    scroller:"#main",
    scrub:true,
    start:"top 80%",
    end:"top 65%",
    // markers:true
  }
})
gsap.to(".font",{
  y:-100,
  // top:0,
  opacity:1,
  stragger:0.3,
  delay:0.5,
  scrollTrigger:{
    trigger:".font",
    scroller:"#main",
    scrub:true,
    start:"top 92%",
    end:"top 82%",
    // markers:true
  }
})
gsap.to("#card1",{
  y:100,
  top:100,
  opacity:1,
  stragger:0.3,
  delay:1,
  // duration:1,
  scrollTrigger:{
    trigger:"#card1",
    scroller:"#main",
    scrub:true,
    start:"top 80%",
    end:"top 60%",
    // markers:true

  }
})
gsap.to(".font1",{
  y:-100,
  // top:0,
  opacity:1,
  stragger:0.3,
  delay:0.5,
  scrollTrigger:{
    trigger:".font1",
    scroller:"#main",
    scrub:true,
    start:"top 92%",
    end:"top 82%",
    // markers:true
  }
})

gsap.to("#page5 h1",{
  top:10,
  y:100,
  opacity:1,
  stagger:0.3,
  delay:1,
  // duration:2
  scrollTrigger:{
     trigger:"#page5 h1",
     scroller:"#main",
     scrub:true,
    //  markers:true,
     start:"top 60%",
     end:"bottom 60%"
  }
})

gsap.to("#card2",{
  y:100,
  top:100,
  opacity:1,
  stragger:0.3,
  delay:1,
  // duration:1,
  scrollTrigger:{
    trigger:"#card2",
    scroller:"#main",
    scrub:true,
    start:"top 80%",
    end:"top 60%",
    // markers:true

  }
})
gsap.to(".font2",{
  y:-100,
  // top:0,
  opacity:1,
  stragger:0.3,
  delay:0.5,
  scrollTrigger:{
    trigger:".font2",
    scroller:"#main",
    scrub:true,
    start:"top 92%",
    end:"top 82%",
    // markers:true
  }
})
gsap.to("#card3",{
  y:100,
  top:100,
  opacity:1,
  stragger:0.3,
  delay:1,
  // duration:1,
  scrollTrigger:{
    trigger:"#card3",
    scroller:"#main",
    scrub:true,
    start:"top 80%",
    end:"top 60%",
    // markers:true

  }
})
gsap.to(".font3",{
  y:-100,
  // top:0,
  opacity:1,
  stragger:0.3,
  delay:0.5,
  scrollTrigger:{
    trigger:".font3",
    scroller:"#main",
    scrub:true,
    start:"top 92%",
    end:"top 82%",
    // markers:true
  }
})
