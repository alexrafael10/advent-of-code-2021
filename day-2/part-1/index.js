const { processLineByLine } = require("../../utils");

(async function () {
  const commands = await processLineByLine("day-2/part-1/input.txt");
  const commandsDelta = {
    "up": -1,
    "down": +1,
    "forward": +1,
  };

  const { depth, horizontal } = commands.reduce(
    (acc, commandLine) => {
      const [command, delta] = commandLine.split(" ");
      const change = commandsDelta[command] * delta;
      if (command === "forward") acc.horizontal += change;
      else acc.depth += change;
      return acc;
    },
    { depth : 0, horizontal : 0 }
  );

  console.log({ depth, horizontal }, depth * horizontal);
})();
