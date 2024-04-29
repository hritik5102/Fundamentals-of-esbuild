(() => {
  // src/a.js
  var a = "a";
  var a_default = a;

  // src/b.ts
  var b = "bbc";
  var b_default = b;

  // src/index.js
  console.log(a_default + b_default);
})();
