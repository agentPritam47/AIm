



if(window.innerWidth>600){

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










gsap.to("#nav",{

  scrollTrigger:{
    trigger:"#page1-part1",
    scroller: "#main",
    start: "top 0",
    onEnter:function(){
      gsap.to("#nav",{
        top: "0%",
        duration:.5,
      })
    },
    onLeaveBack:function(){
      gsap.to("#nav",{
        top:"-10%"
      })
    }

  }
})











const box1 = document.getElementById("box1");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1",
    start: "top top",
    scroller:"#main",
    end: "+=450%",
    scrub: true,
  },
});

timeline.to("#box1", {
  // top: "60%",
  top: "29.9vw",
  left: "33%",
  width:"7vw",
  height:"13vw",
  rotate:-90,
  // transform: "translate(-50%,-50%)",
  duration:2
}, "anim");
timeline.to("#box3",{
  // top: "53.9%",
  top: "27vw",
  left: "38%",
  width:"7vw",
  height:"13vw",
  transform: "translate(-50%,-50%)",
  duration:2
},"anim");
timeline.to("#box2",{
  // top: "53.95%",
  top: "27vw",
  left: "43%",
  rotate: 0,
  width:"7vw",
  height:"13vw",
  // transform: "translate(-50%,-50%)",
  duration:2
},"anim");
timeline.to("#box5",{
  // top: "28%",
  top: "14vw",
  left: "50%",
  rotate:180,
  width:"7vw",
  height:"13vw",
  // transform: "translate(-50%,-50%)",
  duration:2
},"anim");
timeline.to("#box6",{
  // top: "53.95%",
  top: "27vw",
  left: "57%",
  rotate:-180,
  width:"7vw",
  height:"13vw",
  // transform: "translate(-50%,-50%)",
  duration:2
},"anim");
timeline.to("#box7",{
  // top: "53.95%",
  top: "27vw",
  left: "62%",
  rotate:180,
  width:"7vw",
  height:"13vw",
  // transform: "translate(-50%,-50%)",
  duration:2
},"anim");
timeline.to("#box4", {
  // top: "60%",
  top: "29.9vw",
  left: "67%",
  width:"7vw",
  height:"13vw",
  rotate:90,
  // transform: "translate(-50%,-50%)",
  duration:2
}, "anim");
timeline.to('.box',{
  duration: 3
})


timeline.to('#box1',{
  rotate:0,
  left:"40%",
  transform: "translate(-50%,-50%)",
  top:"27vw",
  // top:"53.9%"
},'anim2')
timeline.to("#box2",{
  left:"40%",
  transform: "translate(-50%,-50%)",

}, "anim2")
timeline.to("#box3",{
  left:"40%",
  transform: "translate(-50%,-50%)",
}, "anim2")
timeline.to("#box5",{
  left:"50%",
  // top:"53.9%",
  transform: "translate(-50%,-50%)",
  top: "27vw"
}, "anim2")
timeline.to("#box6",{
  left:"60%",
  transform: "translate(-50%,-50%)",
}, "anim2")
timeline.to("#box7",{
  left:"60%",
  transform: "translate(-50%,-50%)",
}, "anim2")
timeline.to("#box4",{
  rotate:0,
  // top:"53.9%",
  top: "27vw",
  transform: "translate(-50%,-50%)",
  left:"60%",
}, "anim2")





timeline.to("#box2",{
  display:"none",
}, "anim3")
timeline.to("#box3",{
  display:"none",
}, "anim3")
timeline.to("#box7",{
  display:"none",
}, "anim3")
timeline.to("#box4",{
  display:"none",
}, "anim3")

timeline.to("#box1",{
  transform: "translate(-50%,-50%)  scale(5)",
  left:"10%"
},'anim4')
timeline.to("#box5",{
  // height:"125vh",
  // width:"35vw",
  transform: "translate(-50%,-50%)  scale(5)",
  left:"50%"
},'anim4')
timeline.to("#box6",{
  // height:"125vh",
  // width:"35vw",
  transform: "translate(-50%,-50%)  scale(5)",
  left:"90%"
},'anim4')
timeline.to("#box1",{
  left:"-100%"
},"anim5")
timeline.to("#box5",{
  scale: 20,
  duartion:1
},"anim5")
timeline.to("#box6",{
  left:"200%"
},"anim5")
timeline.to('#main',{
  backgroundColor:"#000"
})
timeline.to(".box",{
  opacity:0,
})



