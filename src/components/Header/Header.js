import React, { useState, useRef, useEffect,useLayoutEffect } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import { useAppContext } from "../../contexts/appcontext.js";
import ToggleMenu from "./ToggleMenu";
import { links } from "../../utils/constans";
// import ThemeSwitch from "./../ThemeSwitch/ThemeSwitch";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Header({ history }) {
  const {
    isMenuOpen,
    isMobile,
    closeMenu,
    openMenu,
    pageTitle,
    ScrollYValue,
    contact,
  } = useAppContext();

  const [activePath, setActivePath] = useState("home");
  const [movebtn, setMoveBtn] = useState(false);

  const menuBg = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const setActiveRoute = () => {
    const loc = window.location.pathname.split("/")[1];

    if (loc !== activePath) {
      window.scrollTo({
        top: 0,
      });
      ScrollTrigger.update();
    }

    setActivePath(loc || "home");
  };

  history.listen(setActiveRoute);

  //  animations setup
  const el = useRef();
  const tempSvg = useRef();
  const mainSvg = useRef();

  useLayoutEffect(()=>{
    const q = gsap.utils.selector(el);
    gsap.set(q(".estimateBtn p")[1],{yPercent:-150, xPercent:0})
    gsap.set(q(".estimateBtn p")[0],{xPercent:100, yPercent:-50,})

  },[isMobile])
  useEffect(() => {
    if (ScrollYValue === 0) {
      gsap.set(mainSvg.current, {
        opacity: 0,
        y: 20,
      });
    } else {
      gsap.set(tempSvg.current, {
        opacity: 0,
        y: -27,
      });
    }
    const loc = window.location.pathname.split("/")[1];
    setActivePath(loc || "home");
   
  }, []);

  useEffect(() => {
    // if(ScrollYValue === 10){
    const q = gsap.utils.selector(el);

    const navlinks = q(".navlinks-contain li.fadelinks");
    gsap.to(navlinks, {
      y: () => (ScrollYValue === 10 ? -20 : 0),
      duration: 0.5,
    });
    gsap.to(navlinks, {
      autoAlpha: () => (ScrollYValue === 10 ? 0 : 1),
      duration: 0.4,
    });
    gsap.to(tempSvg.current, {
      autoAlpha: () => (ScrollYValue === 10 ? 0 : 1),
      y: () => (ScrollYValue === 10 ? -20 : 0),
      duration: 0.25,
      ease: "Power3.In",
    });
    gsap.to(mainSvg.current, {
      autoAlpha: () => (ScrollYValue === 10 ? 1 : 0),
      y: () => (ScrollYValue === 10 ? 0 : 27),
      duration: 0.25,
      ease: "Power3.In",
    });
  }, [ScrollYValue]);

  // Change at the top and navFade and Logo chagne animation
  useEffect(() => {
    if (!activePath) {
      setActiveRoute();
    }

    const q = gsap.utils.selector(el);
    // const navlinks = q(".navlinks-contain li.fadelinks");

    return () => {
    };
  }, [activePath]);

  // Lock Scroll if menu is open
  useEffect(() => {
    const q = gsap.utils.selector(el);
    const body = document.body;
    const navs = q(".navlinks-contain li.fadelinks");
    if (isMenuOpen) {
      if (!body.classList.contains("lock-scroll")) {
        body.classList.add("lock-scroll");
        gsap.to([navs[2], navs[1], navs[0]], {
          autoAlpha: 0,
          duration: 0.2,
          stagger: 0.02,
        });
      }
      gsap.to(q(".menuLines.l1"), {
        rotate: -45,
        y: () => (isMobile ? 4 : 3),
        x: () => (isMobile ? 0 : 0),
        duration: 0.4,
      });
      gsap.to(q(".menuLines.l2"), {
        rotate: 45,
        y: () => (isMobile ? -3 : -4),
        x: () => (isMobile ? 0 : 0),
        duration: 0.4,
      });
    } else {
      gsap.to(q(".menuLines.l1,.menuLines.l2 "), {
        rotate: 0,
        y: 0,
        x: 0,
        duration: 0.4,
      });
      if (body.classList.contains("lock-scroll")) {
        body.classList.remove("lock-scroll");
        if (ScrollYValue < 10) {
          gsap.to(navs, {
            autoAlpha: 1,
            duration: 0.3,
            // stagger: .05,
          });
        }
      }
    }

    return () => {};
  }, [isMenuOpen, isMobile]);
  const moveBtn = (e) => {
    const q = gsap.utils.selector(el);
    const estimateBtn = q(".estimateBtn");
    const { target } = e;
    const ofTop = target.getBoundingClientRect().top;
    const ofLeft = target.getBoundingClientRect().left;
    var s = e.clientX - ofLeft;
    var o = (e.clientY - ofTop) / 34;
    setMoveBtn(true);
    // console.log(ofTop, o, e)
    gsap.to(estimateBtn, {
      x: ((s - target.offsetWidth / 2) / target.offsetWidth) * 25,
      y: (o - 0.5) * 6,
      // x:e.clientX,
      // y: e.clientY,
      ease: "Power3.inOut",
      duration: 0.3,
    });
  };
  useEffect(() => {
    const q = gsap.utils.selector(el);
    const estimateBtn = q(".estimateBtn");

    if (!movebtn) {
      gsap.to(estimateBtn, {
        x: 0,
        y: 0,
        ease: "Power3.inOut",
        duration: 0.3,
      });
    }
    return () => {};
  }, [movebtn]);
  useEffect(() => {
    const q = gsap.utils.selector(el);
    // console.log(contact);
    if (contact === "Contact") {
      gsap.to(q(".estimateBtn"), {
        autoAlpha: 0,
        duration: 0.3,
      });
    } else {
      gsap.to(q(".estimateBtn"), {
        autoAlpha: 1,
        duration: 0.3,
      });
    }
  }, [contact]);
  useEffect(()=>{
    const q = gsap.utils.selector(el);

    gsap.to(q(".estimateBtn p")[1],{
      xPercent: -100,
      duration:3.5,
      repeat:-1,
      repeatDelay:.01,
      ease:"none",
      // yoyo:true,
    })
    gsap.to(q(".estimateBtn p")[0],{
      xPercent: 0,
      duration:3.5,
      repeat:-1,
      repeatDelay:0.01,
      ease:"none",
      // yoyo:true,
    })
  },[])
  const histori = useHistory();
  const handleclick =() =>{ 
    closeMenuIfOpen()
    histori.push('/contact');
  }
  const toggleMenu = (e) => {
    e.stopPropagation();

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
        className={`frame f-top ${isMenuOpen ? "darkBg" : ""}`}
        ref={el}
        onScrollCapture={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onClick={(e) => e.stopPropagation()}
        onDragCapture={(e) => e.stopPropagation()}
      >
        <div>
          <Link
            to="/"
            className={`logo light ${isMobile ? "light" : ""}`}
            onClick={closeMenuIfOpen}
          >
            {/* <svg className="sm-logo" ref={tempSvg} xmlns="http://www.w3.org/2000/svg" width="30.296" height="34.998" viewBox="0 0 30.296 34.998"><g transform="translate(-3356.85 6195.275)"><path d="M3387.147-6186.531v12.306l-7.642-4.411v-3.482l-7.506-4.334-7.507,4.334v3.482l-7.642,4.411v-12.306l15.148-8.746Z" transform="translate(0 0.001)" fill="#f5f5f7"/><path d="M3387.147-6169.041v8.764l-7.574-4.372-7.573,4.372-7.574-4.372-7.575,4.372v-8.764l3.6-2.081,4.038-2.333v.02L3372-6169.1l7.506-4.334v-.02l4.038,2.333Z" transform="translate(0 0)" fill="#f5f5f7"/></g></svg> */}
            <svg className="sm-logo"  ref={tempSvg} xmlns="http://www.w3.org/2000/svg"  width="38" height="38"  viewBox="0 0 38 38" >
              <g id="Group_1188" data-name="Group 1188" transform="translate(-1146.95 436.62)" >
                <g id="Group_1187" data-name="Group 1187" transform="translate(1146.95 -436.62)" >
                  <path  id="Path_411" data-name="Path 411" d="M1177.352-430.823a18.923,18.923,0,0,0-11.4-3.8,18.937,18.937,0,0,0-13.433,5.563,18.939,18.939,0,0,0-5.567,13.437,19,19,0,0,0,19,19,19,19,0,0,0,18.99-18.512q.011-.244.011-.488v-19A9.491,9.491,0,0,0,1177.352-430.823Zm-11.4,15.2a9.494,9.494,0,0,0,4.749,8.228,9.436,9.436,0,0,1-4.749,1.274,9.5,9.5,0,0,1-9.5-9.5,9.5,9.5,0,0,1,9.5-9.5,9.5,9.5,0,0,1,9.5,9.5Z"  transform="translate(-1146.95 434.62)"  fill="#1a1a1a" />
                </g>
              </g>
            </svg>
            <svg ref={mainSvg} xmlns="http://www.w3.org/2000/svg" width="53.898" height="35" viewBox="0 0 53.898 35">
              <g id="Group_1156" data-name="Group 1156" transform="translate(-2211.843 258.998)">
               <path id="Path_376" data-name="Path 376" d="M2249.69-230.507h-11.323a4.11,4.11,0,0,0,1.317,2.852,4.162,4.162,0,0,0,2.905,1.076,3.587,3.587,0,0,0,3.5-2.072h3.308a6.678,6.678,0,0,1-2.434,3.349,7.142,7.142,0,0,1-4.371,1.3,7.565,7.565,0,0,1-3.806-.954,6.79,6.79,0,0,1-2.636-2.69,8.21,8.21,0,0,1-.954-4.021,8.4,8.4,0,0,1,.927-4.021,6.524,6.524,0,0,1,2.609-2.676,7.764,7.764,0,0,1,3.86-.942,7.545,7.545,0,0,1,3.739.915,6.462,6.462,0,0,1,2.555,2.568,7.734,7.734,0,0,1,.915,3.806A9.531,9.531,0,0,1,2249.69-230.507Zm-3.093-2.474a3.493,3.493,0,0,0-1.21-2.717,4.332,4.332,0,0,0-2.932-1.022,3.941,3.941,0,0,0-2.717,1.009,4.217,4.217,0,0,0-1.345,2.73Z" fill="#1a1a1a"/>
               <g id="Group_1154" data-name="Group 1154">
                 <path id="Path_377" data-name="Path 377" d="M2256.965-237.824a5.8,5.8,0,0,1,2.657-.6,5.984,5.984,0,0,1,3.118.828,5.81,5.81,0,0,1,2.2,2.35,7.354,7.354,0,0,1,.8,3.484,7.488,7.488,0,0,1-.8,3.507,5.992,5.992,0,0,1-2.209,2.41,5.821,5.821,0,0,1-3.106.862,5.88,5.88,0,0,1-2.681-.59,5.167,5.167,0,0,1-1.854-1.512v1.89h-2.693v-15.909h2.693v4.83A5.125,5.125,0,0,1,2256.965-237.824Zm5.48,3.732a3.805,3.805,0,0,0-1.464-1.488,3.939,3.939,0,0,0-1.949-.508,3.823,3.823,0,0,0-1.925.52,3.865,3.865,0,0,0-1.465,1.512,4.708,4.708,0,0,0-.555,2.338,4.777,4.777,0,0,0,.555,2.35,3.836,3.836,0,0,0,1.465,1.523,3.813,3.813,0,0,0,1.925.52,3.791,3.791,0,0,0,1.949-.531,3.916,3.916,0,0,0,1.464-1.547,4.848,4.848,0,0,0,.555-2.362A4.649,4.649,0,0,0,2262.445-234.092Z" fill="#1a1a1a"/>
               </g>
               <path id="Path_378" data-name="Path 378" d="M2227.537-227.525l-4.092-11.777h-3.174l5.508,14.452h3.567l5.482-14.452h-3.2Z" fill="#1a1a1a"/>
               <path id="Path_379" data-name="Path 379" d="M2242.283-248.4H2230.96a4.105,4.105,0,0,0,1.317,2.851,4.158,4.158,0,0,0,2.9,1.077,3.589,3.589,0,0,0,3.5-2.072h3.308a6.678,6.678,0,0,1-2.434,3.349,7.142,7.142,0,0,1-4.371,1.3,7.574,7.574,0,0,1-3.806-.954,6.788,6.788,0,0,1-2.636-2.69,8.213,8.213,0,0,1-.955-4.021,8.4,8.4,0,0,1,.928-4.021,6.535,6.535,0,0,1,2.609-2.677,7.772,7.772,0,0,1,3.86-.942,7.546,7.546,0,0,1,3.739.916,6.463,6.463,0,0,1,2.555,2.568,7.734,7.734,0,0,1,.915,3.806A9.54,9.54,0,0,1,2242.283-248.4Zm-3.093-2.474a3.491,3.491,0,0,0-1.21-2.717,4.333,4.333,0,0,0-2.932-1.022,3.94,3.94,0,0,0-2.717,1.008,4.219,4.219,0,0,0-1.345,2.731Z" fill="#1a1a1a"/>
               <g id="Group_1155" data-name="Group 1155">
                 <path id="Path_380" data-name="Path 380" d="M2220.618-255.714a5.8,5.8,0,0,0-2.657-.6,5.989,5.989,0,0,0-3.118.828,5.8,5.8,0,0,0-2.2,2.35,7.366,7.366,0,0,0-.8,3.484,7.5,7.5,0,0,0,.8,3.507,6,6,0,0,0,2.209,2.41,5.83,5.83,0,0,0,3.106.862,5.88,5.88,0,0,0,2.681-.59,5.178,5.178,0,0,0,1.854-1.512v1.889h2.693V-259H2222.5v4.831A5.107,5.107,0,0,0,2220.618-255.714Zm-5.48,3.732a3.8,3.8,0,0,1,1.464-1.488,3.942,3.942,0,0,1,1.949-.508,3.819,3.819,0,0,1,1.926.52,3.866,3.866,0,0,1,1.464,1.511,4.715,4.715,0,0,1,.555,2.339,4.777,4.777,0,0,1-.555,2.35,3.84,3.84,0,0,1-1.464,1.523,3.819,3.819,0,0,1-1.926.52,3.8,3.8,0,0,1-1.949-.531,3.919,3.919,0,0,1-1.464-1.548,4.844,4.844,0,0,1-.555-2.361A4.647,4.647,0,0,1,2215.138-251.982Z" fill="#1a1a1a"/>
               </g>
             </g>
            </svg>

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
          </Link>

          <div className="navlinks-contain">
            {links
              // .filter(({ ariaLabel }) =>
              //   isMenuOpen ? ariaLabel === "contact page" : true
              // )
              .map((link) => {
                const { id, text, url, ariaLabel } = link;

                const urlpath = url.split("/")[1];

                return (
                  <li
                    key={id}
                    className={
                      ariaLabel === "contact page" ? `estimateBtn ${pageTitle=== "contact" && "con-dn"}` : `fadelinks ${pageTitle === "sp" && "dn"}`
                    }
                    // style={ariaLabel === "contact page" ? pageTitle === "Contact" ? myst : undefined}
                    onClick={ariaLabel === "contact page"?
                    handleclick
                    :closeMenuIfOpen}
                    onMouseMove={
                      ariaLabel === "contact page" ? (e) => moveBtn(e) : null
                    }
                    onMouseLeave={
                      ariaLabel === "contact page"
                        ? () => setMoveBtn(false)
                        : null
                    }
                    // onClick={handleclick}
                  >
                {   
                ariaLabel === "contact page" ? 
                  <div className="contactbtn-wrap">
                       <Link
                      to={url}
                      aria-label={ariaLabel}
                      className={`
                        ${ariaLabel === "contact page" ? "btn" : ""}
                        ${activePath === urlpath ? "active" : ""}
                        ${
                          pageTitle === "Contact" &&
                          ariaLabel === "contact page"
                            ? "disNone"
                            : ""
                        }
                      `}
                    >
                      <p>{text}</p>
                      <p>{text}</p>
                    </Link>
                  </div>
                :
                
                <Link
                      to={url}
                      aria-label={ariaLabel}
                      className={`
                        ${ariaLabel === "contact page" ? "btn" : ""}
                        ${activePath === urlpath ? "active" : ""}
                        ${
                          pageTitle === "Contact" &&
                          ariaLabel === "contact page"
                            ? "disNone"
                            : ""
                        }
                      `}
                    >
                      {text}
                    </Link>
                    
                    }
                  </li>
                );
              })}

            {/* {isMobile && isMenuOpen && (
              <li className="mobile-theme-swithcer">
                <ThemeSwitch />
              </li>
            )} */}

            <li
              className={`menu ${isMenuOpen ? "active" : ""}`}
              onClick={toggleMenu}
            >
              {/* <div className="menuLines l1"></div> */}

              <div className="menu-trigger" onClick={toggleMenu}></div>

              <svg
                className="menuLines l1"
                xmlns="http://www.w3.org/2000/svg"
                // width="27"
                // height="3"
                viewBox="0 0 27 3"
              >
                <rect
                  id="Rectangle_298"
                  data-name="Rectangle 298"
                  width="25"
                  height="2.5"
                  rx="1.5"
                  fill="#1a1a1a"
                />
              </svg>

              <svg
                className="menuLines l2"
                xmlns="http://www.w3.org/2000/svg"
                // width="27"
                // height="3"
                viewBox="0 0 27 3"
              >
                <rect
                  id="Rectangle_298"
                  data-name="Rectangle 298"
                  width="25"
                  height="2.5"
                  rx="1.5"
                  fill="#1a1a1a"
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
