function myAtoi (s) {
  s = s.trim()
  let match = s.match(/([-+]?\d+)/g)
  return Number(match[0])
}

let data = 'words and 987'
console.log(myAtoi(data))
