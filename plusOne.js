function plusOne (digits) {
  let numStr = digits.join('')
  let numBigInt = BigInt(numStr) + BigInt(1)
  return numBigInt.toString().split('').map(Number)
}

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))
