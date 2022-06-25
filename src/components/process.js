import React, {useEffect, useRef} from "react";
import gsap from "gsap"
import {Link, useHistory} from "react-router-dom"
import ScrollTrigger from "gsap/ScrollTrigger";
import { useAppContext } from "../contexts/appcontext";
import hand from "../assets/hand.png"
const Process = () => {
  const el = useRef();
  gsap.registerPlugin(ScrollTrigger);
    const q = gsap.utils.selector(el);
    const prTl = useRef();
    const myref=useRef();
    const {changePointer, isMobile}=useAppContext();
    const setreverse = ()=>{
      gsap.to(q(".process-col:first-child"),{
        scale:1.02,
        duration:.25,
        ease:"power3.Out"
      })
     gsap.fromTo(q(".ripple"), {
      yPercent: -100,
      autoAlpha:0,
      borderRadius: "50%",
     },{
      yPercent:0,
      autoAlpha:1,
      borderRadius: "40px",
      duration:.4,
     })
    }
    const setnormal= ()=>{
      gsap.to(q(".process-col:first-child"),{
        scale:1,
        duration:.25,
        ease:"power3.In"
      })
      gsap.to(q(".ripple"),{
        yPercent:100,
        borderRadius:"50%",
        duration:.4,
      })
      gsap.to(q(".process-col:first-child"), {
        x: 0,
        y:0,
      //   // x:e.clientX,
      //   // y: e.clientY,
        ease: "Power3.inOut",
        duration: .3,
      });
    }
    const movecol = (e)=>{
      const {target}= e;
      const ofTop = target.getBoundingClientRect().top;
      const ofLeft = target.getBoundingClientRect().left;
      var s = e.clientX - ofLeft;
      var o = (e.clientY - ofTop);
      // console.log(o )
    
    gsap.to(q(".process-col:first-child"), {
      x: ((s - target.offsetWidth / 2) / target.offsetWidth) * 17,
      y:( (o -target.offsetHeight / 2) / target.offsetHeight) * 10,
    //   // x:e.clientX,
    //   // y: e.clientY,
      ease: "Power3.inOut",
      duration: .3,
    });
    }
    const histori = useHistory();
  const handleclick =() => histori.push('/contact');
   
  return (
    <section data-scroll className="process " ref={el} id="pro" style={isMobile? {}:{height: "190vh"}}>
      <div className="prtrig" data-scroll data-scroll-sticky data-scroll-target="#pro" data-scroll-offset="0,72%">
      <div className="process-head">
        <h3>
        How it works
        </h3>
      </div>

      <div className="process-grid">
        <div ref={myref}className="process-col" onMouseMove={movecol} onMouseEnter={setreverse} onMouseLeave={setnormal} onClick={handleclick}>
        <img src={hand}/>
        <div className="ripple"></div>
          <Link to="/contact"
          // onMouseOver={()=> changePointer({isHover: true, color:{bg:"#ffffff", txt: "#000000"}, text: "", blend:true,})}
          // onMouseLeave={()=> changePointer({isHover: false})}
          > <h5>Send brief</h5></Link>
          <p>
          Send us a complete brief along with documents & requirements to estimate the project & <span>get started.</span>
          </p>
        </div>

        <div className="process-col">
          <h5>Stay in touch</h5>
          <p>
          Review preliminary results and leave your feedback for us to continue or make corrections.
          </p>
        </div>
        <div className="process-col">
          <h5>Approve</h5>
          <p>
          Approve the draft version of the services you like and want us to deliver.
          </p>
        </div>
        <div className="process-col">
          <h5>Get results</h5>
          <p>
          Receive the perfect quality of your services on-time & leave us a review if you like.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};
export default Process;
