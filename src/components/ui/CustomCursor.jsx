import { useEffect, useState } from "react"
import { animated, useSpring } from "@react-spring/web"

const CustomCursor = () => {
  const [visible, setVisible] = useState(false)
  const [{ x, y, scale, opacity }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    opacity: 0,
    config: { tension: 420, friction: 34, mass: 0.4 },
  }))
  const [{ trailX, trailY, trailScale, trailOpacity }, trailApi] = useSpring(() => ({
    trailX: 0,
    trailY: 0,
    trailScale: 1,
    trailOpacity: 0,
    config: { tension: 220, friction: 26, mass: 0.8 },
  }))

  useEffect(() => {
    const handleMove = (event) => {
      const target = event.target instanceof HTMLElement ? event.target.closest("[data-magnetic], a, button, input, textarea") : null
      api.start({
        x: event.clientX,
        y: event.clientY,
        scale: target ? 1.85 : 1,
        opacity: 1,
      })
      trailApi.start({
        trailX: event.clientX,
        trailY: event.clientY,
        trailScale: target ? 1.2 : 1,
        trailOpacity: 0.7,
      })
      setVisible(true)
    }

    const handleLeave = () => {
      api.start({ opacity: 0, scale: 0.8 })
      trailApi.start({ trailOpacity: 0, trailScale: 0.8 })
      setVisible(false)
    }

    window.addEventListener("pointermove", handleMove)
    window.addEventListener("pointerleave", handleLeave)

    return () => {
      window.removeEventListener("pointermove", handleMove)
      window.removeEventListener("pointerleave", handleLeave)
    }
  }, [api, trailApi])

  return (
    <animated.div
      className={`custom-cursor ${visible ? "is-visible" : ""}`}
      style={{
        opacity,
        transform: x.to((xValue) => `translate3d(${xValue}px, 0, 0)`),
      }}
    >
      <animated.div
        className="custom-cursor__trail"
        style={{
          opacity: trailOpacity,
          transform: trailX.to((xValue) => `translate3d(${xValue}px, 0, 0)`),
        }}
      >
        <animated.span
          style={{
            transform: trailY.to((yValue) => `translate3d(0, ${yValue}px, 0)`),
          }}
        >
          <animated.i style={{ transform: trailScale.to((value) => `translate(-50%, -50%) scale(${value})`) }} />
        </animated.span>
      </animated.div>
      <animated.div
        className="custom-cursor__dot"
        style={{
          transform: y.to((yValue) => `translate3d(0, ${yValue}px, 0)`),
        }}
        >
          <animated.span style={{ transform: scale.to((value) => `translate(-50%, -50%) scale(${value})`) }} />
        </animated.div>
    </animated.div>
  )
}

export default CustomCursor
