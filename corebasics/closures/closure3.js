function x() {
  for (let i = 1; i <= 5; i++) {
    function close() {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
  console.log("Hello Js");
}
x();

//check file closure2 prints same but this one with var
