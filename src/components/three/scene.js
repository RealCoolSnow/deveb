import React, {useEffect, useRef, useState} from "react";
import {Canvas} from "@react-three/fiber"
import {MeshDistortMaterial, Sphere} from "@react-three/drei"
const Scene = () => {

    return( <Canvas className="can">
                {/* <pointLight position={[15,60,100]}/> */}
                <ambientLight intensity={.5}/>
                <directionalLight intensity={1} position={[-2,5,2]}/>
                {/* <mesh> */}
                <Sphere visible args={[1, 36, 36]} >
                 <MeshDistortMaterial attach="material" color="#ff82d1" distort={0.6} speed={6}/>

                </Sphere>
                
                {/* <meshStandardMaterial color="hotpink" /> */}
                {/* </mesh> */}
                {/* <mesh>
                    <planeBufferGeometry args={[15, 32]}/>
                </mesh> */}
          </Canvas>)
}

export default Scene;