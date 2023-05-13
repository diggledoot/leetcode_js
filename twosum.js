function twosum (nums, target) {
  let hashmap = {}

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i]

    if (diff in hashmap) {
      return [hashmap[diff], i]
    } else {
      hashmap[nums[i]] = i
    }
  }
}

const assert = require('assert')
const { type } = require('os')

let data = [2, 7, 3, 4, 5]
let target = 9

try {
  assert(JSON.stringify(twosum(data, target)) == '[0,1]')
  console.log('Test passed~')
} catch (err) {
  console.error(`Test failed: ${err}`)
}
