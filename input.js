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
    connection.write('Name: SHO');
  });
  return stdin;
};

const handleUserInput = function(key) {
  if (key === 'w') {
    return 'up';
  }
  if (key === 'a') {
    return 'left';
  }
  if (key === 's') {
    return 'down';
  }
  if (key === 'd') {
    return 'right';
  }
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = { setupInput };