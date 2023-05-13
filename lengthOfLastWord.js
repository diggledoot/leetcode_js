function lengthOfLastWord (s) {
  let splitArray = s.split(' ')
  let lastWord = splitArray[splitArray.length - 1].length
  return lastWord
}

let data = 'Hello World'
console.log(lengthOfLastWord(data))
