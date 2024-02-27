process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const someData = process.stdin.read();
  if (someData) {
    process.stdout.write(`Your name is: ${someData}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
