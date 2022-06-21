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
   gsap.to(q(".btn-ripple"),{
     x:()=>e.clientX - e.target.getBoundingClientRect().x - (e.target.getBoundingClientRect().x * .035),
     y:()=> e.clientY - e.target.getBoundingClientRect().y,
    //  y:()=> scrolltop + e.clientY,
     duration:.4,
     ease:"Power3.Out",
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
   overwrite: 'auto',
  }})
  const tl2= gsap.timeline()
  const growRipple=()=>{
    
    // tl.to(q(".btn-ripple"),{
    //   // onStart:()=> tl2.pause(),
    //   opacity:1,
    //   duration:0,
    // })
    tl.to(q(".btn-ripple"),{
      scale:40,
      duration:.55,
      ease:"Power3.Out",
    },">");
    
  
  }
  const shrinkRipple=()=>{
   
    tl2.to(q(".btn-ripple"),{
      scale:0,
      duration:.55,
      ease:"Power3.Out",
      // onStart:()=> setHover(false),
    })
    // .to(q(".btn-ripple"),{
    //   opacity:()=> hover ? 1 : 0,
    //   duration:0,
    // },">");

  }



    return (
        <div ref={el} className="bn-contain">
        <a href={url} target="__blank"  onMouseMove={moveb} onMouseEnter={growRipple} onMouseLeave={shrinkRipple} >
           <div className="bn" >
             <p>Click to run project</p>
             {!isMobile && <div className="btn-ripple"></div>}
             
           </div> 
        </a>
        </div>
    )
}
export default Button;