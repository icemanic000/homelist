import { useCallback, useMemo } from 'react'
import Particles from 'react-tsparticles'
import type { Engine, ISourceOptions } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'

export default function SnowBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: {
        enable: false,
      },
      background: {
        color: { value: 'transparent' },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: false, mode: 'push' },
          onHover: { enable: false, mode: 'repulse' },
          resize: true,
        },
      },
      particles: {
        color: { value: '#ffffff' },
        move: {
          direction: 'bottom',
          enable: true,
          outModes: { default: 'out' },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: { enable: true, area: 800 },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
        wobble: {
          enable: true,
          distance: 5,
          speed: 5,
        },
      },
      detectRetina: true,
    }),
    [],
  )

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <Particles id="snow" init={particlesInit} options={options} className="h-full w-full" />
    </div>
  )
}