let tl = gsap.timeline({
  scrollTrigger:{
      trigger: "#page4",
      scroller:"#main",
      start: "top top",
      end: "600%",
      scrub: 2,
      pin: true,
  }
})
tl.to("#flex-col",{
  opacity: 1
})
tl.to("#card1",{
  top: "50%",
  duration:2
},'anim')

tl.to("#card4",{
  top: "50%",
  duration:3
},'anim')

tl.to("#card5",{
  top: "50%",
  duration:4
},'anim')

tl.to("#main",{
  backgroundColor:"#e7e4df"
})
tl.to('#card1',{
  left:"83.5%",
  duration:4
},'anim2')
tl.to('#card4',{
  left:"83.5%",
  duration:4
},'anim2')
tl.to('#card5',{
  left:"83.5%",
  duration:4
},'anim2')
tl.from(".elem h1",{
  y: 150,
  duration: 4
},'anim2')
tl.from("#page4-elem",{
  opacity:0,
  duration: 4,
  delay: 1.5
},'anim2')


tl.to("#card2",{
  duration: 3,
  top: "50%",
},'anim4')
tl.to("#tag2",{
  opacity:1,
},'anim4')


tl.to("#tag2", {
  onStart: function () {
    let pams = document.querySelectorAll("#flex1 p");
    pams.forEach(function (elem) {
      elem.style.transform = "translateY(-90%)";
    });
  },
  onReverseComplete: function () {
    let pams = document.querySelectorAll("#flex1 p");
    pams.forEach(function (elem) {
      elem.style.transform = "none";
    });
  },
}, "anim4");



tl.to("#tag2",{
  opacity:.5,
})


tl.to("#card3",{
  duration: 3,
  top: "50%",
},'anim5')
tl.to("#tag3",{
  opacity:1
},'anim5')

tl.to("#tag3", {
  onStart: function () {
    let pams = document.querySelectorAll("#flex1 p");
    pams.forEach(function (elem) {
      elem.style.transform = "translateY(-200%)";
    });
  },
  onReverseComplete: function () {
    let pams = document.querySelectorAll("#flex1 p");
    pams.forEach(function (elem) {
      elem.style.transform = "translateY(-100%)";
    });
  },
}, "anim5");

tl.to("#card3",{
})
tl.to("#tag3",{
  opacity:.5,
})


tl.to("#card6",{
  duration: 3,
  top: "50%",
},'anim6')
tl.to("#tag4",{
  opacity:1,
  // delay:.5
},'anim6')
tl.to("#tag4", {
  onStart: function () {
    let pams = document.querySelectorAll("#flex1 p");
    pams.forEach(function (elem) {
      elem.style.transform = "translateY(-300%)";
    });
  },
  onReverseComplete: function () {
    let pams = document.querySelectorAll("#flex1 p");
    pams.forEach(function (elem) {
      elem.style.transform = "translateY(-200%)";
    });
  },
}, "anim6");
tl.to("#card6",{
})
tl.to("#tag4",{
  opacity:.5,
  // delay:.5
})

tl.to("#card7",{
  duration: 3,
  top: "50%",
},'anim7')
tl.to("#tag5",{
  opacity:1
},'anim7')
tl.to("#tag5", {
  onStart: function () {
    let pams = document.querySelectorAll("#flex1 p");
    pams.forEach(function (elem) {
      elem.style.transform = "translateY(-400%)";
    });
  },
  onReverseComplete: function () {
    let pams = document.querySelectorAll("#flex1 p");
    pams.forEach(function (elem) {
      elem.style.transform = "translateY(-300%)";
    });
  },
}, "anim7");
tl.to("#card7",{
},)
tl.to("#tag5",{
  opacity:.5
},)


tl.to("#card8",{
  duration: 3,
  top: "50%",
},'anim8')
tl.to("#tag6",{
  opacity:1,
  // delay:.5
},'anim8')
tl.to("#tag6", {
  onStart: function () {
    let pams = document.querySelectorAll("#flex1 p");
    pams.forEach(function (elem) {
      elem.style.transform = "translateY(-500%)";
    });
  },
  onReverseComplete: function () {
    let pams = document.querySelectorAll("#flex1 p");
    pams.forEach(function (elem) {
      elem.style.transform = "translateY(-400%)";
    });
  },
}, "anim8");
tl.to("#card8",{
})
tl.to("#tag6",{
  opacity:.5,
  // delay:.5
})


