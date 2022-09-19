  
import React, {useEffect, useLayoutEffect, useRef} from "react";
import useLoco from "../utils/useLoco.js";
import { useAppContext } from "../contexts/appcontext.js";
import {Link} from "react-router-dom"
import gsap from "gsap";

import "./links.scss";
import Helmet from "react-helmet";
const Links = () => {
  const {isMobile, changePointer} = useAppContext();
  
//    useLoco(!isMobile);
   const el = useRef();
   const q = gsap.utils.selector(el);
  const fooT= useRef();

//   useEffect(() => {
//     setTimeout(() => {
//       setReset()
//     }, 500);
//   },[isMobile])
useLayoutEffect(()=>{
    gsap.set(el.current,{
        backgroundColor:"#000000",
    })
   if(!isMobile){ changePointer({isHover: true, color:{bg:"#ffffff", txt: "#000000"}, text: "", blend:true,sesize:".22"})}

},[isMobile])
const leavem = (e)=>{

    // linksOut(e);
    changePointer({isHover: true, color:{bg:"#ffffff", txt: "#000000"}, text: "", blend:true,sesize:".22"})

  }
  const entlink = ()=>{
    if (isMobile === false ){
      changePointer({isHover: true, color:{bg:"#ffffff", txt: "#000000"}, text: "", blend:true,})}
  }

  return (
    <>
    <main id="viewport" data-scroll-container ref={el}>

      <Helmet>
        <title>Deveb | Links</title>
        <meta name="description" content="our Privacy and Policy" />
      </Helmet>

       <div  className="links-container">
      <div className="links">
      <p className="logolabel">
      <svg xmlns="http://www.w3.org/2000/svg" width="53.898" height="35" viewBox="0 0 53.898 35">
  <g id="Group_1156" data-name="Group 1156" transform="translate(-2211.843 258.998)">
    <path id="Path_376" data-name="Path 376" d="M2249.69-230.507h-11.323a4.11,4.11,0,0,0,1.317,2.852,4.162,4.162,0,0,0,2.905,1.076,3.587,3.587,0,0,0,3.5-2.072h3.308a6.678,6.678,0,0,1-2.434,3.349,7.142,7.142,0,0,1-4.371,1.3,7.565,7.565,0,0,1-3.806-.954,6.79,6.79,0,0,1-2.636-2.69,8.21,8.21,0,0,1-.954-4.021,8.4,8.4,0,0,1,.927-4.021,6.524,6.524,0,0,1,2.609-2.676,7.764,7.764,0,0,1,3.86-.942,7.545,7.545,0,0,1,3.739.915,6.462,6.462,0,0,1,2.555,2.568,7.734,7.734,0,0,1,.915,3.806A9.531,9.531,0,0,1,2249.69-230.507Zm-3.093-2.474a3.493,3.493,0,0,0-1.21-2.717,4.332,4.332,0,0,0-2.932-1.022,3.941,3.941,0,0,0-2.717,1.009,4.217,4.217,0,0,0-1.345,2.73Z" fill="#ffffff"/>
    <g id="Group_1154" data-name="Group 1154">
      <path id="Path_377" data-name="Path 377" d="M2256.965-237.824a5.8,5.8,0,0,1,2.657-.6,5.984,5.984,0,0,1,3.118.828,5.81,5.81,0,0,1,2.2,2.35,7.354,7.354,0,0,1,.8,3.484,7.488,7.488,0,0,1-.8,3.507,5.992,5.992,0,0,1-2.209,2.41,5.821,5.821,0,0,1-3.106.862,5.88,5.88,0,0,1-2.681-.59,5.167,5.167,0,0,1-1.854-1.512v1.89h-2.693v-15.909h2.693v4.83A5.125,5.125,0,0,1,2256.965-237.824Zm5.48,3.732a3.805,3.805,0,0,0-1.464-1.488,3.939,3.939,0,0,0-1.949-.508,3.823,3.823,0,0,0-1.925.52,3.865,3.865,0,0,0-1.465,1.512,4.708,4.708,0,0,0-.555,2.338,4.777,4.777,0,0,0,.555,2.35,3.836,3.836,0,0,0,1.465,1.523,3.813,3.813,0,0,0,1.925.52,3.791,3.791,0,0,0,1.949-.531,3.916,3.916,0,0,0,1.464-1.547,4.848,4.848,0,0,0,.555-2.362A4.649,4.649,0,0,0,2262.445-234.092Z" fill="#ffffff"/>
    </g>
    <path id="Path_378" data-name="Path 378" d="M2227.537-227.525l-4.092-11.777h-3.174l5.508,14.452h3.567l5.482-14.452h-3.2Z" fill="#ffffff"/>
    <path id="Path_379" data-name="Path 379" d="M2242.283-248.4H2230.96a4.105,4.105,0,0,0,1.317,2.851,4.158,4.158,0,0,0,2.9,1.077,3.589,3.589,0,0,0,3.5-2.072h3.308a6.678,6.678,0,0,1-2.434,3.349,7.142,7.142,0,0,1-4.371,1.3,7.574,7.574,0,0,1-3.806-.954,6.788,6.788,0,0,1-2.636-2.69,8.213,8.213,0,0,1-.955-4.021,8.4,8.4,0,0,1,.928-4.021,6.535,6.535,0,0,1,2.609-2.677,7.772,7.772,0,0,1,3.86-.942,7.546,7.546,0,0,1,3.739.916,6.463,6.463,0,0,1,2.555,2.568,7.734,7.734,0,0,1,.915,3.806A9.54,9.54,0,0,1,2242.283-248.4Zm-3.093-2.474a3.491,3.491,0,0,0-1.21-2.717,4.333,4.333,0,0,0-2.932-1.022,3.94,3.94,0,0,0-2.717,1.008,4.219,4.219,0,0,0-1.345,2.731Z" fill="#ffffff"/>
    <g id="Group_1155" data-name="Group 1155">
      <path id="Path_380" data-name="Path 380" d="M2220.618-255.714a5.8,5.8,0,0,0-2.657-.6,5.989,5.989,0,0,0-3.118.828,5.8,5.8,0,0,0-2.2,2.35,7.366,7.366,0,0,0-.8,3.484,7.5,7.5,0,0,0,.8,3.507,6,6,0,0,0,2.209,2.41,5.83,5.83,0,0,0,3.106.862,5.88,5.88,0,0,0,2.681-.59,5.178,5.178,0,0,0,1.854-1.512v1.889h2.693V-259H2222.5v4.831A5.107,5.107,0,0,0,2220.618-255.714Zm-5.48,3.732a3.8,3.8,0,0,1,1.464-1.488,3.942,3.942,0,0,1,1.949-.508,3.819,3.819,0,0,1,1.926.52,3.866,3.866,0,0,1,1.464,1.511,4.715,4.715,0,0,1,.555,2.339,4.777,4.777,0,0,1-.555,2.35,3.84,3.84,0,0,1-1.464,1.523,3.819,3.819,0,0,1-1.926.52,3.8,3.8,0,0,1-1.949-.531,3.919,3.919,0,0,1-1.464-1.548,4.844,4.844,0,0,1-.555-2.361A4.647,4.647,0,0,1,2215.138-251.982Z" fill="#ffffff"/>
    </g>
  </g>
</svg>
          Links
          </p>
          {
              isMobile?( <>
                        <a href="http://facebook.com/Deveb-104901658945272" target="_blank">Facebook</a>
                        <a  href="https://pinterest.com/deveb_co" target="_blank">Pinterest</a>
                        <a href="https://www.linkedin.com/company/deveb-co/" target="_blank">LinkedIn</a>
                        <a href="https://twitter.com/Deveb_co" target="_blank" >Twitter</a>
                        <a href="https://www.awwwards.com/deveb/" target="_blank">Awwwards</a>
                        <a  href="https://www.behance.net/deveb" target="_blank">Behance</a>
                        <a  href="https://www.instagram.com/deveb.co/?hl=en" target="_blank">Instagram</a>
                        <a  href="https://deveb.co" className="web" target="_blank">Website</a>
                        <a  href="https://deveb.co/contact" className="quote" target="_blank">Get a quote</a>

                        </>
                       )
              :(<>
                   <div className="col">
            <a href="https://www.instagram.com/deveb.co/?hl=en" target="_blank"
              onMouseLeave={!isMobile? (e)=>leavem(e) : null}
              onMouseEnter={entlink}
            >Instagram</a>
            <a href="https://www.awwwards.com/deveb/" target="_blank"
             onMouseLeave={!isMobile? (e)=>leavem(e) : null}
             onMouseEnter={entlink}
             >Awwwards</a>
            <a href="http://facebook.com/Deveb-104901658945272" target="_blank"
             onMouseLeave={!isMobile? (e)=>leavem(e) : null}
             onMouseEnter={entlink}
             >Facebook</a>
                   </div>
                   <div className="col">
           <a href="https://www.behance.net/deveb" target="_blank"
            onMouseLeave={!isMobile? (e)=>leavem(e) : null}
            onMouseEnter={entlink}
            >Behance</a>
           <a href="https://www.linkedin.com/company/deveb-co/" target="_blank"
            onMouseLeave={!isMobile? (e)=>leavem(e) : null}
            onMouseEnter={entlink}
            >LinkedIn</a>
           <a href="https://pinterest.com/deveb_co" target="_blank"
            onMouseLeave={!isMobile? (e)=>leavem(e) : null}
            onMouseEnter={entlink}
            >Pinterest</a>
                   </div>
                  <div className="col">
           <a href="https://deveb.co" target="_blank" className="web"
            onMouseLeave={!isMobile? (e)=>leavem(e) : null}
            onMouseEnter={entlink}
            >Website</a>
           <a href="https://deveb.co/contact"  target="_blank" className="quote"
            onMouseLeave={!isMobile? (e)=>leavem(e) : null}
            onMouseEnter={entlink}
            >Get a qoute</a>
           <a href="https://twitter.com/Deveb_co" target="_blank"  
            onMouseLeave={!isMobile? (e)=>leavem(e) : null}
            onMouseEnter={entlink}
            >Twitter</a>
                  </div>
          </>)
          }


      </div>
     
      </div>
    </main>
      </>
  );
};
export default Links;
