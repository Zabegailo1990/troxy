let cont=document.querySelector(".marquee__slider");gsap.to(".marquee__card",{ease:"none",x:()=>-(cont.scrollWidth-window.innerWidth),scrollTrigger:{trigger:cont,pin:cont,start:"center center",end:()=>"+="+(cont.scrollWidth-window.innerWidth),scrub:!0,invalidateOnRefresh:!0,markers:!0}});