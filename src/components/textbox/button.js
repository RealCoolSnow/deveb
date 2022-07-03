import {React, useEffect, useRef, useState} from "react"
import "./textbox.scss"
import {Link} from "react-router-dom"
import gsap from "gsap"
import { useAppContext } from "../../contexts/appcontext"
import { scrolltop } from "../../utils/useLoco"

const Button =({url})=>{
  const el = useRef();
  const q = gsap.utils.selector(el);
  const {isMobile} = useAppContext();
  const [hover, setHover]= useState();
  // useEffect(()=>{
  //  if (!hover){
  //   gsap.to(q(".btn-ripple"),{
  //     opacity:()=>  0,
  //     delay:.55,
  //     duration:0,
  //   })
  //   }
    
  // },[hover])
  const moveb = e=>{
    console.log(e.clientX ,e.target.getBoundingClientRect().x)
  //  gsap.to(q(".btn-ripple"),{
  //    x:()=>e.clientX - e.target.getBoundingClientRect().x - (e.target.getBoundingClientRect().x * .005),
  //    y:()=> e.clientY - e.target.getBoundingClientRect().y,
  //   //  y:()=> scrolltop + e.clientY,
  //    duration:0,
  //    ease:"Power3.Out",
  //  });
   const ofTop = e.target.getBoundingClientRect().top;
  const ofLeft = e.target.getBoundingClientRect().left;
   var s = e.clientX - ofLeft;
  var o = (e.clientY - ofTop);

  //  movebtn(s,o)
  gsap.to(q(".bn-contain .bn"),{
    xPercent: ((s - 535 / 2) / 535) * 10,
    yPercent:( (o -535 / 2) / 535) * 8,
    // scale:1.2,
    duration:.23,
  });
  //  const range = e.clientX - e.target.getBoundingClientRect().x;
  //  const marginaera = window.innerWidth / 12;
  //  console.log(range, marginaera);
  //  if (range == marginaera){
  //   setHover(true)
  //  } else
  //  if (range == marginaera * 4){
  //   setHover(false)
  //  }
 }
 const tl= gsap.timeline({ defaults: {
  //  overwrite: 'auto',
  }})
  const tl2= gsap.timeline()
  const growRipple=()=>{
    
   
    gsap.to(q(".btn-ripple"),{
      // scale:6,
      yPercent:100,
      duration:.55,
      // delay:.01,
      ease:"Power3.Out",
    });
    gsap.to(q(".bn-contain p"),{
      color:"#ffffff",
      duration:.3,
    })
    gsap.to(q(".bn"),{
      scale:1.06,
      duration:.35,
      delay:.15,
      // backgroundColor:"#0000ff",
      // delay:.01,
      // ease:"Power3.Out",
    });
    
  
  }
  const shrinkRipple=()=>{
   
    // tl2.to(q(".btn-ripple"),{
    //   scale:0,
    //   duration:.55,
    //   ease:"Power3.Out",
    //   // onStart:()=> setHover(false),
    // })
    gsap.to(q(".btn-ripple"),{
      // scale:6,
      yPercent:200,
      duration:.55,
      // delay:.01,
      ease:"Power3.Out",
      onComplete:()=> gsap.set(q(".btn-ripple"), {yPercent:-100})
    });
    gsap.to(q(".bn-contain p"),{
      color:"#000000",
      duration:.35,
    })
    gsap.to(q(".bn"),{
      scale:1,
      duration:.3,
      // backgroundColor:"#ffffff",
      // delay:.01,
      xPercent:0,
      yPercent:0,
      ease:"Power3.In",
    });
    
    // .to(q(".btn-ripple"),{
    //   opacity:()=> hover ? 1 : 0,
    //   duration:0,
    // },">");

  }
  // const movebtn=(s,o)=>{
   
  // }



    return (
        <div ref={el} className="bn-contain">
        <a href={url} target="__blank"  >
             <p>Click to run project</p>
           <div className="bn"  onMouseMove={moveb} onMouseEnter={growRipple} onMouseLeave={shrinkRipple}>
             {!isMobile && <div className="btn-ripple"></div>}
             
           </div> 
        </a>
        </div>
    )
}
export default Button;