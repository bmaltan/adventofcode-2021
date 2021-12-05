import { diagnostics } from './test.js';

function getLifeSupportRating(diagnostics) {
  const o2Rating = getRating(diagnostics, 'o2');
  const co2Rating = getRating(diagnostics, 'co2');

  return o2Rating * co2Rating;
}

function getRating(diagnostics, type) {
  let currentBitPosition = 0;

  while (diagnostics.length > 1) {
    const filterValue = getMostOrLeastCommon(
      diagnostics, 
      currentBitPosition, 
      type === 'o2' ? 'most' : 'least'
    );

    diagnostics = diagnostics.filter(number => 
      number[currentBitPosition] === filterValue
    );

    currentBitPosition++;
  }

  return parseInt(diagnostics[0], 2);
}

function getMostOrLeastCommon(diagnostics, bitPosition, type) {
  let oneCount = 0;

  diagnostics.forEach(diagnostic => {
    if (diagnostic[bitPosition] === '1') oneCount++;
  });

  if (type === 'most') {
    return oneCount >= diagnostics.length / 2 ? '1' : '0';
  } else {
    return oneCount < diagnostics.length / 2 ? '1' : '0';
  }
}

getLifeSupportRating(diagnostics);
