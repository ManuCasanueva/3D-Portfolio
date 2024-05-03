import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from "../Loader"

const Computers = ({isMobile}) => {
  const computer = useGLTF("../desktop_pc/scene.gltf")

  return (
    <mesh>
      <hemisphereLight intensity={3.15} groundColor="black" />
      <pointLight intensity={1}/>
      <spotLight
        position={[-20,50,10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.65 : 0.75}
        position={isMobile ? [0,-4,-2.2] : [0,-3.5,-1.5]}
        rotation={[-0.01,-0.2,-0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)")
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  },[])

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{
        position: [isMobile ? 0 : 20, isMobile ? -5 : 3, isMobile ? 2 : 5],
        fov: isMobile ? 45 : 25
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          enableZoom={false}
          enablePan={false} 
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <Computers isMobile={isMobile}  />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}


export default ComputersCanvas
