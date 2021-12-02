
const { processLineByLine } = require("../../utils");


(async function () {
  const depthMeasurement = await processLineByLine("day-1/part-1/input.txt");
  const { increases } = depthMeasurement.reduce(function (acc, current) {
    const currentMeasurement = parseInt(current);
    if (acc.prev && currentMeasurement > acc.prev) {
      acc.increases++;
    }
    acc.prev = currentMeasurement;
    return acc;
  }, { prev: null, increases: 0 });

  console.log(increases);
})()
