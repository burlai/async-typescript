export const setTimeoutExample = () => {
  console.log("Start of the program");

  setTimeout(() => console.log("Asynchronous code from setTimeout"), 3000);

  console.log("Synchronous code");
};
