// Created by Vincent Aceto (vinnya3)
// Licensed under MIT

type Primaries = 'R' | 'G' | 'B';

type RGBMap = { [P in Primaries]: number };

const nextRGB = (rgb: Primaries): Primaries => {
  const map: { [p in Primaries]: Primaries } = {
    R: 'G',
    B: 'R',
    G: 'B',
  };

  return map[rgb];
};

// ie: bgColorGenerator('main')([193, 88, 88]);
const bgColorGenerator =
  (targetEl: HTMLElement) =>
  (startRGB: number[]): { stop: () => void } => {
    const target = targetEl;
    const [R, G, B]: number[] = startRGB;
    const rgbMap: RGBMap = { R, G, B };

    const updateRGBVal = (rgb: Primaries): ((num: number) => void) =>
      ({
        R: (num: number) =>
          (target.style.backgroundColor = `rgb(${num},${rgbMap.G},${rgbMap.B})`),
        G: (num: number) =>
          (target.style.backgroundColor = `rgb(${rgbMap.R},${num},${rgbMap.B})`),
        B: (num: number) =>
          (target.style.backgroundColor = `rgb(${rgbMap.R},${rgbMap.G},${num})`),
      }[rgb]);

    let currRGB: Primaries = 'B';
    let incDec = 'inc';
    let counter = 0;

    target.style.backgroundColor = `rgb(${R},${G},${B})`;

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

    return {
      stop: () => clearInterval(bgInterval),
    };
  };

export default bgColorGenerator;
