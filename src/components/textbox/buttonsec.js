import React,{useRef} from "react";
import { useAppContext } from "../../contexts/appcontext.js";
import gsap from "gsap";
import "./textbox.scss"
// import Button from "../button.js";


const Buttonsec = ({width,pb,mt,img,url,height,})=>{
const {isMobile} = useAppContext();
const el = useRef();
const q = gsap.utils.selector(el);

const moveb = e=>{
  console.log(e.clientX ,e.target.getBoundingClientRect().x)

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

}
const tl= gsap.timeline({ defaults: {
//  overwrite: 'auto',
}})
const tl2= gsap.timeline()
const growRipple=()=>{
  
 
  gsap.to(q(".btn-ripple"),{
    // scale:6,
    yPercent:()=> 100,
    duration:.55,
    // delay:.01,
    ease:"Power3.Out",
  });
  gsap.to(q(".bn-contain p"),{
    color:"#ffffff",
    duration:.35,
  })
  gsap.to(q(".bn"),{
    scale:()=>1.06,
    duration:.35,
    delay:.15,
  
  });
  
}
const shrinkRipple=()=>{
 
  gsap.to(q(".btn-ripple"),{
    // scale:6,
    yPercent:()=>200,
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
    scale:()=>1,
    duration:.3,
    xPercent:0,
    yPercent:0,
    ease:"Power3.In",
  });
  
}
    return (
        <div className="butncover">
        
            
            <div  className={`cover-contain ${width} ${pb? pb : ""}`} style={mt?{marginTop:"-38px"}:{}}>
               <div className={`cover ${height}`} style={isMobile?{background: `url(${img[1]})`, backgroundSize: "cover"}:{background: `url(${img[0]})`, backgroundSize: "cover"}}>
               </div>
            </div>
            {/* <div  className="bn-contain" ref={el} >
             <p>Click to run project</p>
             <a href={url} target="__blank"  >
             <div className="bn" onMouseMove={moveb} onMouseEnter={growRipple} onMouseLeave={shrinkRipple}>
             {!isMobile && <div className="btn-ripple"></div>}
             
             </div> 
           </a>
        </div> */}
    
         </div>
    )
}
export default Buttonsec;