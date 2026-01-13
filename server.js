const { spawn } = require("child_process");

const child = spawn("npm", ["run", "start"], {
  stdio: "inherit",
  shell: true,
});
