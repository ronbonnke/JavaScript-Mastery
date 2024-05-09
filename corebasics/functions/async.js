const func = () => {
  const randomNumber = Math.random(10);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomNumber < 0.5) {
        resolve(randomNumber);
      } else {
        reject("the number is more");
      }
    }, 6000);
  });
};

const name = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products/1");
    const result = await response.json();
    // console.log(result.id);
    return result;
  } catch (error) {
    console.log(error);
  }
};
const data = async () => {
  try {
    const data1 = await name();
    if (data1) {
      data1.images.map((item) => {
        console.log(item);
      });
    }
  } catch (error) {
    console.log(error);
  }
};
data();

// if(data?:
// <></>:
// <>{result.name}</>)
