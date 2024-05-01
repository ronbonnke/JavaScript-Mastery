// Promises in js

const cart = ["shoe", "pant", "shirt"];

createOrder(cart, function (orderId) {
  proceed(orderId);
});

const Promise = createOrder(cart);

Promise.then(function (orderId) {
  proceed(orderId);
});