tl.to("#card9",{
  duration: 3,
  top: "50%",
},'anim9')
tl.to("#tag7",{
  opacity:1,
  // delay:.5
},'anim9')
tl.to("#tag7", {
  onStart: function () {
    let pams = document.querySelectorAll("#flex1 p");
    pams.forEach(function (elem) {
      elem.style.transform = "translateY(-600%)";
    });
  },
  onReverseComplete: function () {
    let pams = document.querySelectorAll("#flex1 p");
    pams.forEach(function (elem) {
      elem.style.transform = "translateY(-500%)";
    });
  },
}, "anim9");
tl.to("#card9",{
})
tl.to("#tag7",{
  opacity:1,
  
})



let tl99 = gsap.timeline()

tl99.to(".elems h1",{
  y:5,
  duration: .5,
  stagger: .5,
  ease: "Expo-out",
  scrollTrigger:{
    scroller:"#main",
    trigger:".elems",
    start: "top 80%",
    scrub: 3
  }
})
tl99.to(".elems1 h2",{
  y:5,
  duration: .2,
  stagger: .2,
  delay: 2,
  ease: "Expo-out",
  scrollTrigger:{
    scroller:"#main",
    trigger:".elems1",
    start: "top 80%",
    makers: true,
    scrub: 3
  }
})


let tllastanim = gsap.timeline({
  scrollTrigger: {
    scroller: "#main",
    trigger: ".lastbox",
    start: "top 110%",
  }
})

tllastanim.to(".lastbox", {
  transform: "translateY(0)",
  duration: 1,
  stagger: 0.2,

},);
tllastanim.to('.lastbox',{
  left: "8%"
},'one')
tllastanim.to('#one',{
  left: "10.5%",
  rotate:53.9
},'one')
tllastanim.to('#five',{
  left: "5.5%",
  rotate:-53.9
},'one')
tllastanim.to('#six',{
  left:"3.1%",
  rotate:53.9
},'one')
tllastanim.to('#seven',{
  left:"1%",
},'one')






document.querySelector("#boxx0").style.opacity= "0"
document.querySelector("#boxxM1").style.opacity= "0"
document.querySelector("#boxxM2").style.opacity= "0"

let tlmax = gsap.timeline()
tlmax.to(".box",{
  opacity: 0
})
tlmax.to("#loader-box1",{
    transform: "translate(0)",
    duration: .5,
    ease: "expo-out"
},'load')
tlmax.to("#loader-box2",{
    transform: "translate(0)",
    duration:.7,
    ease: "expo-out"
},'load')
tlmax.to("#loader-box3",{
    transform: "translate(0)",
    duration:.9,
    ease: "expo-out"
},'load')

tlmax.to("#loader-div",{
    top: "17.7%",
    duration: .7,
    ease: "expo-out"
},'load1')

tlmax.to(".loadbox",{
    height: "21vw",
    width: "7.2vw"
},'load1')
tlmax.to('#loader',{
    top: "-1000",
    duration: .7,
    ease: "expo-out"
},'load1')
tlmax.to(".loadbox",{
    backgroundColor: "#000",
    delay: -.01,
    duration : .5,
    ease: "expo-out",
},'load1')

tlmax.to(".loadbox",{
    display: "none",
    delay: -.1,
    ease: "expo-out",


},'load1')

