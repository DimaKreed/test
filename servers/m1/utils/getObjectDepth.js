const getObjectDepth = (object) => {
  let level = 1;
  // eslint-disable-next-line no-restricted-syntax
  for (const key in object) {
    if (typeof object[key] === 'object') {
      const depth = getObjectDepth(object[key]) + 1;
      level = Math.max(depth, level);
    }
  }
  return level;
};

module.exports = { getObjectDepth };
