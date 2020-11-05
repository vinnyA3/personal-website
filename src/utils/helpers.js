// compose :: Fn -> Fn -> a
export const compose = (f, g) => x => f(g(x));

// isType :: String -> a -> Bool
export const isType = type => val => typeof val === type;

// isString :: a -> Bool
export const isString = isType('string');

// isNum :: a -> Bool
export const isNum = isType('number');

// isArray -> a -> Bool
export const isArray = val => Array.isArray(val);

// isDOMElement -> DOMElement -> Bool
export const isDOMElement = element => element?.nodeType === 1

// allOfType -> Fn -> Array[x] -> Bool
export const allOfType = typeFn => arr => arr.every(typeFn);

export const rand = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
