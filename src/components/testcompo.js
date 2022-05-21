import React, {useEffect, useRef} from "react";
 import gsap from "gsap";
 import ScrollTrigger from "gsap/ScrollTrigger";

 const TestingCompo =()=>{
     const el = useRef();
     const q = gsap.utils.selector(el);
     gsap.registerPlugin(ScrollTrigger)

     useEffect(()=>{
        gsap.set(el.current, {

            width: "100%",
            height: 300,
            background: "#ffffff",
        })
       const mytest = gsap.to(el.current, {
            background:"#ff00f0",
            duration:4,
            scrollTrigger:{
                trigger: el.current,
                start: "top bottom",
                // markers:true,
             
            }
        })
        return ()=>{
            gsap.set(el.current, {

                width: "100%",
                height: 300,
                background: "#ffffff",
            })
            mytest.kill();
            console.log("killing test")
            // mytest.ScrollTrigger.kill();
        }
    },[])

    return (
        <div ref = {el}>
            <div>
                <p>this is just for testing</p>
            </div>
        </div>
    )
}
export default TestingCompo;