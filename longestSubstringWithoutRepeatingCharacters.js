function lengthOfLongestSubstring (s) {
  let result = ''
  let maxLength = 0

  if (s.length === 0 || s.length === 1) {
    return s.length
  }

  let charArray = s.split('')

  for (let c of charArray) {
    if (result.includes(c)) {
      result = result.substring(result.indexOf(c) + 1)
    }
    result += c
    if (maxLength < result.length) {
      maxLength = result.length
    }
  }

  return maxLength
}

let data = 'abcabb'
console.log(lengthOfLongestSubstring(data))
