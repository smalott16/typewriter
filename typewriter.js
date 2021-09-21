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

// for (let i = 0; i < sentence.length; i++) {
//   interval += 50
//   setTimeout(() => {
//    process.stdout.write(sentence[i]);
//    if (i === sentence.length -1) {
//     //console.log("\n")
//   }
//   }, (1000+ interval))
// }