tlmax.to("#boxx1",{
    left:"29%",
    duration:1
},'time')
tlmax.to("#boxx0",{
    left:"28%",
    // top:"20vw",
    duration:1,
},'time')
tlmax.to("#boxxM1",{
    left:"28%",
    duration:1,
},'time')
tlmax.to("#boxxM2",{
    left:"28%",
    duration:1,
},'time')
tlmax.to("#boxx2",{
    left: "41%",
    duration:1
},"time")
tlmax.to("#boxx3",{
    left: "53%",
    duration:1
},"time")
tlmax.to("#boxxM1",{
    left: "52%",
    duration:1
},"time")
tlmax.to("#boxxM2",{
    left: "65%",
    duration:1
},"time")
tlmax.to("#boxx4",{
    left: "65%",
    duration:1
},"time")
tlmax.to("#boxx0",{
    opacity : "1",
    // top:"15%",
    left: "18%",
    rotate: 54.9,
    duration: 1
},'time1')
tlmax.to("#boxx4",{
    left:"85.9%",
    duration:1
},'time1')
tlmax.to("#boxxM2",{
    // top: "15.2vw",
    left:"74.9%",
    transform: "translate(-50%,-50%) rotate(55deg)",
    opacity: 1,
    duration:1
},'time1')
tlmax.to("#boxxM1",{
    // top: "15.2vw",
    left:"63.9%",
    transform: "translate(-50%,-50%) rotate(-55deg)",
    opacity: 1,
    duration:1
},'time1')
tlmax.to(".boxx",{
    display: "none"

},'ramjikijay')
tlmax.to(".box",{
  opacity: 1,
},'ramjikijay')
tlmax.from("#page1",{
  opacity: 0,
  duration: .3
})
tlmax.to("#loader1",{
  opacity: 0,


})


tlmax.to("#loader1",{
  opacity: 0,
  // display: "none",
  // y: 1000
})

}

else{
  
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




gsap.to("#nav",{

  scrollTrigger:{
    trigger:"#page1-part1",
    scroller: "#main",
    start: "top 0",
    onEnter:function(){
      gsap.to("#nav",{
        top: "0%",
        duration:.5,
      })
    },
    onLeaveBack:function(){
      gsap.to("#nav",{
        top:"-10%"
      })
    }

  }
})

const menubtn = document.querySelector("#menubtn")
const closebtn = document.querySelector("#menubtn1")
let tlmenu = gsap.timeline({paused:true})
tlmenu.to("#full-nav",{
  clipPath: "polygon(0 0, 100% 0, 100% 100%,0 100%)",
  ease: "expo-out"
})
tlmenu.from(closebtn,{
  opacity: 0,
  duration: .3,
  ease: "expo-out"
},'nav1')
tlmenu.from('#full-nav-part1 h1',{
  y:100,
  opacity:0,
  duration:.5,
  stagger: .2
})
tlmenu.from('#full-nav-part2',{
  opacity:0,
  duration: 1
},'nav1')


// let isMenuOpen = false
// menubtn.addEventListener('click',function(){
//   if(!isMenuOpen){
//     console.log("clicked")
//     tlmenu.play()
//   }
//   else{
//     tlmenu.reverse()
//   }
//   isMenuOpen = !isMenuOpen

// })

menubtn.addEventListener('click',function(){
  tlmenu.play()
})
closebtn.addEventListener('click',function(){
  tlmenu.reverse()
});


let tllastanim = gsap.timeline({
  scrollTrigger: {
    scroller: "#main",
    trigger: ".lastbox",
    start: "top 130%",
  }
})

tllastanim.to(".lastbox", {
  transform: "translateY(0)",
  duration: 1,
  stagger: 0.2,

},);
tllastanim.to('.lastbox',{
  left: "8%"
},'one')
tllastanim.to('#one',{
  left: "10.5%",
  rotate:53.9
},'one')
tllastanim.to('#five',{
  left: "5.5%",
  rotate:-53.9
},'one')
tllastanim.to('#six',{
  left:"3.1%",
  rotate:53.9
},'one')
tllastanim.to('#seven',{
  left:"1%",
},'one')














const box1 = document.getElementById("box1");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1",
    start: "top top",
    scroller:"#main",
    end: "+=220%",
    scrub: true,
  },
});

