const { PLAYER_NAME, MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, MOVE_DOWN_KEY } = require("./constants");

// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    connection.write(`Move: ${handleUserInput(key)}`);
    connection.write(`Name: ${PLAYER_NAME}: `);
    connection.write('Say: I AM SNEK');
  });
  return stdin;
};

const handleUserInput = function(key) {
  if (key === MOVE_UP_KEY) {
    return 'up';
  }
  if (key === MOVE_LEFT_KEY) {
    return 'left';
  }
  if (key === MOVE_DOWN_KEY) {
    return 'down';
  }
  if (key === MOVE_RIGHT_KEY) {
    return 'right';
  }
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = { setupInput };