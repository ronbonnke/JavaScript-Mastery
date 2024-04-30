function x() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 3000); // waits 3 mins
  console.log("Hello JavaScript"); // does'nt wait for anyone
}
x();
