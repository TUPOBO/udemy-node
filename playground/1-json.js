const fs = require("fs");

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// fs.writeFileSync("1-json.json", bookJSON);

// const parseDate = JSON.parse(bookJSON, null, 2);
// console.log(parseDate.author);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = "TUPO";
data.age = "28";
console.log(data);

fs.writeFileSync("1-json.json", JSON.stringify(data));
