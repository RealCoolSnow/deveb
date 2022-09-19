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
        gsap.fromTo(menu_Bottom,{
          autoAlpha:0,

        },{
          autoAlpha:1,
          delay: .3,
          duration:.1,
        })
        gsap.fromTo(menu_RightItems, {
          autoAlpha: 0,

        },{
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
   
    }
    
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
    // if (name !== activeRoute) {
      closeMenuAnim();

      setTimeout(() => {
        closer();
      }, 800);
    // }
  };


  
  const moveLinks = (e) => {
    const { target} = e;
    // const { clientWidth, clientHeight } = target;

    const ofTop = target.getBoundingClientRect().top - 45 ;
    const ofLeft = target.getBoundingClientRect().left;
    var s = e.clientX - ofLeft;
    var o = e.clientY - ofTop;
    

    // console.log( s,e.clientY , ofTop )
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
