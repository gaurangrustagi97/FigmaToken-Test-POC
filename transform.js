const fs = require("fs");

const colorsBlob = fs.readFileSync("allcolors.json");
const colors = JSON.parse(colorsBlob);
const objectColors = colors["Colors"];

Object.values(objectColors).forEach((objectValue) => {
  Object.entries(objectValue).forEach(([color, valueObject]) => {
    objectValue[color] = valueObject.value;
  });
});

colors["Colors"] = objectColors;
fs.writeFileSync("./colors.json", JSON.stringify(colors, null, 2));
