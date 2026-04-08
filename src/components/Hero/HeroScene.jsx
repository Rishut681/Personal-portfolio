import { Suspense, useMemo, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, MeshTransmissionMaterial, Sparkles } from "@react-three/drei"
import * as THREE from "three"

const OrbitalPlayground = () => {
  const group = useRef(null)
  const cursorLight = useRef(null)
  const core = useRef(null)
  const orbitA = useRef(null)
  const orbitB = useRef(null)
  const satelliteA = useRef(null)
  const satelliteB = useRef(null)
  const [isActivated, setIsActivated] = useState(false)
  const accent = useMemo(() => new THREE.Color("#63e6ff"), [])
  const ember = useMemo(() => new THREE.Color("#ff8d57"), [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    const pointerX = state.pointer.x * 2.2
    const pointerY = state.pointer.y * 1.6

    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        time * (isActivated ? 0.28 : 0.16) + pointerX * 0.16,
        0.05
      )
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        Math.sin(time * 0.3) * 0.08 + pointerY * 0.12,
        0.05
      )
    }

    if (cursorLight.current) {
      cursorLight.current.position.x = THREE.MathUtils.lerp(cursorLight.current.position.x, pointerX, 0.08)
      cursorLight.current.position.y = THREE.MathUtils.lerp(cursorLight.current.position.y, pointerY, 0.08)
    }

    if (core.current) {
      core.current.rotation.y += isActivated ? 0.022 : 0.012
      core.current.rotation.x += isActivated ? 0.014 : 0.008
      const scale = isActivated ? 1.14 : 1
      core.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.06)
    }

    if (orbitA.current) {
      orbitA.current.rotation.z += isActivated ? 0.02 : 0.01
    }

    if (orbitB.current) {
      orbitB.current.rotation.x += isActivated ? 0.018 : 0.009
      orbitB.current.rotation.y += isActivated ? 0.012 : 0.006
    }

    if (satelliteA.current) {
      satelliteA.current.position.x = Math.cos(time * (isActivated ? 1.7 : 1.1)) * 1.85
      satelliteA.current.position.y = Math.sin(time * (isActivated ? 1.5 : 1)) * 0.9
    }

    if (satelliteB.current) {
      satelliteB.current.position.x = Math.sin(time * (isActivated ? 1.3 : 0.9)) * -1.75
      satelliteB.current.position.y = Math.cos(time * (isActivated ? 1.8 : 1.15)) * 1.05
    }
  })

  return (
    <>
      <color attach="background" args={["#06070a"]} />
      <fog attach="fog" args={["#06070a", 4.6, 10.2]} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 5, 3]} intensity={1.3} color={accent} />
      <pointLight position={[-4, -2, 2]} intensity={1.1} color={ember} />
      <pointLight ref={cursorLight} position={[0, 0, 2.8]} intensity={1.55} color="#e2fbff" />

      <group ref={group}>
        <Float speed={1.3} rotationIntensity={0.14} floatIntensity={0.32}>
          <group
            ref={core}
            onClick={() => setIsActivated((current) => !current)}
          >
            <mesh>
              <icosahedronGeometry args={[0.88, 1]} />
              <MeshTransmissionMaterial
                color={isActivated ? "#63e6ff" : "#d9c5a0"}
                thickness={0.62}
                roughness={0.14}
                transmission={1}
                chromaticAberration={0.045}
                anisotropy={0.22}
              />
            </mesh>

            <mesh scale={1.48}>
              <torusGeometry args={[1, 0.05, 32, 180]} />
              <meshBasicMaterial color={isActivated ? "#63e6ff" : "#94dff1"} transparent opacity={0.35} />
            </mesh>
          </group>
        </Float>

        <group ref={orbitA} rotation={[0.85, 0.2, 0.4]}>
          <mesh>
            <torusGeometry args={[1.55, 0.06, 28, 220]} />
            <meshBasicMaterial color="#7adfff" transparent opacity={0.42} />
          </mesh>
        </group>

        <group ref={orbitB} rotation={[0.4, 0.85, 0.95]}>
          <mesh>
            <torusGeometry args={[2.05, 0.045, 24, 220]} />
            <meshBasicMaterial color="#ff8d57" transparent opacity={0.28} />
          </mesh>
        </group>

        <Float speed={1.8} rotationIntensity={0.18} floatIntensity={0.4}>
          <mesh ref={satelliteA} position={[1.8, 0.8, -0.6]}>
            <sphereGeometry args={[0.2, 32, 32]} />
            <MeshTransmissionMaterial color="#63e6ff" thickness={0.8} roughness={0.04} transmission={1} />
          </mesh>
        </Float>

        <Float speed={1.45} rotationIntensity={0.12} floatIntensity={0.35}>
          <mesh ref={satelliteB} position={[-1.6, -0.9, -0.45]}>
            <sphereGeometry args={[0.16, 32, 32]} />
            <MeshTransmissionMaterial color="#ff8d57" thickness={0.8} roughness={0.08} transmission={1} />
          </mesh>
        </Float>

        <Float speed={1.15} rotationIntensity={0.2} floatIntensity={0.3}>
          <mesh position={[0, -1.85, -0.95]} rotation={[0.4, -0.2, 0.55]}>
            <boxGeometry args={[1.85, 0.22, 1.1]} />
            <MeshTransmissionMaterial
              color={isActivated ? "#63e6ff" : "#d9c5a0"}
              thickness={0.24}
              roughness={0.06}
              transmission={1}
              chromaticAberration={0.03}
            />
          </mesh>
        </Float>
      </group>

      <Sparkles
        count={isActivated ? 115 : 85}
        scale={[7.6, 5.2, 5]}
        size={1.7}
        speed={isActivated ? 0.65 : 0.38}
        color="#63e6ff"
        opacity={0.76}
      />
      <Environment preset="city" />
    </>
  )
}

const HeroScene = () => {
  return (
    <div className="hero-scene">
      <Canvas camera={{ position: [0, 0, 5.3], fov: 42 }} dpr={[1, 1.8]}>
        <Suspense fallback={null}>
          <OrbitalPlayground />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default HeroScene
