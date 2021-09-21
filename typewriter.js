const sentence = "hello there from lighthouse labs";
let interval = 0;
for (const char of sentence) {
  interval += 50
  setTimeout(() => {
   process.stdout.write(char);
  }, (interval))
}

setTimeout(() => {
  process.stdout.write("\n");
}, interval)

