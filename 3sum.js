function threeSum (nums) {
  let result = []
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    let [left, right] = [i + 1, nums.length - 1]
    let [prevLeft, prevRight] = [null, null]

    while (left < right) {
      let threeSum = nums[i] + nums[left] + nums[right]
      if (threeSum > 0) {
        right--
      } else if (threeSum < 0) {
        left++
      } else {
        if (nums[left] !== prevLeft || nums[right] !== prevRight) {
          result.push([nums[i], nums[left], nums[right]])
          prevLeft = nums[left]
          prevRight = nums[right]
        }
        left++
        right--
      }
    }
  }

  return result
}
