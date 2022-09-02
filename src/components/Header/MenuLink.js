import React, {useState, useRef} from 'react'
import { useAppContext } from '../../contexts/appcontext';
export default function MenuLink({ name, to, txt, linksOut, moveLinks }) {
  const copycl = useRef()
  const {changePointer} = useAppContext();
  // const [emailHover, setEmHover] = useState(false);
  function copyToClipboard() {
    var from = copycl.current;
    var range = document.createRange();
    window.getSelection().removeAllRanges();
    range.selectNode(from);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    changePointer({isHover: true, color:{bg:"#000", txt: "#fff"}, text: "copied ✓"})
}
const leavem = (e)=>{
  linksOut(e);
  changePointer({isHover: false,})

}
  return (
    <>
    {
      name=== "email" ? 
      (
      <p className={name}
      onClick={()=>copyToClipboard()}
      onMouseEnter={()=> changePointer({isHover: true, color:{bg:"#000", txt: "#fff"}, text: "Click to copy"})} 
      onMouseLeave={()=>changePointer(false)}
      >
        <span ref={copycl} onMouseMove={moveLinks} onMouseLeave={linksOut}>{txt}</span>
  
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none"><path fill="none" d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/></svg> */}
      </p>
      )
      : (
      <a className={name} href={to} target="_blank" 
      rel="noopener noreferrer"
      onMouseEnter={()=> changePointer({isHover: true, color:{bg:"#ffffff", txt: "#000000"}, text: "", blend:true,})}
      >
        <span ref={copycl} onMouseMove={moveLinks} onMouseLeave={leavem}>{txt}</span>
  
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none"><path fill="none" d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/></svg> */}
      </a>
      )

    }
  </>
  )
}
