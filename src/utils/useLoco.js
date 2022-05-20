import LocomotiveScroll from "locomotive-scroll";
import React, { useEffect,useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./loco.css";
import { useAppContext } from "../contexts/appcontext.js";

gsap.registerPlugin(ScrollTrigger);
const useLoco = (start) => {
  var { scrollY, ScrollYValue, updateNeeded } = useAppContext();
  const [callonce, setCallonce] = useState(false);
  var btnobj = "";
  const oncallfunc=(myobj)=>{
    return  btnobj =myobj;
  }
 
  useEffect(() => {
    if (!start) return;
    const scEl = document.querySelector("#viewport");
    let locoScroll = null;
     locoScroll = new LocomotiveScroll({
      el: scEl,
      smooth: true,
      multiplier: 0.55,
      class: "revealed",
      lerp:0.07,
    });
    // locoScroll.on("scroll", );

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
        console.log("working")
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
      const sY = args.delta.y;
      if( sY > 10) {
        scrollY(10)
      }
      else {
        scrollY(0)
      }
    
  })
    //   // if (callonce && btnobj){
    //     var locodata="";
    //     if (args.currentElements[btnobj] === "undefiend" ){
    //       locodata= ""} 
    //       else if (args.currentElements[btnobj]){locodata = args.currentElements[btnobj].top;}
    //       var pay ={ btnname : btnobj , value: locodata};
    //       updateNeeded(pay)
    //       setCallonce(false)
    //       console.log(pay)
    // // }
    // });
    
    // locoScroll.on("call", (obj, status)=>{
    //   if (status === "enter"){
    //   oncallfunc(obj);
    //   setCallonce(true);
    //   console.log(obj, status)}
    // })
    setTimeout(function(){
      locoScroll.update()
      // ScrollTrigger.refresh();
      // ScrollTrigger.update();
      }, 100);
   

    return () => {
      if (locoScroll) {
        ScrollTrigger.removeEventListener("refresh", lsUpdate);
        locoScroll.destroy();
        locoScroll = null;
        console.log("Kill", locoScroll);
      // ScrollTrigger.refresh();
      // ScrollTrigger.update();


      }
    };
  },[start]);

};

export default useLoco;
