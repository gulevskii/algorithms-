


/**
 * @param {number} integer
 * @returns {string} str - roman numeral string
 */
function integerToRoman(num) {
  const map = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1,
  };

  const ans = []

  for (let key in map) {
    const amount = Math.floor(num / map[key])
    ans.push(key.repeat(amount))
    if (amount) num%=map[key]
  }
  return ans.join('')
}


