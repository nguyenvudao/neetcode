class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const diff = new Map()
        for(let i = 0; i < nums.length; i++) {
            const num = nums[i]
            const otherNum = target - num;
            if (diff.has(otherNum)) return [i, diff.get(otherNum)]
            
            diff.set(nums[i], i)

        }
    }
}
