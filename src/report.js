// report array function
const report = (grades) => {
  let gradesArr = grades.split(", ");
  console.log('gradesArr: ', gradesArr);
  let green = 0;
  let amber = 0;

  for (let i = 0; i < gradesArr.length; i++) {
    if (gradesArr[i] === 'Green') {
      green++;
    } else if (gradesArr[i] === 'Amber') {
      amber++;
    }
  }
  if (amber === 0) {
    return `Green: ${green}`;
  } else if (green === 0) {
    return `Amber: ${amber}`;
  } else {
    return `Green: ${green}\\nAmber: ${amber}`;
  }
};

module.exports = report;
