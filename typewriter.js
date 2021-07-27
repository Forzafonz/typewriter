const sentence = "hello there from lighthouse labs";

const typeWriter = function () {
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {process.stdout.write(sentence[i])}, 50 * i) ;
  }
}
typeWriter(sentence);
setTimeout(() => console.log("\n"), 50 * sentence.length);
