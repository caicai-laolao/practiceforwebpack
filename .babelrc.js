module.exports = function (api) {
  const isESM = api.env("esm");
  console.log(isESM);
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          modules: isESM ? false : "commonjs",
        },
      ],
      "@babel/preset-react",
      "@babel/preset-typescript",
    ],
  };
};
