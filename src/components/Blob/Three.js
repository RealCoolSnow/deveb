import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { init } from './utils'
import gsap from 'gsap'
import './three.scss'
import { useAppContext } from '../../contexts/appcontext'
import { vertexShader, fragmentShader } from './webGL'

export default function Three() {

  const container = useRef(null)
  // const q = gsap.utils.selector(container);
  const {isMobile} = useAppContext()
 useLayoutEffect(()=>{
 gsap.set(container.current,{
   y: 80,
   autoAlpha:0,

 })
 },[isMobile])

  useEffect(() => {
    addVertex()
    gsap.to(container.current,{
      y: 0,
      duration:.85,
   ease: "power3.Out",
      delay:()=>isMobile?.2: .7,
    })
    gsap.to(container.current,{
      autoAlpha: 1,
      duration:.65,
      ease: "power3.Out",
      delay:()=>isMobile?.2: .7,
    })
    const destroyer = init(container.current)

    return () => destroyer()
    
  },[isMobile])

  const addVertex = () => {

    const existingVertexScript = document.getElementById('vertexShader')
    const existingFragmentScript = document.getElementById('fragmentShader')

    if( existingVertexScript || existingFragmentScript ) return

    const vertexShaderScript = document.createElement("script");
    const fragmentShaderScript = document.createElement("script");

    vertexShaderScript.innerHTML = vertexShader
    fragmentShaderScript.innerHTML = fragmentShader

    vertexShaderScript.type = 'x-shader/x-vertex'
    fragmentShaderScript.type = 'x-shader/x-vertex'

    vertexShaderScript.id = 'vertexShader'
    fragmentShaderScript.id = 'fragmentShader'

    document.body.appendChild(vertexShaderScript)
    document.body.appendChild(fragmentShaderScript)
  }

  return (
    <>
      <div ref={container} style={{marginTop:"-100vh"}}>
      </div>
    </>
  )
}
