
const { processLineByLine } = require("../../utils");


(async function () {
  const depthMeasurements = await processLineByLine("day-1/part-2/input.txt");
  const combinedMeasurements = [];
  let increments = 0;


  for (let index = 0; index < depthMeasurements.length; index++) {
    const first = parseInt(depthMeasurements[index]);
    const second = parseInt(depthMeasurements[index + 1] || 0);
    const third = parseInt(depthMeasurements[index + 2] || 0);

    const sum = first + second + third;
    combinedMeasurements.push(sum);

    const currentMeasurement = combinedMeasurements[index];
    const previousMeasurement = combinedMeasurements[index - 1];

    if (previousMeasurement && currentMeasurement > previousMeasurement) {
      increments++;
    }
  }

  console.log(increments)
})()
