import {React} from "react"
import "./textbox.scss"
import {Link} from "react-router-dom"

const Button =()=>{

    return (
        <div className="bn-contain">
        <Link>
           <div className="bn">
             <p>Click to run project</p>
           </div> 
        </Link>
        </div>
    )
}
export default Button;