let lenis=new Lenis({lerp:.1,smooth:!0,syncTouch:!0,infinite:!1});function raf(e){lenis.raf(e),requestAnimationFrame(raf)}lenis.on("scroll",ScrollTrigger.update),requestAnimationFrame(raf);