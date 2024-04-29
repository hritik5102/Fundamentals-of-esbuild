const esbuild = require("esbuild");

// Esbuild has two method asynchronous and synchronous version.
// asyncronous version will return you a promise so that you can wait for it
// synchronous function just does it immedietely, and not returning a promise.

const buildOptions = {
  entryPoints: ["src/index.js"],
  minify: true,
  outfile: "dist-node/index.js",
  bundle: true,
  loader: { ".ts": "ts" },
  sourcemap: true,
  target: ["chrome58", "firefox57", "safari11", "edge14"], // If you use < edge14 then it will thrown an error, saying: "Transforming const to the configured target environment ("chrome58", "edge12", "firefox57", "safari11") is not supported yet"
};

async function watch() {
  let ctx = await esbuild.context(buildOptions);
  await ctx.watch();
  console.log("Watching...");
}

watch();
