import React, {useEffect, useRef, useState} from "react";
import {Canvas} from "@react-three/fiber"
const Scene = () => {

    return( <Canvas className="can">
                <pointLight position={[15,60,100]}/>
                <mesh>
                <sphereGeometry args={[1, 16, 16]} />
                <meshStandardMaterial color="hotpink" />
                </mesh>
                <mesh>
                    <planeBufferGeometry args={[15, 32]}/>
                </mesh>
          </Canvas>)
}

export default Scene;