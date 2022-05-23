import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import whats from "../assets/whs.svg";
import be from "../assets/be.svg";
import up from "../assets/up.svg";
import insta from "../assets/insta.svg";
import foot from "../assets/footlogo.svg";
import git from "../assets/git.svg";
import drib from "../assets/dribbble.svg";


import { useAppContext } from "../contexts/appcontext.js";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const el = useRef(null);
  const q = gsap.utils.selector(el);
  const myTl = useRef();
  const copycl = useRef();
  const {changePp, changePointer} = useAppContext();
  const [emailHover, setEmHover] = useState(false);
  const [hover,sethover]=useState();

  const btnmove = (e) => {
    const q = gsap.utils.selector(el);
    const btnArea = q(".cobtn-contain");
    const {target}= e;
    const ofTop = target.getBoundingClientRect().top;
      const ofLeft = target.getBoundingClientRect().left;
      var s = e.clientX - ofLeft;
      var o = (e.clientY - ofTop)/e.target.getBoundingClientRect().height;
      // console.log(o, e.target.getBoundingClientRect().height)
      console.log(e.target)
    gsap.to(e.target, {
      x: ((s - target.offsetWidth / 2) / target.offsetWidth) * 20,
      y:( o - .5) * 10,
      ease: "Power3.inOut",
      duration: .5,
    });

  };
  const btnL = (e)=>{
    const btnArea = q(".cobtn-contain");

    gsap.to(e.target, {
      x: 0,
      y:0,
      ease: "Power3.inOut",
      duration: .5,
    });
  }
  // useEffect(()=>{
  //   if(emailHover){
  //     gsap.to(q(".footer-secs.l"),{
  //       autoAlpha:1,
  //       duration:.3,
  //     })
  //   }
  // },[emailHover])
  function copyToClipboard() {
    var from = copycl.current;
    var range = document.createRange();
    window.getSelection().removeAllRanges();
    range.selectNode(from);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    changePointer({isHover: true, color:{bg:"#000", txt: "#fff"}, text: "copied ✓"})
}
const growfil = ()=>{
  gsap.to(q(".f-filler"), {
    scale:40,
    transformOrigin:"center",
    duration:.6,
    ease:"power3.inOut"
    // top:"50%",
    // left:"50%",
    // xPercent:-50,
    // yPercent:-50,
  });
  sethover(true)
}
const shrinkfil = ()=>{
  gsap.to(q(".f-filler"), {
    scale:1,
    duration:.6,
    ease:"power3.inOut"
    // top:"0%",
    // left:"0%",
  })
  sethover(false)
}
const movefil= (e)=>{
  gsap.to(q(".f-filler"),{
    x:e.clientX,
    y:e.clientY,
  })
}
  useEffect(() => {
    // ScrollTrigger.refresh();

      gsap.set(q(".backgr"), {
        autoAlpha:0,
      });
      // const changeBg = (direction)=>{
      //   console.log(direction)
      //   gsap.to(q(".backgr"), { 
      //     autoAlpha: ()=> (direction === 1? 1: 0),
      //     duration:1
      //   })
      //   direction === 1? changePp("Contact"): changePp("other")
      // }
      // const prt1 =q(".footer-main h6");
      // const prt2 = q(".tabs-holder");
      // const prt3 = q(".footer-foot");
      gsap.set(q(".trig"), {
        autoAlpha:0,
        // yPercent:60,
      })

  
  }, []);
  return (
    <section ref={el}  id="bab"   className="sec-form footer-sec fot" onMouseMove={movefil} >
      <div className="trig">
        <div className="backgr" data-scroll data-scroll-sticky data-scroll-target="#bab"></div>
        <div className="footer-main">
          <div className="f-filler"></div>

          <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 729.43 729.425" >
            <defs>
              <filter id="a" x="0" y="0" width="729.43" height="729.425" filterUnits="userSpaceOnUse">
                <feOffset dy="3"/>
                <feGaussianBlur stdDeviation="15" result="blur"/>
                <feFlood flood-opacity=".02"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
              </filter>
            </defs>
            <g data-name="Group 1200">
              <g filter="url(#a)" data-name="Group 1199">
               <path onMouseEnter={growfil} onMouseLeave={shrinkfil} data-name="Path 418" d="M556.58 105.892A319.757 319.757 0 0 0 45.004 361.709c0 176.559 143.154 319.712 319.713 319.712 173.826 0 315.135-138.746 319.541-311.495q.176-4.109.176-8.218V41.997a159.711 159.711 0 0 0-127.854 63.895Z" fill="#fff" />
             </g>
            </g>
          </svg>
          <div className="foot-cta">
            <h6>
              <span>Click to</span>
              Get in touch
            </h6>
          </div>
        
        </div>
        <div className="footer-foot">
          <div className="footer-secs l">
            <h5 
            onClick={()=>copyToClipboard()}
            onMouseEnter={()=> changePointer({isHover: true, color:{bg:"#000", txt: "#fff"}, text: "Click to copy"})} 
            onMouseLeave={()=>changePointer(false)}
            className={emailHover? "active" : ""}
            ref={copycl}
            >
              Info@deveb.co
            </h5>
            <p>Mechnykova St, 2, Kyiv, 02000</p>
          </div>
          <div className="footer-secs r">
            <div>
              <a href="https://www.instagram.com/am__arc/?hl=en" target="_blank"><img className="insta" src={insta} /></a>
              <a href="https://www.upwork.com/fl/am1amirmohseni" target="_blank"><img className="drib" src={drib} /></a>
              <a href="https://www.behance.net/amirmohseni" target="_blank"><img className="be" src={be} /></a>
              <a href="https://t.me/am_arc_com" target="_blank"><img className="git" src={git} /></a>
              <a href="https://api.whatsapp.com/send?phone=380970006043" target="_blank"> <img className="whats" src={whats} /></a>
            </div>
            <Link to="/privacyandpolicy">
            <p>Privacy Policy</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
