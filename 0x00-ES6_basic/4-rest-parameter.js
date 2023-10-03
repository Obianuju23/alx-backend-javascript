export default function returnHowManyArguments(...args) {
  let Sum = 0;
  // eslint-disable-next-line no-unused-vars
  for (const arg of args) {
    Sum += 1;
  }
  return Sum;
}
