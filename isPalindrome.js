function isPalindrome (x) {
  let numberString = x.toString()

  if (numberString.length <= 1) {
    return true
  }

  if (numberString.includes('-')) {
    return false
  }

  if (numberString.length == 2 && !numberString.includes('-')) {
    if (numberString[0] == numberString[1]) {
      return true
    } else {
      return false
    }
  }

  let reverseArray = numberString.split('')
  reverseArray = reverseArray.reverse()
  let reverseString = reverseArray.join('')

  if (numberString === reverseString) {
    return true
  }

  return false
}

console.log(isPalindrome(121))
