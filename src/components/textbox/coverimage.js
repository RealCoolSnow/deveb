import React from "react";
import "./textbox.scss"

const Coverimage = ({width, height, double, h2, align, mt})=>{

    return (
        <>
        { 
            double === false ? (
            <div  className={`cover-contain ${width}`} style={mt?{marginTop:"-38px"}:{}}>
               <div className={`cover ${height}`}>
               </div>
            </div>

              ):(
                  <div className={`double-contain ${align}`}>
                       <h2>{h2}</h2>
                       <div className="flex-contain">
                         <div className={`cover-contain half-w`}>
                             <div className="cover small-h"></div>
                         </div>
                         <div className={`cover-contain  half-w`}>
                             <div className="cover small-h"></div>
                         </div>
                       </div>
                  </div>
              )
            }
         </>
    )
}
export default Coverimage;