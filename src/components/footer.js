import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import whats from "../assets/whs.svg";
import be from "../assets/be.svg";
import up from "../assets/up.svg";
import insta from "../assets/insta.svg";
import tele from "../assets/telegram.svg";
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
    changePointer({isHover: true, color:{bg:"#ffffff", txt: "#3d7299"}, text: "copied ✓"})
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
    <section ref={el}  id="bab"   className="sec-form footer-sec fot" >
      <div className="trig">
        <div className="backgr" data-scroll data-scroll-sticky data-scroll-target="#bab"></div>
        <div className="footer-main">
          <h6>
            We are always <br />
            <span>
              happy to <p>help</p>
            </span>
          </h6>

          <div className="tabs-holder" data-scroll data-scroll-speed=".8">
            <div className="cobtn-contain" >
                <div className="bt-mera" onMouseMove={btnmove} onMouseLeave={btnL}>
                 <Link className="co-btn co-white" to="/contact"  >
                    <span>Send brief</span>
                  </Link>
                </div>
             
            </div>
            <div className="cobtn-contain" onMouseMove={btnmove} onMouseLeave={btnL}>
            <div className="bt-mera" onMouseMove={btnmove} onMouseLeave={btnL}>
                 <Link className="co-btn co-white" to={{pathname: "/contact",state: { contact: true },}}  >
                    <span>Contact us</span>
                  </Link>
                </div>
            </div>
          </div>
        </div>
        <div className="footer-foot">
          <div className="footer-secs l">
            <h5 
            onClick={()=>copyToClipboard()}
            onMouseEnter={()=> changePointer({isHover: true, color:{bg:"#ffffff", txt: "#3d7299"}, text: "Click to copy"})} 
            onMouseLeave={()=>changePointer(false)}
            className={emailHover? "active" : ""}
            ref={copycl}
            >
              am@am-arc.com
            </h5>
            <p>Mechnykova St, 2, Kyiv, 02000</p>
          </div>
          <div className="footer-secs r">
            <div>
              <a href="https://www.behance.net/amirmohseni" target="_blank"><img className="be" src={be} /></a>
              <a href="https://www.upwork.com/fl/am1amirmohseni" target="_blank"><img className="up" src={up} /></a>
              <a href="https://www.instagram.com/am__arc/?hl=en" target="_blank"><img className="insta" src={insta} /></a>
              <a href="https://t.me/am_arc_com" target="_blank"><img className="tele" src={tele} /></a>
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
