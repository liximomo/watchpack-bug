const path = require("path");
const watch = require("./watch");


watch(
  { directories: [path.join(__dirname, "fixtures/a")] },
  ({ getAllFiles }) => {
    console.log("dir a", getAllFiles());
  }
);
