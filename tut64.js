const fs = require("fs");
let text = fs.readFileSync("tut64.txt","utf-8");
text = text.replace("browser","abhinav");

console.log("the content of file is.")
console.log(text);

console.log("creating a new file...")
fs.writeFileSync("abhinav.text",text);