import React, {useEffect, useRef} from "react";
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";

const Process = () => {
  const el = useRef();
  gsap.registerPlugin(ScrollTrigger);
    const q = gsap.utils.selector(el);
    const prTl = useRef();
    // useEffect(()=>{
    //   gsap.set(el.current, {background: "none"})
    //   prTl.current = gsap.timeline({
    //     scrollTrigger:{
    //       trigger: el.current,
    //       start: ()=> "top top+=5%",
    //       end: ()=> "bottom top",
    //       // markers: true,
    //       onEnter:(direction)=> gsap.to(el.current, {
    //         background:()=> direction=== 1? "none": "#000000",
    //         duration:0,
    //       }),
    //       onLeaveBack: (direction)=> gsap.to(el.current, {
    //         background:()=> direction=== 1? "#000000":"none",
    //         duration:0
    //       })
    //     }
    //   })
      
    // })
  return (
    <section className="process " ref={el}>
      
      <div className="process-head">
        <h3>
          The process has never been <span>easier</span>
        </h3>
      </div>

      <div className="process-grid">
        <div className="process-col">
          <h5>Send brief</h5>
          <p>
            Send us a completed brief along with documents and requirements to
            estimate the project and get started.
          </p>
        </div>

        <div className="process-col">
          <h5>Stay in touch</h5>
          <p>
            Review preliminary results and leave your feedback for us to
            continue or make corrections.
          </p>
        </div>
        <div className="process-col">
          <h5>Approve</h5>
          <p>
            Approve the draft version of the services you like and want us to
            deliver.
          </p>
        </div>
        <div className="process-col">
          <h5>Get results</h5>
          <p>
            Get your services with perfect quality design, details and
            visualization.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Process;
