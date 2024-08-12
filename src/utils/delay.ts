const asyncDelay = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
};

export default asyncDelay;
