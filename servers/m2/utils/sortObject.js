const { performance } = require('perf_hooks');

const sortObject = (o, isNested = false) => {
  const startTime = performance.now();

  const sortedObj = Object(o) !== o || Array.isArray(o)
    ? o
    : Object.keys(o).sort().reduce((a, k) => ({ ...a, [k]: sortObject(o[k], true) }), {});

  const endTime = performance.now();

  return isNested ? sortedObj : { ...sortedObj, timeToSort: endTime - startTime };
};

module.exports = { sortObject };
