import React from "react";
import "./textbox.scss"
const Textbox = ({h1,h2,h3,pi, width, alignment,double, mt})=>{

    return(
        <div className={`tb-contain ${width} ${alignment}`} >
          { 
                  
                h3 && !double && (
                    <h3 style={mt? {marginTop:"-38px"} :{}}>{h3}</h3>
                )
            }
            
               { h1 && !double && (
                    <h1>{h1}</h1>
                )}
           
               { h2 && !double && (
                    <h2>{h2}</h2>
                )}
          
                {pi && !double && (
                    <p>{pi}</p>
                )}
         
          {
              double && 
                   ( <div className="double-contain">
                         <div className="vw4" >
                           <h2 >{h2}</h2>
                         </div>
                         <div className="short" >
                          <p >{pi}</p>
                         </div>
                    </div>)
          }
          

        </div>
    )
}

export default Textbox;