import React, { useState, useRef, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { useAppContext } from "../../contexts/appcontext.js";
import ToggleMenu from "./ToggleMenu";
import { links } from "../../utils/constans";
import ThemeSwitch from "./../ThemeSwitch/ThemeSwitch";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Header({ history }) {
  const { isMenuOpen, isMobile, closeMenu, openMenu, pageTitle, ScrollYValue, contact } = useAppContext();

  const [atTheTop, setAtTheTop] = useState(true);
  const [mbBlur, setMbBlur] = useState(false);

  const [activePath, setActivePath] = useState('home');
  const [movebtn, setMoveBtn] = useState(false)

  const menuBg = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const setActiveRoute = () => {

    const loc = window.location.pathname.split("/")[1];
    
    if( loc !== activePath ) {

      window.scrollTo({
        top: 0,
        // behavior: 'smooth'
      })
      ScrollTrigger.update();
    }
    
    setActivePath(loc || "home");
  };

  history.listen(setActiveRoute);

  //  animations setup
  const el = useRef();
  const tempSvg = useRef();
  const mainSvg = useRef();

  
  useEffect(() => {
    if( ScrollYValue === 0 ) {
      gsap.set( mainSvg.current, {
        opacity: 0,
        y:20
      })
    } else {
      gsap.set( tempSvg.current, {
        opacity: 0,
        y:-27
      })
    }
    
  }, [])
  useEffect(()=>{
    // if(ScrollYValue === 10){
      const q = gsap.utils.selector(el);
      const navlinks = q(".navlinks-contain li.fadelinks");
      gsap.to(navlinks, {
        y: () => (ScrollYValue === 10 ? -20 : 0),
        duration: 0.5,
      })
      gsap.to(navlinks, {
        autoAlpha: () => (ScrollYValue === 10 ? 0 : 1),
        duration: 0.4,
      })
      gsap.to(tempSvg.current, {
        autoAlpha: () => (ScrollYValue === 10 ? 0 : 1),
        y: () => (ScrollYValue === 10 ? -20 : 0),
        duration: 0.25,
        ease: 'Power3.In'
      })
      gsap.to(mainSvg.current, {
        autoAlpha: () => (ScrollYValue === 10 ? 1 : 0),
        y: () => (ScrollYValue === 10 ? 0 : 27),
        duration: 0.25,
        ease: 'Power3.In'
      })
    // }
    // else if (ScrollYValue  === 0){

    // }
  }, [ScrollYValue])

  const mbScroll = (e) => {

    const scrollY = e.path[1].scrollY
    if( scrollY > 200 && !mbBlur ) setMbBlur(true)
    else if ( scrollY < 200 && mbBlur) setMbBlur(false)
  }

  useEffect(() => {

    if( isMobile ) {
      window.addEventListener('scroll', mbScroll)
    } else {
      window.removeEventListener('scroll',mbScroll)
    }

    return () => {
      window.removeEventListener('scroll',mbScroll)
    }
  }, [isMobile,mbBlur])

  // Change at the top and navFade and Logo chagne animation
  useEffect(() => {

    if (!activePath) {
      setActiveRoute();
    }

    const q = gsap.utils.selector(el);
    const navlinks = q(".navlinks-contain li.fadelinks");

    // const navFade = (direction, navlinks) => {

     
    //   direction=== 1 ? setAtTheTop(false) : setAtTheTop(true)
  
    //   return (
    //     gsap.to(navlinks, {
    //       y: () => (direction === 1 ? -20 : 0),
    //       duration: 0.5,
    //     }),
    //     gsap.to(navlinks, {
    //       autoAlpha: () => (direction === 1 ? 0 : 1),
    //       duration: 0.4,
    //     }),
    //     gsap.to(tempSvg.current, {
    //       autoAlpha: () => (direction === 1 ? 0 : 1),
    //       y: () => (direction === 1 ? -20 : 0),
    //       duration: 0.25,
    //       ease: 'Power3.In'
    //     }),
    //     gsap.to(mainSvg.current, {
    //       autoAlpha: () => (direction === 1 ? 1 : 0),
    //       y: () => (direction === 1 ? 0 : 27),
    //       duration: 0.25,
    //       ease: 'Power3.In'
    //     })
    //   );
    // };

    // ScrollTrigger.create({
    //   id: "navFade",
    //   start: "top top-=10vh",
    //   onEnter: ({direction})=> navFade(direction, navlinks),
    //   onLeaveBack: ({direction})=> navFade(direction, navlinks),
    // })
    return () => {
      // console.log(ScrollTrigger.getById("navFade"))
      // ScrollTrigger.getById("navFade").kill();
      // console.log("navfade killed")
    }
  }, [activePath,atTheTop]);

  // Lock Scroll if menu is open
  useEffect(() => {
    const q = gsap.utils.selector(el);
    const body = document.body
    const navs = q(".navlinks-contain li.fadelinks");
    if( isMenuOpen ) {
      if( !body.classList.contains('lock-scroll') ) {
        body.classList.add('lock-scroll')
        gsap.to([navs[3], navs[2], navs[1], navs[0]], {
          autoAlpha:0,
          duration:.2,
          stagger: .02,
        })
      }
      
    } else {
      if( body.classList.contains('lock-scroll') ) {
        body.classList.remove('lock-scroll')
        if(atTheTop){
        gsap.to(navs, {
          autoAlpha:1,
          duration:.3,
          // stagger: .05,
        })
      }
      }
    }

    return () => {

    }
  }, [isMenuOpen])
const moveBtn = (e)=>{
  const q = gsap.utils.selector(el);
  const estimateBtn = q(".estimateBtn");
  const {target}= e;
  const ofTop = target.getBoundingClientRect().top;
    const ofLeft = target.getBoundingClientRect().left;
    var s = e.clientX - ofLeft;
    var o = (e.clientY - ofTop)/34;
  setMoveBtn(true);
  // console.log(ofTop, o, e)
  gsap.to(estimateBtn, {
    x: ((s - target.offsetWidth / 2) / target.offsetWidth) * 25,
    y:( o - .5) * 6,
    // x:e.clientX,
    // y: e.clientY,
    ease: "Power3.inOut",
    duration: .3,
  });
}
  useEffect(() => {
    const q = gsap.utils.selector(el);
    const estimateBtn = q(".estimateBtn");
 
     if (!movebtn){
      gsap.to(estimateBtn,{
        x: 0,
        y:0,
        ease: "Power3.inOut",
        duration: .3,
      })
    }
    return () => {
      
    }
  }, [movebtn])
  useEffect(()=>{
    const q = gsap.utils.selector(el);
    console.log(contact)
    if (contact === "Contact"){
      gsap.to(q(".estimateBtn"), {
        autoAlpha:0,
        duration:.3,
      })
    }
    else {
      gsap.to(q(".estimateBtn"), {
        autoAlpha:1,
        duration:.3,
      })
    }

  },[contact])
  

  const toggleMenu = (e) => {
    
    e.stopPropagation()

    if (isMenuOpen && menuBg) {
      menuBg.current.click();
    } else if (!isMenuOpen) {
      openMenu();
    }
  };

  const closeMenuIfOpen = () => {
    if (isMenuOpen && menuBg) {
      menuBg.current.click();
    }
  };

  return (
    <>
      <ToggleMenu
        closer={closeMenu}
        isOpen={isMenuOpen}
        activeRoute={activePath}
        menuBgRef={menuBg}
        isMobile={isMobile}
      />

      <div
        className={`frame f-top ${isMobile && mbBlur && !isMenuOpen ? "blurBg" : ""} ${ isMenuOpen ? 'darkBg' : '' }`}
        ref={el}
        onScrollCapture={ (e) => {e.preventDefault(); e.stopPropagation()} }
        onClick={ (e) => e.stopPropagation()}
        onDragCapture={ (e) => e.stopPropagation() }
      >
        <div>
          <a
            href="/"
            className={`logo light ${ isMobile ? 'light' : ''}`}
            onClick={closeMenuIfOpen}
          >

            <svg className="sm-logo" ref={tempSvg} xmlns="http://www.w3.org/2000/svg" width="30.296" height="34.998" viewBox="0 0 30.296 34.998"><g transform="translate(-3356.85 6195.275)"><path d="M3387.147-6186.531v12.306l-7.642-4.411v-3.482l-7.506-4.334-7.507,4.334v3.482l-7.642,4.411v-12.306l15.148-8.746Z" transform="translate(0 0.001)" fill="#f5f5f7"/><path d="M3387.147-6169.041v8.764l-7.574-4.372-7.573,4.372-7.574-4.372-7.575,4.372v-8.764l3.6-2.081,4.038-2.333v.02L3372-6169.1l7.506-4.334v-.02l4.038,2.333Z" transform="translate(0 0)" fill="#f5f5f7"/></g></svg>

            <svg ref={mainSvg} xmlns="http://www.w3.org/2000/svg" width="52.538" height="35" viewBox="0 0 52.538 35"><g transform="translate(-195.128 -24.023)"><path d="M3051.979,911.042v3.123h-13.934v-3.123Z" transform="translate(-2804.693 -878.71)" /><path d="M2797.822,869.176h-5.762l-.924,2.727H2787.2l5.586-15.439h4.355l5.585,15.439h-3.98Zm-.968-2.9-1.913-5.652-1.892,5.652Z" transform="translate(-2592.072 -832.44)" /><path d="M2918.249,856.464V871.9h-3.76v-9.259l-3.453,9.259H2908l-3.474-9.281V871.9h-3.761V856.464h4.442l4.333,10.689,4.289-10.689Z" transform="translate(-2688.325 -832.44)" /><path d="M2839.654,996.635h-5.762l-.924,2.727h-3.937l5.586-15.439h4.355l5.586,15.439h-3.981Zm-.968-2.9-1.913-5.652-1.892,5.652Z" transform="translate(-2627.56 -940.448)" /><path d="M2950.468,999.361l-3.211-5.828h-.9v5.828h-3.76V983.923h6.311a6.952,6.952,0,0,1,3.112.638,4.4,4.4,0,0,1,1.924,1.748,4.884,4.884,0,0,1,.638,2.474,4.592,4.592,0,0,1-.869,2.749,4.675,4.675,0,0,1-2.562,1.715l3.563,6.114Zm-4.112-8.489h2.331a2.133,2.133,0,0,0,1.551-.506,1.908,1.908,0,0,0,.517-1.43,1.849,1.849,0,0,0-.517-1.386,2.135,2.135,0,0,0-1.551-.506h-2.331Z" transform="translate(-2723.795 -940.448)" /><path d="M3033.942,986.556a7.075,7.075,0,0,1,2.761-2.793,8.011,8.011,0,0,1,4.014-1,7.681,7.681,0,0,1,4.706,1.451,6.973,6.973,0,0,1,2.617,3.959h-4.134a3.347,3.347,0,0,0-1.309-1.474,3.682,3.682,0,0,0-1.924-.506,3.592,3.592,0,0,0-2.815,1.21,5.388,5.388,0,0,0,0,6.466,3.591,3.591,0,0,0,2.815,1.21,3.678,3.678,0,0,0,1.924-.506,3.344,3.344,0,0,0,1.309-1.474h4.134a6.921,6.921,0,0,1-2.617,3.948,7.721,7.721,0,0,1-4.706,1.44,8.008,8.008,0,0,1-4.014-1,7.093,7.093,0,0,1-2.761-2.782,8.884,8.884,0,0,1,0-8.148Z" transform="translate(-2800.374 -939.463)" /></g></svg>
            
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="89"
              height="31"
              viewBox="0 0 89 31"
              style={{ left: atTheTop ? '30px' : '0px'}}
            >
              <text
                id="am-arc"
                transform="translate(0 23)"
                fontSize="22"
                fontFamily="Poppins-SemiBold, Poppins"
                fontWeight="600"
                letterSpacing="0.01em"
              >
                <tspan x="0" y="0">
                  am-arc
                </tspan>
              </text>
            </svg> */}
          </a>

          <div className="navlinks-contain">
            {
              // .filter(({ ariaLabel }) =>
              //   isMenuOpen ? ariaLabel === "contact page" : true
              // )
              // .map((link) => {
              //   const { id, text, url, ariaLabel } = link;

              //   const urlpath = url.split("/")[1];

              //   return (
              //     <li
              //       key={id}
              //       className={
              //         ariaLabel === "contact page" ? "estimateBtn" : "fadelinks"
              //       }
              //       // style={ariaLabel === "contact page" ? pageTitle === "Contact" ? myst : undefined}
              //       onClick={closeMenuIfOpen}
              //       onMouseMove={ariaLabel === "contact page" ? (e)=> moveBtn(e) : null }
              //       onMouseLeave={ariaLabel === "contact page" ? ()=> setMoveBtn(false) : null }
              //     >
              //       <a
              //         href={url}
              //         aria-label={ariaLabel}
              //         className={`
              //           ${ariaLabel === "contact page" ? "btn" : ""}
              //           ${activePath === urlpath ? "active" : ""}
              //           ${ pageTitle === "Contact" && ariaLabel === "contact page" ? "disNone" : ""}
              //         `}
              //       >
              //         {text}
              //       </a>
              //     </li>
              //   );
              // })}
            }
            {isMobile && isMenuOpen && (
              <li className="mobile-theme-swithcer">
                <ThemeSwitch />
              </li>
            )}

            <li
              className={`menu ${isMenuOpen ? "active" : ""}`}
              onClick={toggleMenu}
            >
              {/* <div className="menuLines l1"></div> */}

              <div className="menu-trigger" onClick={toggleMenu}></div>

              <svg
                className="menuLines l1"
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="3"
                viewBox="0 0 27 3"
              >
                <rect
                  id="Rectangle_298"
                  data-name="Rectangle 298"
                  width="25"
                  height="2.5"
                  rx="1.5"
                  fill="#F5F5F7"
                />
              </svg>

              <svg
                className="menuLines l2"
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="3"
                viewBox="0 0 27 3"
              >
                <rect
                  id="Rectangle_298"
                  data-name="Rectangle 298"
                  width="25"
                  height="2.5"
                  rx="1.5"
                  fill="#F5F5F7"
                />
              </svg>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Header);
