function convertToRoman(num: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (num < 1 || num > 3999) {
      reject(new Error('Number out of range. Please provide a number between 1 and 3999.'));
    }

    const romanNumerals: [number, string][] = [
      [1000, 'M'],
      [900, 'CM'],
      [500, 'D'],
      [400, 'CD'],
      [100, 'C'],
      [90, 'XC'],
      [50, 'L'],
      [40, 'XL'],
      [10, 'X'],
      [9, 'IX'],
      [5, 'V'],
      [4, 'IV'],
      [1, 'I'],
    ];

    let result = '';

    for (const [value, symbol] of romanNumerals) {
      while (num >= value) {
        result += symbol;
        num -= value;
      }
    }

    resolve(result);
  });
}

// Example usage:
convertToRoman(20)
  .then(romanNumeral => console.log(romanNumeral))
  .catch(error => console.error(error));

convertToRoman(50)
  .then(romanNumeral => console.log(romanNumeral))
  .catch(error => console.error(error));
