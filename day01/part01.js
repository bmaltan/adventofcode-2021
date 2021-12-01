import { numbers } from "./test.js";

function countLargerThanPrevious(numbers) {
  let numOfLarger = 0;

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[i - 1]) {
      numOfLarger++;
    }
  }

  return numOfLarger;
}

countLargerThanPrevious(numbers);