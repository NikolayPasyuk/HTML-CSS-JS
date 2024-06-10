const count = 8;
const character = "#";
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1)
    + " ".repeat(rowCount - rowNumber);
}

// TODO: Change this to a while loop
/*
for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}
*/

let done = 0

while (rows.length < count) {
  done++

  rows.push(padRow(rows.length + 1, count));
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);