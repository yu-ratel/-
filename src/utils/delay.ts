let timer: NodeJS.Timeout | number;

const asyncDelay = async () => {
  await new Promise((resolve) => {
    timer = setTimeout(resolve, 500);
  });
};

const claerDelay = () => {
  clearTimeout(timer);
};

export { asyncDelay, claerDelay };
