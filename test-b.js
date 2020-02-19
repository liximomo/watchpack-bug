const path = require("path");
const watch = require("./watch");

watch(
  { directories: [path.join(__dirname, "fixtures/b")] },
  ({ getAllFiles }) => {
    console.log("dir b", getAllFiles());
  }
);
