import React, { useEffect, useRef } from 'react'
import { init } from './utils'

import './three.scss'

import { vertexShader, fragmentShader } from './webGL'

export default function Three() {

  const container = useRef(null)

  useEffect( () => {
    addVertex()

    const destroyer = init(container.current)

    return () => destroyer()
    
  },[])

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