timeline.to("#box1", {
  // top: "60%",
  top: "39.9vw",
  left: "33%",
  width:"7vw",
  height:"13vw",
  rotate:-90,
  // transform: "translate(-50%,-50%)",
  duration:2
}, "anim");
timeline.to("#box3",{
  // top: "53.9%",
  top: "37vw",
  left: "38%",
  width:"7vw",
  height:"13vw",
  transform: "translate(-50%,-50%)",
  duration:2
},"anim");
timeline.to("#box2",{
  // top: "53.95%",
  top: "37vw",
  left: "43%",
  rotate: 0,
  width:"7vw",
  height:"13vw",
  // transform: "translate(-50%,-50%)",
  duration:2
},"anim");
timeline.to("#box5",{
  // top: "28%",
  top: "24vw",
  left: "50%",
  rotate:180,
  width:"7vw",
  height:"13vw",
  // transform: "translate(-50%,-50%)",
  duration:2
},"anim");
timeline.to("#box6",{
  // top: "53.95%",
  top: "37vw",
  left: "57%",
  rotate:-180,
  width:"7vw",
  height:"13vw",
  // transform: "translate(-50%,-50%)",
  duration:2
},"anim");
timeline.to("#box7",{
  // top: "53.95%",
  top: "37vw",
  left: "62%",
  rotate:180,
  width:"7vw",
  height:"13vw",
  // transform: "translate(-50%,-50%)",
  duration:2
},"anim");
timeline.to("#box4", {
  // top: "60%",
  top: "39.9vw",
  left: "67%",
  width:"7vw",
  height:"13vw",
  rotate:90,
  // transform: "translate(-50%,-50%)",
  duration:2
}, "anim");
timeline.to('.box',{
  duration: 3,
})
timeline.to('.box',{
  position: 'absolute'
})

// timeline.to('#box1',{
//   rotate:0,
//   left:"40%",
//   transform: "translate(-50%,-50%)",
//   top:"27vw",
//   // top:"53.9%"
// },'anim2')
// timeline.to("#box2",{
//   left:"40%",
//   transform: "translate(-50%,-50%)",

// }, "anim2")
// timeline.to("#box3",{
//   left:"40%",
//   transform: "translate(-50%,-50%)",
// }, "anim2")
// timeline.to("#box5",{
//   left:"50%",
//   // top:"53.9%",
//   transform: "translate(-50%,-50%)",
//   top: "27vw"
// }, "anim2")
// timeline.to("#box6",{
//   left:"60%",
//   transform: "translate(-50%,-50%)",
// }, "anim2")
// timeline.to("#box7",{
//   left:"60%",
//   transform: "translate(-50%,-50%)",
// }, "anim2")
// timeline.to("#box4",{
//   rotate:0,
//   // top:"53.9%",
//   top: "27vw",
//   transform: "translate(-50%,-50%)",
//   left:"60%",
// }, "anim2")





// timeline.to("#box2",{
//   display:"none",
// }, "anim3")
// timeline.to("#box3",{
//   display:"none",
// }, "anim3")
// timeline.to("#box7",{
//   display:"none",
// }, "anim3")
// timeline.to("#box4",{
//   display:"none",
// }, "anim3")

// timeline.to("#box1",{
//   transform: "translate(-50%,-50%)  scale(5)",
//   left:"10%"
// },'anim4')
// timeline.to("#box5",{
//   // height:"125vh",
//   // width:"35vw",
//   transform: "translate(-50%,-50%)  scale(5)",
//   left:"50%"
// },'anim4')
// timeline.to("#box6",{
//   // height:"125vh",
//   // width:"35vw",
//   transform: "translate(-50%,-50%)  scale(5)",
//   left:"90%"
// },'anim4')
// timeline.to("#box1",{
//   left:"-100%"
// },"anim5")
// timeline.to("#box5",{
//   height:"150vh",
//   width:"150%"
// },"anim5")
// timeline.to("#box6",{
//   left:"200%"
// },"anim5")
// timeline.to('#main',{
//   backgroundColor:"#000"
// })
// timeline.to(".box",{
//   opacity:0,
// })



// let tl = gsap.timeline({
//   scrollTrigger:{
//       trigger: "#page4",
//       scroller:"#main",
//       start: "top top",
//       end: "600%",
//       scrub: 2,
//   }
// })
// tl.to("#flex-col",{
//   opacity: 1
// })
// tl.to("#card1",{
//   top: "50%",
//   duration:2
// },'anim')

// tl.to("#card4",{
//   top: "50%",
//   duration:3
// },'anim')

// tl.to("#card5",{
//   top: "50%",
//   duration:4
// },'anim')

