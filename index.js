// load letters array from modules folder
let letters = require("./modules/letters");
let uuid = () => {
  // create variable hold current time => aka: now in ml seconds
  let currentDate = Date.now();
  currentDate = currentDate.toString().split("");
  let id = "";
  let index = 0;

  for (let i = 0; i < letters.length; i++) {
    let random = parseInt(Math.random() * letters.length - 1);
    if (index == currentDate.length - 1) break;
    if (i % 2 == 0) {
      letters = letters.reverse();
    }
    id += `${letters[random]}${currentDate[index]}`;
    index++;
  }
  return id;
};
module.exports = uuid;
