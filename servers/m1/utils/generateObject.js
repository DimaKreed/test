const typesOfObjectValue = ['boolean', 'string', 'number', 'object', 'array'];

const randomString = (numOfSymbols = 10) => Math.random().toString(36).substring(2, 2 + numOfSymbols);

const randomElementFromArray = () => typesOfObjectValue[Math.floor(Math.random() * typesOfObjectValue.length)];

const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomFixedInteger = function (length) {
  return Math.floor(10 ** (length - 1) + Math.random() * (10 ** length - 10 ** (length - 1) - 1));
};
const generateValueAccordingToItsType = (type, rootKeyCount, maxDepth, currentDepth) => {
  switch (type) {
    case 'boolean':
      return Math.random() < 0.5;
    case 'string':
      return randomString(randomIntFromInterval(1, 20));
    case 'number':
      return randomFixedInteger(randomIntFromInterval(1, 20));
    case 'array':
      return [];
    default:
      if (currentDepth === maxDepth) return {};

      return generateObject(Math.floor(rootKeyCount / 2), maxDepth - 1, currentDepth + 1);
  }
};

const generateObject = (rootKeyCount, maxDepth, currentDepth = 1) => {
  const object = {};
  for (let i = 0; i < rootKeyCount; i++) {
    object[randomString()] = generateValueAccordingToItsType(randomElementFromArray(), rootKeyCount, maxDepth, currentDepth);
  }
  return (object);
};

module.exports = { generateObject };
