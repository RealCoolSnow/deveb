import React, { useEffect, useRef } from 'react'
import { init, options } from './utils'

import './three.scss'

import { vertexShader, fragmentShader } from './webGL'

export default function Three() {

  const container = useRef(null)

  useEffect( () => {
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

    init(container.current)
    // options.setpurple();
  },[])
  // useEffect(()=>{

  // },[])

  return (
    <>
      <div ref={container} style={{marginTop:"-100vh"}}>
      </div>
    </>
  )
}