// tl.to("#main",{
//   backgroundColor:"#e7e4df"
// })
// tl.to('#card1',{
//   left:"83.5%",
//   duration:4
// },'anim2')
// tl.to('#card4',{
//   left:"83.5%",
//   duration:4
// },'anim2')
// tl.to('#card5',{
//   left:"83.5%",
//   duration:4
// },'anim2')
// tl.from(".elem h1",{
//   y: 150,
//   duration: 4
// },'anim2')
// tl.from("#page4-elem",{
//   opacity:0,
//   duration: 4,
//   delay: 1.5
// },'anim2')


// tl.to("#card2",{
//   duration: 3,
//   top: "50%",
// },'anim4')
// tl.to("#tag2",{
//   opacity:1,
// },'anim4')


// tl.to("#tag2", {
//   onStart: function () {
//     let pams = document.querySelectorAll("#flex1 p");
//     pams.forEach(function (elem) {
//       elem.style.transform = "translateY(-90%)";
//     });
//   },
//   onReverseComplete: function () {
//     let pams = document.querySelectorAll("#flex1 p");
//     pams.forEach(function (elem) {
//       elem.style.transform = "none";
//     });
//   },
// }, "anim4");



// tl.to("#tag2",{
//   opacity:.5,
// })


// tl.to("#card3",{
//   duration: 3,
//   top: "50%",
// },'anim5')
// tl.to("#tag3",{
//   opacity:1
// },'anim5')

// tl.to("#tag3", {
//   onStart: function () {
//     let pams = document.querySelectorAll("#flex1 p");
//     pams.forEach(function (elem) {
//       elem.style.transform = "translateY(-190%)";
//     });
//   },
//   onReverseComplete: function () {
//     let pams = document.querySelectorAll("#flex1 p");
//     pams.forEach(function (elem) {
//       elem.style.transform = "translateY(-90%)";
//     });
//   },
// }, "anim5");

// tl.to("#card3",{
// })
// tl.to("#tag3",{
//   opacity:.5,
// })


// tl.to("#card6",{
//   duration: 3,
//   top: "50%",
// },'anim6')
// tl.to("#tag4",{
//   opacity:1,
//   // delay:.5
// },'anim6')
// tl.to("#tag4", {
//   onStart: function () {
//     let pams = document.querySelectorAll("#flex1 p");
//     pams.forEach(function (elem) {
//       elem.style.transform = "translateY(-290%)";
//     });
//   },
//   onReverseComplete: function () {
//     let pams = document.querySelectorAll("#flex1 p");
//     pams.forEach(function (elem) {
//       elem.style.transform = "translateY(-190%)";
//     });
//   },
// }, "anim6");
// tl.to("#card6",{
// })
// tl.to("#tag4",{
//   opacity:.5,
//   // delay:.5
// })

// tl.to("#card7",{
//   duration: 3,
//   top: "50%",
// },'anim7')
// tl.to("#tag5",{
//   opacity:1
// },'anim7')
// tl.to("#tag5", {
//   onStart: function () {
//     let pams = document.querySelectorAll("#flex1 p");
//     pams.forEach(function (elem) {
//       elem.style.transform = "translateY(-390%)";
//     });
//   },
//   onReverseComplete: function () {
//     let pams = document.querySelectorAll("#flex1 p");
//     pams.forEach(function (elem) {
//       elem.style.transform = "translateY(-290%)";
//     });
//   },
// }, "anim7");
// tl.to("#card7",{
// },)
// tl.to("#tag5",{
//   opacity:.5
// },)


// tl.to("#card8",{
//   duration: 3,
//   top: "50%",
// },'anim8')
// tl.to("#tag6",{
//   opacity:1,
//   // delay:.5
// },'anim8')
// tl.to("#tag6", {
//   onStart: function () {
//     let pams = document.querySelectorAll("#flex1 p");
//     pams.forEach(function (elem) {
//       elem.style.transform = "translateY(-490%)";
//     });
//   },
//   onReverseComplete: function () {
//     let pams = document.querySelectorAll("#flex1 p");
//     pams.forEach(function (elem) {
//       elem.style.transform = "translateY(-390%)";
//     });
//   },
// }, "anim8");
// tl.to("#card8",{
// })
// tl.to("#tag6",{
//   opacity:.5,
//   // delay:.5
// })


