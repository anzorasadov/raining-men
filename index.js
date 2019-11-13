import { TweenMax, Power3, Sine } from 'gsap'

console.log('hello! init!')

const PARTICLE_COUNT = 50
const defaultOptions = { top: '100%', left: '-=50', ease: Sine.easeIn, repeat: -1 }

for (let i = 0; i <= PARTICLE_COUNT; i++) {
  const particle = document.createElement('span')
  const leftOffset = Math.random() * 110
  const timeOffset = Math.random() * 4
  document.querySelector('body').append(particle)

  TweenMax.set(particle, { top: -15, left: `${leftOffset}%` })
  TweenMax.to(particle, 2, { ...defaultOptions, delay: timeOffset })
}
