import { isString, isNum, isArray, allOfType, rand } from '../utils/helpers';
const areAllNums = allOfType(isNum);

const nextRGB = rgb =>
  ({
    R: 'G',
    B: 'R',
    G: 'B',
  }[rgb]);

const bgColorGenerator = targetEl => startRGB => {
  if (!isString(targetEl) || !isArray(startRGB)) {
    return (
      console.error(
        'Argument(1) must be of type: "string".  Argument(2) must be of type: Array[Number]'
      ),
      void 0
    );
  } else if (!areAllNums(startRGB)) {
    return (
      console.error('Argument(2) must be composed of type: Number'), void 0
    );
  }

  const target = document.getElementById(targetEl);
  const [R, G, B] = startRGB;
  const rgbMap = { R, G, B };

  target.style.backgroundColor = `rgb(${R},${G},${B})`;

  const updateRGBVal = rgb =>
    ({
      R: num =>
        (target.style.backgroundColor = `rgb(${num},${rgbMap.G},${rgbMap.B})`),
      G: num =>
        (target.style.backgroundColor = `rgb(${rgbMap.R},${num},${rgbMap.B})`),
      B: num =>
        (target.style.backgroundColor = `rgb(${rgbMap.R},${rgbMap.G},${num})`),
    }[rgb]);

  let currRGB = 'B';
  let incDec = 'inc';
  let counter = 0;

  const bgInterval = setInterval(() => {
    let currVal = rgbMap[currRGB];
    if (counter === 105) {
      counter = 0;
      currRGB = nextRGB(currRGB);
      incDec = currVal === 88 ? 'inc' : 'dec';
    }

    counter++;
    updateRGBVal(currRGB)(
      incDec === 'inc' ? rgbMap[currRGB]++ : rgbMap[currRGB]--
    );
  }, 200);
};

export default bgColorGenerator;
