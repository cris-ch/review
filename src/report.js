// report array function
const report = (grades) => {
  if (typeof grades !== "string") {
    throw new Error("Input must be a comma-separated string");
  }

  let gradesArr = grades.split(", ");
  let gradesCount = {};
  for (let i = 0; i < gradesArr.length; i++) {
    if (gradesArr[i] === "Green") {
      gradesCount.Green = gradesCount.Green + 1 || 1;
    } else if (gradesArr[i] === "Amber") {
      gradesCount.Amber = gradesCount.Amber + 1 || 1;
    } else if (gradesArr[i] === "Red") {
      gradesCount.Red = gradesCount.Red + 1 || 1;
    }
  }

  let gradesReport = "";
  let counter = 1;
  for (let key in gradesCount) {
    if (counter === Object.keys(gradesCount).length) {
      gradesReport += key + ": " + gradesCount[key];
    } else {
      gradesReport += key + ": " + gradesCount[key] + "\\n";
    }
    counter++;
  }
  console.log("gradesReport: " + gradesReport);
  return gradesReport;
};

module.exports = report;
