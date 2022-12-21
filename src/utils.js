
export const convertToKgs = (weight) => {
  return weight * 0.453592
}

export const convertToCelsius = (degrees) => {
  return (degrees - 32) * 5/9
}

export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
