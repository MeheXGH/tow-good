const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    tablet: {
      breakpoint: 0,   
    }
  })



function locoAni(){

    
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
locoAni();

function navAni(){
    gsap.to(".logo svg",{
        transform:"translateY(-100%)",
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            // markers:true,
            start:"top 0",
            end:"top -5%",
            scrub:true,
           
        }
    })
    gsap.to("nav .links",{
        transform:"translateY(-100%)",
        opacity:0,
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            // markers:true,
            start:"top 0",
            end:"top -5%",
            scrub:true,
           
        }
    })
}
navAni();

// function playAni(){
//     var videoCon = document.querySelector("#video-con");
// var playBtn = document.querySelector(".play");

// videoCon.addEventListener("mouseenter", function(){
//     gsap.to(playBtn,{
//         scale: 1,
//         opacity:1
//     })
// })

// videoCon.addEventListener("mouseleave", function(){
//     gsap.to(playBtn,{
//         scale: 0,
//         opacity:0
//     })
// })

// videoCon.addEventListener("mousemove", function(info){
//     gsap.to(playBtn,{
//         left:info.x-45,
//         top:info.y-50

//     })
// })
// }
// playAni();


function loadingAni(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3
    })

    gsap.from("#video-con",{
        scale:0.9,
        opacity:0,
        delay:1.5,
        duration:0.5,
       
    })
}
loadingAni();


function cursorAni(){
    document.addEventListener("mousemove",function(info){
        gsap.to(".cur",{
            left:info.x,
            top:info.y
        })
    })
    
    document.querySelector("#video-con").addEventListener("mouseenter",function(){
        gsap.to(".cur",{
        transform:' translate(-50% , -50%) scale(1)',
        backgroundColor:'rgba(255, 166, 0, 0.621)',
        })
    })
    
    document.querySelector("#video-con").addEventListener("mouseleave",function(){
        gsap.to(".cur",{
        transform:' translate(-50% , -50%) scale(0)',
        
    
        })
    })
    
    document.querySelectorAll(".item,.item-text").forEach(function (elem){
        elem.addEventListener("mouseenter", function(){
            gsap.to(".cur",{
                    transform:' translate(-50% , -50%) scale(1)',
                    
                    })
        })
    
        elem.addEventListener("mouseleave", function(){
            gsap.to(".cur",{
                    transform:' translate(-50% , -50%) scale(0)',
                    
                    })
        })
    })
    
    // document.querySelector("#item1").addEventListener("mouseenter",function(){
    //     gsap.to(".cur",{
    //     backgroundColor:'red',
    //     })
    // })
    // document.querySelector("#item2").addEventListener("mouseenter",function(){
    //     gsap.to(".cur",{
    //     backgroundColor:'green',
    //     })
    // })
    // document.querySelector("#item3").addEventListener("mouseenter",function(){
    //     gsap.to(".cur",{
    //     backgroundColor:'orange',
    //     })
    // })
    // document.querySelector("#item4").addEventListener("mouseenter",function(){
    //     gsap.to(".cur",{
    //     backgroundColor:'blue',
    //     })
    // })
    
    // Simplified code for mouseenter event listeners
    const items = ["#item1", "#item2", "#item3", "#item4"];
    items.forEach(item => {
    document.querySelector(item).addEventListener("mouseenter", function () {
    const colorMap = {
    "#item1": 'rgba(255, 106, 0, 0.145)',
    "#item2": ' rgba(0, 255, 81, 0.145)',
    "#item3": 'rgba(0, 0, 0, 0.145)',
    "#item4": 'rgba(0, 174, 255, 0.145)',
    };
    gsap.to(".cur", {
    backgroundColor: colorMap[item],
    });
    });
    });
}
cursorAni();


