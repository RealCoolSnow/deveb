import React, { useEffect } from 'react'
import { init } from './utils'

import './three.scss'

import { vertexShader, fragmentShader } from './webGL'

export default function Three() {

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

    init()
  },[])

  return (
    <>
      <div className='container-fluid fixed-top header disable-selection' style={{ paddingTop: '400px'}}>
        <div className="row">
          <div className="col">
            <h1>
              <strong>Blob</strong>
            </h1>
          </div>
        </div>
      </div>

      <div id="container"></div>

    </>
  )
}
