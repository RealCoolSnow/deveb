import {React, useEffect, useRef} from "react"
import "./textbox.scss"
import {Link} from "react-router-dom"
import gsap from "gsap"
import { useAppContext } from "../../contexts/appcontext"
import { scrolltop } from "../../utils/useLoco"

const Button =()=>{
  const el = useRef();
  const q = gsap.utils.selector(el);
  const {isMobile} = useAppContext();
  useEffect(()=>{

    
  },[])
  const moveb = e=>{
    console.log(e.target.getBoundingClientRect())
   gsap.to(q(".btn-ripple"),{
     x:()=>e.clientX - e.target.getBoundingClientRect().x - (e.target.getBoundingClientRect().x * .135),
     y:()=> e.clientY - e.target.getBoundingClientRect().y,
    //  y:()=> scrolltop + e.clientY,
     duration:.4,
     ease:"Power3.Out",
   })
 }
  const growRipple=()=>{
    gsap.to(q(".btn-ripple"),{
      scale:40,
      duration:.55,
      ease:"Power3.Out",
    })
  }
  const shrinkRipple=()=>{
    gsap.to(q(".btn-ripple"),{
      scale:1,
      duration:.55,
      ease:"Power3.Out",
    })
  }



    return (
        <div ref={el} className="bn-contain">
        <Link onMouseMove={moveb} onMouseEnter={growRipple} onMouseLeave={shrinkRipple}>
           <div className="bn"  >
             <p>Click to run project</p>
             {!isMobile && <div className="btn-ripple"></div>}
             
           </div> 
        </Link>
        </div>
    )
}
export default Button;