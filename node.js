const rimraf = require("rimraf");
const tsc = require("typescript");
const fs = require("fs");
const path = require("path");

const sourceDir = "./src"; // 指定源代码目录
const outDir = "./lib"; // 指定编译后的输出目录

// 删除编译目录，重新编译
rimraf.sync(outDir);

// 编译 TypeScript
const tsConfigFilePath = path.join(process.cwd(), "tsconfig.json");
const tsConfig = JSON.parse(fs.readFileSync(tsConfigFilePath));
const tsCompilerOptions = tsConfig.compilerOptions;
tsCompilerOptions.rootDir = sourceDir;
tsCompilerOptions.outDir = outDir;
const tsProgram = tsc.createProgram(tsConfig.fileNames, tsCompilerOptions);
const result = tsProgram.emit();

if (result.emitSkipped || result.diagnostics.length > 0) {
  console.error(result.diagnostics);
  process.exit(1);
}

// 复制其他文件到编译目录
fs.readdirSync(sourceDir)
  .filter((filename) => !filename.endsWith(".ts"))
  .forEach((filename) => {
    fs.copyFileSync(
      path.join(sourceDir, filename),
      path.join(outDir, filename)
    );
  });
