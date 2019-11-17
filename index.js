import { TweenMax, Sine } from "gsap";

const PARTICLE_COUNT = 50;
const defaultOptions = {
  top: "100%",
  left: "-=50",
  ease: Sine.easeIn,
  repeat: -1
};

for (let i = 0; i <= PARTICLE_COUNT; i++) {
  const particle = document.createElement("span");
  document.querySelector("body").append(particle);

  const leftOffset = Math.random() * 110;
  const timeOffset = Math.random() * 4;

  const diameter = getRandomInRange(1, 3);
  let invBlurFactor = 25;
  let opacity = 1;
  if (diameter > 3) {
    invBlurFactor = 5;
    opacity = 0.5;
  } else if (diameter > 2) {
    invBlurFactor = 15;
    opacity = 0.7;
  }

  TweenMax.set(particle, {
    top: -15,
    left: `${leftOffset}%`,
    width: diameter,
    height: diameter * 2.5,
    zIndex: invBlurFactor,
    opacity: opacity
  });
  TweenMax.to(particle, 1, { ...defaultOptions, delay: timeOffset });
}

function getRandomInRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.random() * (max - min + 1) + min;
}
