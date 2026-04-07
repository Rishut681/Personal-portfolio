import { Suspense, useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, MeshTransmissionMaterial, Sparkles, Text } from "@react-three/drei"
import * as THREE from "three"

const SceneContent = () => {
  const group = useRef(null)
  const cursorLight = useRef(null)
  const accent = useMemo(() => new THREE.Color("#63e6ff"), [])
  const ember = useMemo(() => new THREE.Color("#ff8d57"), [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    const pointerX = state.pointer.x * 2.4
    const pointerY = state.pointer.y * 1.8

    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, time * 0.16 + pointerX * 0.08, 0.04)
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.sin(time * 0.25) * 0.08 + pointerY * 0.08, 0.04)
    }

    if (cursorLight.current) {
      cursorLight.current.position.x = THREE.MathUtils.lerp(cursorLight.current.position.x, pointerX, 0.08)
      cursorLight.current.position.y = THREE.MathUtils.lerp(cursorLight.current.position.y, pointerY, 0.08)
    }
  })

  return (
    <>
      <color attach="background" args={["#06070a"]} />
      <fog attach="fog" args={["#06070a", 5.8, 11.5]} />
      <ambientLight intensity={0.65} />
      <directionalLight position={[4, 5, 3]} intensity={1.4} color={accent} />
      <pointLight position={[-4, -2, 2]} intensity={1.3} color={ember} />
      <pointLight ref={cursorLight} position={[0, 0, 2.5]} intensity={1.5} color="#d9f9ff" />

      <group ref={group}>
        <Float speed={1.8} rotationIntensity={0.35} floatIntensity={0.55}>
          <mesh position={[-1.9, 0.2, 0]} rotation={[0.45, 0.2, 0]}>
            <torusKnotGeometry args={[0.78, 0.23, 220, 28]} />
            <MeshTransmissionMaterial
              color="#63e6ff"
              thickness={0.65}
              roughness={0.14}
              transmission={1}
              chromaticAberration={0.05}
              anisotropy={0.3}
            />
          </mesh>
        </Float>

        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.35}>
          <mesh position={[1.6, -0.3, -0.5]} rotation={[0.25, 0.6, 0.2]}>
            <icosahedronGeometry args={[0.92, 1]} />
            <MeshTransmissionMaterial
              color="#ff8d57"
              thickness={0.5}
              roughness={0.18}
              transmission={1}
              chromaticAberration={0.02}
            />
          </mesh>
        </Float>

        <Float speed={1.05} rotationIntensity={0.24} floatIntensity={0.4}>
          <mesh position={[0.15, -1.15, -0.95]} rotation={[0.35, -0.2, 0.5]}>
            <boxGeometry args={[1.7, 0.3, 1.25]} />
            <MeshTransmissionMaterial
              color="#d9c5a0"
              thickness={0.28}
              roughness={0.08}
              transmission={1}
              chromaticAberration={0.03}
            />
          </mesh>
        </Float>

        <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.2}>
          <Text
            position={[0, 1.6, 0.1]}
            fontSize={0.65}
            letterSpacing={-0.06}
            color="#f5efe5"
            anchorX="center"
            anchorY="middle"
          >
            Rishu
          </Text>
        </Float>
      </group>

      <Sparkles count={90} scale={[7.5, 5, 5]} size={1.8} speed={0.4} color="#63e6ff" opacity={0.75} />
      <Environment preset="city" />
    </>
  )
}

const HeroScene = () => {
  return (
    <div className="hero-scene">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 42 }} dpr={[1, 1.8]}>
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default HeroScene
