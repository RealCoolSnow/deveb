import LocomotiveScroll from "locomotive-scroll";
import React, { useEffect,useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./loco.css";
import { useAppContext } from "../contexts/appcontext.js";

gsap.registerPlugin(ScrollTrigger);
export var scrolltop= "";
const useLoco = (start, instance=false) => {
  var { scrollY, resetLoco  } = useAppContext();

  
  useEffect(() => {
    if (!start) return;
    // if(updateloco !== 0){
    //   locoScroll.update();
    //   return;
    // }
    let locoScroll = null;
    console.log("runing loco")
    const scEl = document.querySelector("#viewport");
     locoScroll = new LocomotiveScroll({
      el: scEl,
      smooth: true,
      // multiplier: 0.55,
      multiplier: 0.81,
      smartphone: {smooth: true},
      tablet: {smooth: true},
      class: "revealed",
      // lerp:0.2,
      lerp:0.095,
    });
    
    if(instance){ window.dvbScroll = locoScroll;}

    ScrollTrigger.scrollerProxy(scEl, {
      scrollTop(value) {
        if (locoScroll){
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
        }
        return null;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector("#viewport").style.transform
        ? "transform"
        : "fixed",
    });

    const lsUpdate = () => {
      if (locoScroll) {
        locoScroll.update();
      }
    }; 

    ScrollTrigger.addEventListener("refresh",lsUpdate);
    ScrollTrigger.refresh();

    locoScroll.on("scroll", (args) => {
      ScrollTrigger.update()
      // console.log(window.dvbScroll);
      const sY = args.delta.y;
      scrolltop= sY;
      if( sY > 10) {
        scrollY(10)
      }
      else {
        scrollY(0)
      }
      // console.log(locoScroll)
  })

    const timer = setTimeout(function(){
      locoScroll.update()
      // locoScroll.scrollTo(300, {duration:0, disableLerp:true,})
      // console.log("updating")
      }, 100);
   

    return () => {
      if (locoScroll) {
        ScrollTrigger.removeEventListener("refresh", lsUpdate);
        ScrollTrigger.scrollerProxy(scEl, null);
        locoScroll.destroy();
        locoScroll = null;
        // console.log("Kill", locoScroll);
        clearTimeout(timer);
      }
    };
  },[start, resetLoco]);

};

export default useLoco;