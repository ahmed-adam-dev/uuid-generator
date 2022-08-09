let letters = require("./modules/letters");
let currentDate = Date.now();
currentDate = currentDate.toString().split("");
let uuid = "";
let index = 0;

for (let i = 0; i < letters.length; i++) {
  let random = parseInt(Math.random() * letters.length - 1);
  if (index == currentDate.length - 1) break;
  if (i % 2 == 0) {
    letters = letters.reverse();
  }
  uuid += `${letters[random]}${currentDate[index]}`;
  index++;
}
module.exports = uuid;