// tl.to("#card9",{
//   duration: 3,
//   top: "50%",
// },'anim9')
// tl.to("#tag7",{
//   opacity:1,
//   // delay:.5
// },'anim9')
// tl.to("#tag7", {
//   onStart: function () {
//     let pams = document.querySelectorAll("#flex1 p");
//     pams.forEach(function (elem) {
//       elem.style.transform = "translateY(-590%)";
//     });
//   },
//   onReverseComplete: function () {
//     let pams = document.querySelectorAll("#flex1 p");
//     pams.forEach(function (elem) {
//       elem.style.transform = "translateY(-490%)";
//     });
//   },
// }, "anim9");
// tl.to("#card9",{
// })
// tl.to("#tag7",{
//   opacity:1,
  
// })



let tl99 = gsap.timeline()

tl99.to(".elems h1",{
  y:5,
  duration: .5,
  stagger: .5,
  ease: "Expo-out",
  scrollTrigger:{
    scroller:"#main",
    trigger:".elems",
    start: "top 80%",
    scrub: 3
  }
})
tl99.to(".elems1 h2",{
  y:5,
  duration: .3,
  stagger: .5,
  delay: 2,
  ease: "Expo-out",
  scrollTrigger:{
    scroller:"#main",
    trigger:".elems1",
    start: "top 70%",
    makers: true,
    scrub: 3
  }
})










document.querySelector("#boxx0").style.opacity= "0"
document.querySelector("#boxxM1").style.opacity= "0"
document.querySelector("#boxxM2").style.opacity= "0"


let tlmax = gsap.timeline()
tlmax.to(".box",{
  opacity: 0
})
tlmax.to("#loader-box1",{
    transform: "translate(0)",
    duration: .5,
    ease: "expo-out"
},'load')
tlmax.to("#loader-box2",{
    transform: "translate(0)",
    duration:.7,
    ease: "expo-out"
},'load')
tlmax.to("#loader-box3",{
    transform: "translate(0)",
    duration:.9,
    ease: "expo-out"
},'load')

tlmax.to("#loader-div",{
    top: "7.7%"
},'load1')
tlmax.to(".loadbox",{
    height: "21vw",
    width: "7.2vw"
},'load1')
tlmax.to('#loader',{
    top: "-1000",
    duration: 1,
    ease: "expo-out"
},'load1')
tlmax.to(".loadbox",{
    backgroundColor: "#000",
    delay: -.01,
    duration : .5,
    ease: "expo-out",
},'load1')
tlmax.to(".loadbox",{
    display: "none",
    delay: -.1,
    ease: "expo-out",


},'load1')

tlmax.to("#boxx1",{
    left:"29%",
    duration:1
},'time')
tlmax.to("#boxx0",{
    left:"28%",
    // top:"20vw",
    duration:1,
},'time')
tlmax.to("#boxxM1",{
    left:"28%",
    duration:1,
},'time')
tlmax.to("#boxxM2",{
    left:"28%",
    duration:1,
},'time')
tlmax.to("#boxx2",{
    left: "41%",
    duration:1
},"time")
tlmax.to("#boxx3",{
    left: "53%",
    duration:1
},"time")
tlmax.to("#boxxM1",{
    left: "52%",
    duration:1
},"time")
tlmax.to("#boxxM2",{
    left: "65%",
    duration:1
},"time")
tlmax.to("#boxx4",{
    left: "65%",
    duration:1
},"time")
tlmax.to("#boxx0",{
    opacity : "1",
    // top:"15%",
    left: "18%",
    rotate: 54.9,
    duration: 1
},'time1')
tlmax.to("#boxx4",{
    left:"85.9%",
    duration:1
},'time1')
tlmax.to("#boxxM2",{
    // top: "15.2vw",
    left:"74.9%",
    transform: "translate(-50%,-50%) rotate(55deg)",
    opacity: 1,
    duration:1
},'time1')
tlmax.to("#boxxM1",{
    // top: "15.2vw",
    left:"63.9%",
    transform: "translate(-50%,-50%) rotate(-55deg)",
    opacity: 1,
    duration:1
},'time1')
tlmax.to(".boxx",{
    display: "none"

},'ramjikijay')
tlmax.to(".box",{
  opacity: 1,
},'ramjikijay')

tlmax.to("#loader1",{
  opacity: 0,


})

tlmax.from("#page1",{
  opacity: 0
})
tlmax.to("#loader1",{
  opacity: 0,
  // display: "none",
  // y: 1000
})


}
