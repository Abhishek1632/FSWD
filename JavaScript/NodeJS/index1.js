const fs = require("fs");
let text = fs.readFileSync("tut12.html", "utf-8");
text = text.replace("browser", "abhi12");

console.log("The content of the file is");
console.log(text);

console.log("Creating a new file...");
fs.writeFileSync("abhi12.html", text);
