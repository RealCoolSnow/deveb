import React from "react";
import Button from "../button";
import "./textbox.scss"

const Textbox = ({h1,h2,h3,pi, width, alignment,double, mt, mb, h2width, butt, mob })=>{

    return(
        <div className={`tb-contain ${width} ${alignment}`} >
          { 
                  
                h3 && !double && (
                    <h3 style={!mb && mt? {marginTop:"-38px"} :{}}>{h3}</h3>
                )
            }
            
               { h1 && !double && (
                    <div className={`${h3 === "Dopegood" || h3 === "Vimcosmo" ? "w500" : ""} `} style={mob? {fontSize: "1.8rem"}:{fontSize: "1.69rem"}} id="headLines">{h1}</div>
                )}
           
               { h2 && !double && (
                    <h2>{h2}</h2>
                )}
          
                {pi && !double && (
                    <p>{pi}</p>
                )}
                 {butt && !double && (
                    <Button text="Visit Live" href={butt}/>
                )}
         
          {
              double && 
                   ( <div className="double-contain">
                         <div className="vw4" >
                           <h2 className={h2width} >{h2}</h2>
                         </div>
                         <div className="short flex" >
                          <p >{pi}</p>
                         </div>
                    </div>)
          }
          

        </div>
    )
}

export default Textbox;