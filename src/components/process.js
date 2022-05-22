import React, {useEffect, useRef} from "react";
import gsap from "gsap"
import {Link} from "react-router-dom"
import ScrollTrigger from "gsap/ScrollTrigger";
import { useAppContext } from "../contexts/appcontext";
import hand from "../assets/hand.jpg"
const Process = () => {
  const el = useRef();
  gsap.registerPlugin(ScrollTrigger);
    const q = gsap.utils.selector(el);
    const prTl = useRef();
    const {changePointer}=useAppContext();
   
  return (
    <section data-scroll className="process " ref={el} id="pro" style={{height: "190vh"}}>
      <div className="prtrig" data-scroll data-scroll-sticky data-scroll-target="#pro" data-scroll-offset="0,72%">
      <div className="process-head">
        <h3>
        How it works
        </h3>
      </div>

      <div className="process-grid">
        <div className="process-col">
          <Link to="/contact"
          onMouseOver={()=> changePointer({isHover: true, color:{bg:"#ffffff", txt: "#000000"}, text: "", blend:true,})}
          onMouseLeave={()=> changePointer({isHover: false})}
          > <h5>Send brief<img src={hand}/></h5></Link>
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
