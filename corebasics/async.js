const func = () => {
  const randomNumber = Math.random(10);
  if (randomNumber > 0.5) {
    throw new Error("It is more");
  } else {
    console.log(randomNumber);
  }
};

const name = async () => {
  try {
    await func();
    console.log("It is less");
  } catch (error) {
    console.log(error);
  }
};
name();
