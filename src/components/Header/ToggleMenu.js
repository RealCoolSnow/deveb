import React, { useEffect, useRef } from "react";

import { withRouter } from "react-router-dom";
import { useAppContext } from "../../contexts/appcontext.js";

import Menu from "./Menu";

// import Tilt from "react-tilt";
import { gsap,Power2} from "gsap";

function ToggleMenu({ closer, isOpen, activeRoute, menuBgRef }) {
  const { isMobile } = useAppContext();

  const menuWrapper = useRef();
  const q = gsap.utils.selector(menuWrapper);

  useEffect(() => {
    // const menuBg = q(".menu-bg-box");
    // const menuBox = q(".menu-box");
    // gsap.set(menuBg, {yPersent: -25})
    const menuParts = q(".menu-box >div:not(.menu-tilt)");
    const bg_overlay = q(".bg-overlay");
   const menu_Bottom = q(".menu-box .bottom-part");
   const menu_RightItems = q(".menu-right-part a");


    if (isMobile) {
     

      gsap.set(bg_overlay,{
        display: "none",
      })
      gsap.set(menuParts[0], {
        autoAlpha: 1,
      })

      if (isOpen) {
        gsap.to(menuWrapper.current, {
          width: "250%",
          paddingBottom: "250%",
          duration: .5,
          ease:Power2.easeOut,
        })
        gsap.to(menu_Bottom, {
          autoAlpha:1,
          delay: .3,
          duration:.1,
        })
        gsap.to(menu_RightItems, {
          autoAlpha: 1,
          stagger: .05,
          duration:.45,
          delay:.1,
        })

      }
      else 
      if(!isOpen){
        gsap.set(bg_overlay,{
          display: "none",
        })
        // gsap.to(q(".menu-box .bottom-part"), {
        //   autoAlpha:0,
        //   duration:.2,
        // })
        // gsap.to(q(".menu-right-part a"), {
        //   autoAlpha: 0,
        //   stagger: "-0.05",
        //   duration:.3,
        // })
     
        // gsap.to(menuWrapper.current, {
        //     width: 0,
        //     height:0,
        //     paddingBottom:0,
        //     duration: 0.5,
        //     ease:Power2.easeIn,
        //   });
      }
    } 
    else {
      gsap.set(bg_overlay,{
        display: "block",
      })
      gsap.set(menu_RightItems, {
        autoAlpha: 1,
      })
     

      if (isOpen) {
        gsap.set(menuWrapper.current,{
          width:0,
          height:0,
          paddingBottom: 0,
        })
        gsap.set(menuParts, {
          autoAlpha:0,
        })
        gsap.to(menuWrapper.current,{
          // width:()=>getWidth(),
          // height: ()=>getHeight(),
          width:"130%",
          height: "240%",
          duration: .5,
        }); 
        gsap.to([menuParts[1], menuParts[0]], {
          autoAlpha:1,
          stagger: .1,
          delay: .15,
        })
      }
    //   if (!isOpen){ 
    //     // const menuParts = q(".menu-box >div:not(.menu-tilt)")
    //     // gsap.fromTo(menuWrapper.current, {
    //     //   css:{borderRadius: "0 0 0 100%"},
    //     // }, {
    //     //   width:0,
    //     //   height:0,
    //     //   duration: .5,
    //     // });
    //     // gsap.to(menuParts, {
    //     //   autoAlpha:0,
    //     //   duration:.2,
    //     //   stagger:.1,
    //     // })
    // }

    }
    // const getWidth= ()=>{
    //   var vwpx = document.documentElement.clientWidth;
    //   return vwpx + (vwpx/10) + "px";
    // }
    // const getHeight= ()=>{
    //   var vwpx = document.documentElement.clientHeight;
    //   return (vwpx*2) + (vwpx/2)+"px";
    // }
  }, [isOpen, isMobile]);

  const closeMenuTrigger = () => {
    closeMenuAnim();

    setTimeout(() => {
      closer();
    }, 500);
  };

  const closeMenuAnim = () => {
    // const menuBg = q(".menu-bg-box");
    // const menuBox = q(".menu-box");

    if (isMobile) {
      // gsap.set(q(".bg-overlay"),{
      //   display: "none",
      // })
      gsap.to(q(".menu-box .bottom-part"), {
        autoAlpha:0,
        duration:.2,
      })
      gsap.to(q(".menu-right-part a"), {
        autoAlpha: 0,
        stagger: "-0.05",
        duration:.3,
      })
   
      gsap.to(menuWrapper.current, {
          width: 0,
          height:0,
          paddingBottom:0,
          duration: 0.5,
          ease:Power2.easeIn,
        });
    } else {
      const menuParts = q(".menu-box >div:not(.menu-tilt)");

      gsap.fromTo(menuWrapper.current, {

        css:{borderRadius: "0 0 0 100%"},
      }, {
        width:0,
        height:0,
        paddingBottom:0,
        duration: .5,
      });
      gsap.to(menuParts, {
        autoAlpha:0,
        duration:.2,
        stagger:.1,
      })
    }
  };

  const linkClicked = (name) => {
    if (name !== activeRoute) {
      closeMenuAnim();

      setTimeout(() => {
        closer();
      }, 800);
    }
  };


  // const bg_box = q(".menu-bg-box");
  //   const movemenu = (e) => {

  //     const { target} = e;
  //     const { clientWidth, clientHeight } = target;

  //     // const xPos = -(e.clientX  / clientWidth - 0.5);
  //     // const yPos = -(e.clientY / clientHeight - 0.5);
  //     // const rightIt = q(".menu-left-part a, .menu-left-part .head, .menu-right-part a");
  
  // //  const grMaker = ()=>{
  // //   const angle= (Math.atan2((document.documentElement.clientHeight/2) - (e.clientY), (document.documentElement.clientWidth/2) - (e.clientX))*180 / Math.PI) - 90;
  // //   // const opa = (Math.abs(xPos) + Math.abs(yPos)) + .4
  // //   console.log(clientWidth, clientHeight )
  // //   const gr = "linear-gradient( " +angle+ "deg, rgba(51, 48, 41, 0) 37%, rgba(60,60,60, .9) 96%)";
  // //   return gr;
  // //  }
  //     gsap.to(q(".bg-overlay"), {
  //       backgroundImage: ()=>grMaker(),
  //       // background: "#ff00ff"
  //     })
  //   }
  const moveLinks = (e) => {
    const { target} = e;
    // const { clientWidth, clientHeight } = target;

    const ofTop = target.getBoundingClientRect().top - 45 ;
    const ofLeft = target.getBoundingClientRect().left;
    var s = e.clientX - ofLeft;
    var o = e.clientY - ofTop;
    

    console.log( s,e.clientY , ofTop )
      gsap.to(target, {
        duration: .5,
        x: ((s - target.offsetWidth / 2) / target.offsetWidth) * 30,

        y: ((o - 45 - target.offsetHeight / 2) / target.offsetHeight) * 20,
        ease: "Power3.InOut",
      });
  
  };
  const linksOut= (e)=>{
    gsap.to(e.target, {
      x:0,
      y:0,
      duration:.5,
      ease: "Power3.InOut",

    })
  }


  return (
    <div
      className={`menu-wrapper ${isOpen ? "open" : "close"}`}
      ref={menuWrapper}
    >   
        <div
        className={`bg-overlay ${!isMobile && isOpen ? "fade-in" : ""}`}
        onClick={closeMenuTrigger}
        ref={menuBgRef}
      ></div>
      <div className="menu-bg-box">
        {!isMobile ? (
          <Menu
          moveLinks={moveLinks}
          linksOut={linksOut}
            activeRoute={activeRoute}
            linkClicked={linkClicked}
            // tilt={true}
          />
        ) : (
          <Menu
            activeRoute={activeRoute}
            linkClicked={linkClicked}
            leftPart={false}
          />
        )}
      </div>
  
    </div>
  );
}

export default withRouter(ToggleMenu);