document.querySelector(".user1").addEventListener("click", function(){
    document.querySelector(".user1 h2").style.display = "block";
    document.querySelector(".user1 h1").style.display = "none";

    document.querySelector(".user2 h2").style.display = "none";
    document.querySelector(".user3 h2").style.display = "none";
    document.querySelector(".user4 h2").style.display = "none";
    document.querySelector(".user5 h2").style.display = "none";
    document.querySelector(".user6 h2").style.display = "none";



    document.querySelector(".user2 h1").style.display = "block";
    document.querySelector(".user3 h1").style.display = "block";
    document.querySelector(".user4 h1").style.display = "block";
    document.querySelector(".user5 h1").style.display = "block";
    document.querySelector(".user6 h1").style.display = "block";



    document.querySelector(".out1").style.display = "block";

    document.querySelector(".out2").style.display = "none";
    document.querySelector(".out3").style.display = "none";
    document.querySelector(".out4").style.display = "none";
    document.querySelector(".out5").style.display = "none";
    document.querySelector(".out6").style.display = "none";



    document.querySelector(".user1 img").style.display = "block";

    document.querySelector(".user2 img").style.display = "none";
    document.querySelector(".user3 img").style.display = "none";
    document.querySelector(".user4 img").style.display = "none";
    document.querySelector(".user5 img").style.display = "none";
    document.querySelector(".user6 img").style.display = "none";

});



document.querySelector(".user2").addEventListener("click", function(){
    document.querySelector(".user2 h2").style.display = "block";
    document.querySelector(".user2 h1").style.display = "none";

    document.querySelector(".user1 h2").style.display = "none";
    document.querySelector(".user3 h2").style.display = "none";
    document.querySelector(".user4 h2").style.display = "none";
    document.querySelector(".user5 h2").style.display = "none";
    document.querySelector(".user6 h2").style.display = "none";



    document.querySelector(".user1 h1").style.display = "block";
    document.querySelector(".user3 h1").style.display = "block";
    document.querySelector(".user4 h1").style.display = "block";
    document.querySelector(".user5 h1").style.display = "block";
    document.querySelector(".user6 h1").style.display = "block";



    document.querySelector(".out2").style.display = "block";
    document.querySelector(".out1").style.display = "none";
    document.querySelector(".out3").style.display = "none";
    document.querySelector(".out4").style.display = "none";
    document.querySelector(".out5").style.display = "none";
    document.querySelector(".out6").style.display = "none";



    document.querySelector(".user2 img").style.display = "block";
    document.querySelector(".user1 img").style.display = "none";
    document.querySelector(".user3 img").style.display = "none";
    document.querySelector(".user4 img").style.display = "none";
    document.querySelector(".user5 img").style.display = "none";
    document.querySelector(".user6 img").style.display = "none";

});



document.querySelector(".user3").addEventListener("click", function(){
    
    document.querySelector(".user3 h2").style.display = "block";
    document.querySelector(".user3 h1").style.display = "none";


    document.querySelector(".user1 h2").style.display = "none";
    document.querySelector(".user2 h2").style.display = "none";
    document.querySelector(".user4 h2").style.display = "none";
    document.querySelector(".user5 h2").style.display = "none";
    document.querySelector(".user6 h2").style.display = "none";

    document.querySelector(".user1 h1").style.display = "block";
    document.querySelector(".user2 h1").style.display = "block";
    document.querySelector(".user4 h1").style.display = "block";
    document.querySelector(".user5 h1").style.display = "block";
    document.querySelector(".user6 h1").style.display = "block";


    document.querySelector(".out3").style.display = "block";
    document.querySelector(".out1").style.display = "none";
    document.querySelector(".out2").style.display = "none";
    document.querySelector(".out4").style.display = "none";
    document.querySelector(".out5").style.display = "none";
    document.querySelector(".out6").style.display = "none";


    document.querySelector(".user3 img").style.display = "block";
    document.querySelector(".user1 img").style.display = "none";
    document.querySelector(".user2 img").style.display = "none";
    document.querySelector(".user4 img").style.display = "none";
    document.querySelector(".user5 img").style.display = "none";
    document.querySelector(".user6 img").style.display = "none";
})



