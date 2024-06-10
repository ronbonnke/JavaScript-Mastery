const fun = () => {
  return new Promise((resolve, reject) => {
    const a = 20;
    if (a === 10) {
      resolve(12);
    } else {
      reject(-1);
    }
  });
};

const data = async () => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    console.log(result.json()); // api data
  } catch (error) {
    console.log(error);
  }
};
data();
