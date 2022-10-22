const getObjectDepth = (object, initialLevel = 0) => {
  let level = initialLevel;
  // eslint-disable-next-line no-restricted-syntax
  for (const key in object) {
    if (typeof object[key] === 'object' && !Array.isArray(object[key])) {
      level += 1;
      getObjectDepth(object[key], level);
    }
  }
  return level;
};

module.exports = { getObjectDepth };
