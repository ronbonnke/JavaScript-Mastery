// var b = 10; //global scope
function a() {
  var b = 10; // lexical scope

  c();
  function c() {
    console.log(b + 2);
  }
}

a();
