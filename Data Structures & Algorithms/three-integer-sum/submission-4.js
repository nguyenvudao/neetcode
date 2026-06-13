class Solution {
    threeSum(nums) {
        // Your code goes here
        const res = new Set()
        nums = nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length; i++) {
            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const total = nums[i] + nums[left] + nums[right]
                if (total === 0) res.add(JSON.stringify([nums[i], nums[left], nums[right]]))

                if (total < 0) left++
                else right--
            }
        }

        return Array.from(res, JSON.parse)
    }
}