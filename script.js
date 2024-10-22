a = document.querySelector("#navcontent");
b = document.querySelector("#menu-content");
c = document.querySelector("#menu-content #close");
a.addEventListener("click", function () {
  b.style.right = 0;
  b.style.transition = "all ease-in-out .4s";
});

c.addEventListener("click", function () {
  console.log("ok ji ok");
  b.style.right = "-50%";
});

var tl = gsap.timeline();

tl.from("nav", {
  opacity: 0,
  duration: 0.8,
  blur: 100,
  delay: 0.5,
});

tl.from("nav #logo", {
  opacity: 0,
  duration: 0.5,
  y: -20,
});
tl.from("nav #navcontent", {
  opacity: 0,
  duration: 0.5,
  y: -20,
});
tl.from("#home video", {
  duration: 1,
  opacity: 0,
});
tl.from("#home #title h1", {
  duration: 0.8,
  y: 400,
  opacity: 0.8,
});
tl.from("#home #title-head", {
  duration: 0.8,
  opacity: 0,
});
tl.from("#home #Contact-btn", {
  duration: 0.2,
  opacity: 0,
});
tl.to("#home #Contact-btn", {
  duration: 0.2,
  opacity: 1,
});
tl.from("#icons", {
  duration: 0.2,
  opacity: 0,
  x: 50,
});

gsap.from("#about #right-content", {
  opacity: 0,
  duration: 2,
  x: -300,
  ease: "ease-in",
  scrollTrigger: {
    trigger: "#about #right-content",
    start: "top 40%",
    end: "bottom 90%",
    // markers:true,
    scrub: true,
  },
});
gsap.from("#about #left-content", {
  opacity: 0,
  duration: 2,
  x: 300,
  ease: "ease-in",
  scrollTrigger: {
    trigger: "#about",
    start: "top 40%",
    end: "bottom 90%",
    // markers:true,
    scrub: true,
  },
});
gsap.from("#boxes .box", {
  opacity: 0,
  duration: 2,
  y: 300,
  ease: "ease-in",
  scrollTrigger: {
    trigger: "#boxes",
    start: "top 40%",
    end: "bottom 90%",
    // markers:true,
    scrub: true,
  },
});

gsap.from("#services #boxes-service .service", {
  opacity: 0,
  duration: 2,
  y: 300,
  ease: "ease-in",
  scrollTrigger: {
    trigger: "#services #boxes-service",
    start: "top 40%",
    end: "bottom 90%",
    // markers:true,
    scrub: true,
  },
});
