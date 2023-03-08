const babel = require("@babel/core");
const glob = require("glob");
const fs = require("fs");

const files = glob.sync("./src/**/*.{js,jsx,tsx,ts}", { nodir: true });

files.forEach((file) => {
  const input = fs.readFileSync(file, "utf8");

  babel.transform(input, { filename: file }, (err, result) => {
    if (err) throw err;
    const outputFilename = file
      .replace("/input/", "/output/")
      .replace(/(jsx?|tsx?)/, "js");
    fs.mkdirSync(outputFilename.replace(/\/[^\/]*$/, ""), { recursive: true });
    fs.writeFileSync(outputFilename, result.code, "utf8");
  });
});
