import React from "react";
import "./about.scss";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
import img1 from "../assets/covers/ab2.webp";
import img1mb from "../assets/covers/abm2.webp";

import img2 from "../assets/covers/ab1.jpg";
import img2mb from "../assets/covers/abm1.jpg";

import winkle from "../assets/about.png";

// import imgMB from "../assets/aboutmb.jpg";

import { useAppContext } from "../contexts/appcontext";
const About = () => {
  // const el = useRef();
  // const myTl = useRef();
  // const imgTl = useRef();

  // gsap.registerPlugin(ScrollTrigger);
const {isMobile} = useAppContext();
  // const q = gsap.utils.selector(el);


  return (
    <div  style={{ position: "relative" }} id="stick">
      {/* <div style={{ height: "81vh" }}></div> */}
      <div className="texts-wrap" data-scroll data-scroll-sticky data-scroll-target="#stick">
        <div className="darkLayer"></div>
        {isMobile? 
       ( <div className="mb">
          <p>About</p>
          {/* <h2 >
            <div className="anim-lines"> We launch digital </div>   <div className="anim-lines">products in the</div>   <div className="anim-lines">best way possible.</div>  
          </h2> */}
        
        </div> )
        : ""}
        
         {/* <h2 id="headLines" style={{paddingTop:"150px"}}> */}
        <div id="headLines" >
          We launch digital products in the best way possible <img style={isMobile?{display:"none"}:{}}src={winkle} alt="pointer emoji"/>
        </div> 
        <h1 >
          We launch digital products in the best way possible <img style={isMobile?{display:"none"}:{}} src={winkle} alt="pointer emoji"/>
        </h1> 

           {/* </h2> */}
        
        
        
        
        <h5 style={!isMobile?{paddingTop:"1rem" }: null}>
        A creative agency with solid design & web development expertise.
        </h5>
      </div>
      <div className="image-wrap fc">
        <img src={isMobile?img2mb:img2} alt="team working" />
      </div>
      <div className="members-wrap" id="membs">
        <div className="mem-cont"  data-scroll data-scroll-sticky data-scroll-target="#membs" data-scroll-offset="0%,-80%">
        <div className="mem-row" >
        <div className="desat"></div>
          <div className="members naz"></div>
          <div className="back">
          <p className="label">Sr. Full-Stack Developer</p>
          <p className="name">Nazanin Esmaeilian</p>
          </div>
          <div className="mbtxt">
            <p>Nazanin Esmaeilian</p>
            <p>Sr. Full-Stack Developer</p>
          </div>
        </div>

        <div className="mem-row" >
        <div className="back">
        <p className="name">Amir <br/>Mohseni</p>
          <p>Creative Director</p>
        </div>
        <div className="desat"></div>
         <div className="members amir"></div>
         <div className="mbtxt">
            <p>Amir Mohseni</p>
            <p>Creative Director</p>
          </div>
        </div>
        <div className="mem-row" >
        <div className="back">
        <p className="label">Sr. Full-Stack Developer</p>

        <p className="name">Ilia <br/> Mohseni</p>
        </div>
        <div className="desat"></div>
         <div className="members iliya"></div>
         <div className="mbtxt">
            <p>Ilia Mohseni</p>
            <p>Sr. Full-Stack Developer</p>
          </div>
        </div>

        </div>


        
        {/* <div className="mem-row"> */}
        {/* <div className="back">
        <p className="name">Ilia Mohseni</p>
        <p className="label">Senior Full Stack Developer</p>

        </div> */}
          {/* <div className="members js">{isMobile?"Developer":"Full"}</div> */}
          {/* {!isMobile?<div className="members css">Stack</div> : null } */}
          {/* {!isMobile?<div className="members css">Dev</div> : null } */}
        {/* </div> */}
      </div>
      <div className="text-wrap2">
        <h5>
          Designing and building digital products is what we love to do, and we are awesome at it. We bet on success in every project we accept.
        </h5>
      </div>
      <div className="image-wrap so">
        <img src={isMobile?img1mb:img1} alt="team working"/>
      </div>
      
      {/* <div className="ab" > */}
      {/* <div className="text-wrap2 pi" id="im">
        <p data-scroll data-scroll-sticky data-scroll-target="#im" data-scroll-offset="-70%, 50%">
          <span>Philosophy</span> Less is more
        </p>
        {isMobile? <p >Worldwide <span style={{  position: "relative",top: "0", display: "block"}}>we work with</span></p> : 
          <p data-scroll data-scroll-sticky data-scroll-target="#im" data-scroll-offset="-70%, 50%">Worldwide, we work with</p>
        }
      
      </div>
      </div> */}
      <div className="phil-con">
        <div className="phil">
          <p >
           <span>Philosophy</span> Less is more
         </p>
        </div>

        <div className="phil">
         <p >
            Worldwide, we work with
          </p>
        </div>

      </div>
    </div>
  );
};
export default About;
