import { diagnostics } from './test.js';

function getPowerConsumption(diagnostics) {
  const oneCount = {};

  diagnostics.forEach(diagnostic => {
    for (let i = 0; i < diagnostic.length; i++) {
      if (diagnostic[i] === '1') {
        oneCount[i] = oneCount[i] ? oneCount[i] + 1 : 1;
      }
    }
  });

  let gammaBinary = '';
  for (const key in oneCount) {
    if (oneCount[key] > diagnostics.length / 2) {
      gammaBinary += '1'
    } else {
      gammaBinary += '0'
    }
  }
  
  const epsilonBinary = gammaBinary
    .split('')
    .map(bit => (bit === '0' ? '1' : '0'))
    .join('');

  const gammaRate = parseInt(gammaBinary, 2);
  const epsilonRate = parseInt(epsilonBinary, 2);

  return gammaRate * epsilonRate;
}

getPowerConsumption(diagnostics);