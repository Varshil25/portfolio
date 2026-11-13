import { useEffect, useRef } from 'react'

// A field of dots that bends away from the pointer. Plays one ripple on load.
const GAP = 26
const REACH = 150

export default function DotField() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let pointer = null
    let frame = 0
    let rippleStart = reduce ? null : performance.now()
    let colors = {}

    const readColors = () => {
      const css = getComputedStyle(document.documentElement)
      colors = {
        dot: css.getPropertyValue('--dot').trim(),
        accent: css.getPropertyValue('--accent').trim(),
        pop: css.getPropertyValue('--pop').trim(),
      }
    }

    const draw = (now) => {
      frame = 0
      ctx.clearRect(0, 0, width, height)

      let ripple = null
      if (rippleStart !== null) {
        const t = (now - rippleStart) / 1600
        if (t >= 1) rippleStart = null
        else ripple = { radius: t * Math.hypot(width, height), strength: 1 - t }
      }

      for (let y = GAP / 2; y < height; y += GAP) {
        for (let x = GAP / 2; x < width; x += GAP) {
          let dx = 0
          let dy = 0
          let size = 1.3
          let color = colors.dot

          if (pointer) {
            const px = x - pointer.x
            const py = y - pointer.y
            const dist = Math.hypot(px, py)
            if (dist < REACH) {
              const force = (1 - dist / REACH) ** 2
              dx = (px / (dist || 1)) * force * 24
              dy = (py / (dist || 1)) * force * 24
              size = 1.3 + force * 2.4
              color = force > 0.45 ? colors.pop : colors.accent
            }
          }

          if (ripple) {
            const dist = Math.hypot(x, height - y)
            const band = Math.abs(dist - ripple.radius)
            if (band < 70) {
              const force = (1 - band / 70) * ripple.strength
              size += force * 2.2
              if (force > 0.25) color = colors.accent
            }
          }

          ctx.fillStyle = color
          ctx.beginPath()
          ctx.arc(x + dx, y + dy, size, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      if (rippleStart !== null) schedule()
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(draw)
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const ratio = window.devicePixelRatio || 1
      width = rect.width
      height = rect.height
      canvas.width = width * ratio
      canvas.height = height * ratio
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
      schedule()
    }

    const onMove = (event) => {
      const rect = canvas.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      const inside = x > -REACH && y > -REACH && x < width + REACH && y < height + REACH
      if (!inside && !pointer) return
      pointer = inside ? { x, y } : null
      schedule()
    }

    const onLeave = () => {
      pointer = null
      schedule()
    }

    readColors()
    resize()

    const sizeObserver = new ResizeObserver(resize)
    sizeObserver.observe(canvas)
    const themeObserver = new MutationObserver(() => {
      readColors()
      schedule()
    })
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    window.addEventListener('pointermove', onMove)
    document.addEventListener('pointerleave', onLeave)

    return () => {
      cancelAnimationFrame(frame)
      sizeObserver.disconnect()
      themeObserver.disconnect()
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return <canvas ref={ref} className="dot-field" aria-hidden="true" />
}
