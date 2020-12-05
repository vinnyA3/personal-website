// Created by Vincent Aceto (vinnya3)
// Licensed under MIT

import { isNum, isDOMElement, isArray, allOfType } from "./utils/helpers"

const areAllNums = allOfType(isNum)

const nextRGB = rgb =>
  ({
    R: "G",
    B: "R",
    G: "B",
  }[rgb])

/**
 * bgColorGenerator (curried) - sorry LOL
 *
 * @param {DOM Element} targetEl - DOM element whose background will be changing
 * @return {Function}
 *   @param {Array[Number]} startRGB - Array of RGB start values
 *
 * @example
 *
 *     bgColorGenerator('main')([193, 88, 88]);
 */

const bgColorGenerator = targetEl => startRGB => {
  if (!isDOMElement(targetEl) || !isArray(startRGB)) {
    return (
      console.error(
        'Argument(1) must be of type: "DOM Element".  Argument(2) must be of type: Array[Number]'
      ),
      void 0
    )
  } else if (!areAllNums(startRGB)) {
    return console.error("Argument(2) must be composed of type: Number"), void 0
  }

  const target = targetEl
  const [R, G, B] = startRGB
  const rgbMap = { R, G, B }

  target.style.backgroundColor = `rgb(${R},${G},${B})`

  const updateRGBVal = rgb =>
    ({
      R: num =>
        (target.style.backgroundColor = `rgb(${num},${rgbMap.G},${rgbMap.B})`),
      G: num =>
        (target.style.backgroundColor = `rgb(${rgbMap.R},${num},${rgbMap.B})`),
      B: num =>
        (target.style.backgroundColor = `rgb(${rgbMap.R},${rgbMap.G},${num})`),
    }[rgb])

  let currRGB = "B"
  let incDec = "inc"
  let counter = 0

  const bgInterval = setInterval(() => {
    let currVal = rgbMap[currRGB]
    if (counter === 105) {
      counter = 0
      currRGB = nextRGB(currRGB)
      incDec = currVal === 88 ? "inc" : "dec"
    }

    counter++
    updateRGBVal(currRGB)(
      incDec === "inc" ? rgbMap[currRGB]++ : rgbMap[currRGB]--
    )
  }, 200)

  return {
    stop: () => clearInterval(bgInterval),
  }
}

export default bgColorGenerator