document.querySelector(".user4").addEventListener("click", function(){
    document.querySelector(".user4 h2").style.display = "block";
    document.querySelector(".user4 h1").style.display = "none";

    document.querySelector(".user2 h2").style.display = "none";
    document.querySelector(".user3 h2").style.display = "none";
    document.querySelector(".user1 h2").style.display = "none";
    document.querySelector(".user5 h2").style.display = "none";
    document.querySelector(".user6 h2").style.display = "none";



    document.querySelector(".user2 h1").style.display = "block";
    document.querySelector(".user3 h1").style.display = "block";
    document.querySelector(".user1 h1").style.display = "block";
    document.querySelector(".user5 h1").style.display = "block";
    document.querySelector(".user6 h1").style.display = "block";



    document.querySelector(".out4").style.display = "block";

    document.querySelector(".out2").style.display = "none";
    document.querySelector(".out3").style.display = "none";
    document.querySelector(".out1").style.display = "none";
    document.querySelector(".out5").style.display = "none";
    document.querySelector(".out6").style.display = "none";



    document.querySelector(".user4 img").style.display = "block";

    document.querySelector(".user2 img").style.display = "none";
    document.querySelector(".user3 img").style.display = "none";
    document.querySelector(".user1 img").style.display = "none";
    document.querySelector(".user5 img").style.display = "none";
    document.querySelector(".user6 img").style.display = "none";

});



document.querySelector(".user5").addEventListener("click", function(){
    document.querySelector(".user5 h2").style.display = "block";
    document.querySelector(".user5 h1").style.display = "none";

    document.querySelector(".user2 h2").style.display = "none";
    document.querySelector(".user3 h2").style.display = "none";
    document.querySelector(".user4 h2").style.display = "none";
    document.querySelector(".user1 h2").style.display = "none";
    document.querySelector(".user6 h2").style.display = "none";



    document.querySelector(".user2 h1").style.display = "block";
    document.querySelector(".user3 h1").style.display = "block";
    document.querySelector(".user4 h1").style.display = "block";
    document.querySelector(".user1 h1").style.display = "block";
    document.querySelector(".user6 h1").style.display = "block";



    document.querySelector(".out5").style.display = "block";

    document.querySelector(".out2").style.display = "none";
    document.querySelector(".out3").style.display = "none";
    document.querySelector(".out4").style.display = "none";
    document.querySelector(".out1").style.display = "none";
    document.querySelector(".out6").style.display = "none";



    document.querySelector(".user5 img").style.display = "block";
    
    document.querySelector(".user2 img").style.display = "none";
    document.querySelector(".user3 img").style.display = "none";
    document.querySelector(".user4 img").style.display = "none";
    document.querySelector(".user1 img").style.display = "none";
    document.querySelector(".user6 img").style.display = "none";

});



document.querySelector(".user6").addEventListener("click", function(){
    document.querySelector(".user6 h2").style.display = "block";
    document.querySelector(".user6 h1").style.display = "none";

    document.querySelector(".user2 h2").style.display = "none";
    document.querySelector(".user3 h2").style.display = "none";
    document.querySelector(".user4 h2").style.display = "none";
    document.querySelector(".user5 h2").style.display = "none";
    document.querySelector(".user1 h2").style.display = "none";



    document.querySelector(".user2 h1").style.display = "block";
    document.querySelector(".user3 h1").style.display = "block";
    document.querySelector(".user4 h1").style.display = "block";
    document.querySelector(".user5 h1").style.display = "block";
    document.querySelector(".user1 h1").style.display = "block";



    document.querySelector(".out6").style.display = "block";

    document.querySelector(".out2").style.display = "none";
    document.querySelector(".out3").style.display = "none";
    document.querySelector(".out4").style.display = "none";
    document.querySelector(".out5").style.display = "none";
    document.querySelector(".out1").style.display = "none";



    document.querySelector(".user6 img").style.display = "block";
    
    document.querySelector(".user2 img").style.display = "none";
    document.querySelector(".user3 img").style.display = "none";
    document.querySelector(".user4 img").style.display = "none";
    document.querySelector(".user5 img").style.display = "none";
    document.querySelector(".user1 img").style.display = "none";

});















