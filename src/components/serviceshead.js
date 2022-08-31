import React, { useRef, useEffect, useState } from "react";
import "../serv.scss";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import design from "../assets/design1.jpg"
import viz from "../assets/viz.jpg"
// import vid from "../assets/img/Visualization.mp4"
import { useAppContext } from "../contexts/appcontext.js";





gsap.registerPlugin(ScrollTrigger);
const style = {
  background: "radial-gradient(50% 42.9% at 50% 42.91%, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.549) 100%)",
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  opacity: .5,
}
const ServHead = React.forwardRef((props, ref) => (
    <section className="sec-grid-contain" >
      <div className="serv-head-contain">
        <div className="serv-text">
          <p>
            <span>{props.num}</span>
            {props.text}
          </p>
        </div>
      </div>
      <div className="aside-wrapper">
        <div className="aside" 
        data-img= { props.text === "Visualization" ? viz  : design}
        // style={{background: "url("+ `${text=== "Visualization"? viz : design}`+")", backgroundSize: "cover" }}
        >
          <canvas id="canva" ref={ref}/>
          <div className="drkLayer" style={style}></div>
          
        </div>
      </div>
    </section>
  ))

export default ServHead;
