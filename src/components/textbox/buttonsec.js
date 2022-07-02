import React from "react";
import "./textbox.scss"

const Buttonsec = ({})=>{

    return (
        <>
        
            
            <div  className={`cover-contain ${width} ${pb? pb : ""}`} style={mt?{marginTop:"-38px"}:{}}>
               <div className={`cover ${height} ${end? " end" : ""}`} style={img?{background: `url(${img})`, backgroundSize: "cover"}:{}}>
               </div>
            </div>
            <div ref={el} className="bn-contain">
             <a href={url} target="__blank"  onMouseMove={moveb} onMouseEnter={growRipple} onMouseLeave={shrinkRipple} >
             <div className="bn" >
             <p>Click to run project</p>
             {!isMobile && <div className="btn-ripple"></div>}
             
             </div> 
           </a>
        </div>
    
         </>
    )
}
export default Coverimage;