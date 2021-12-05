const { processLineByLine } = require("../../utils");

(async function () {
  const commands = await processLineByLine("day-2/part-2/input.txt");
  const commandsDelta = {
    "up": -1,
    "down": +1,
  };

  const { depth, horizontal } = commands.reduce(
    (acc, commandLine) => {
      const [command, movementAmountString] = commandLine.split(" ");
      const movementAmount = parseInt(movementAmountString);
      if (command === "forward"){
         acc.horizontal += movementAmount;
         acc.depth += movementAmount * acc.aim;
      }
      else {
        acc.aim += commandsDelta[command] * movementAmount;
      }
      return acc;
    },
    { depth : 0, horizontal : 0, aim : 0 }
  );

  console.log({ depth, horizontal }, depth * horizontal);
})();
