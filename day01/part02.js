import { numbers } from "./test.js";

function countNumOfLargerBatch(numbers, batchSize) {
  let numOfLarger = 0;

  for (let i = 1; i <= (numbers.length - batchSize); i++) {
    const iterationIndices = [...Array(batchSize).keys()].map(index => index + i);
    let currentBatch = 0;
    let previousBatch = 0

    iterationIndices.forEach(index => {
      currentBatch += numbers[index];
      previousBatch += numbers[index - 1];
    })

    if (currentBatch > previousBatch) {
      numOfLarger++;
    }
  }

  return numOfLarger;
}

countNumOfLargerBatch(numbers, 3);