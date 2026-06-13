class Solution {
    threeSum(nums) {
        /**
         * From HelloInterview.com
         */
        // const res = new Set()
        // nums = nums.sort((a, b) => a - b);
        // for (let i = 0; i < nums.length; i++) {
        //     let left = i + 1;
        //     let right = nums.length - 1;

        //     while (left < right) {
        //         const total = nums[i] + nums[left] + nums[right]
        //         if (total === 0) res.add(JSON.stringify([nums[i], nums[left], nums[right]]))

        //         if (total < 0) left++
        //         else right--
        //     }
        // }

        // return Array.from(res, JSON.parse)

        /**
         * Neetcode
         */
        const sorted = nums.sort((a, b) => a - b)
        const res = new Set()
        for (let i = 0; i < sorted.length; i++) {
            const first = sorted[i]
            let left = i + 1
            let right = sorted.length - 1

            if (first > 0) break
            
            while (right > left) {
                const threeSum = first + sorted[left] + sorted[right]
                if (threeSum < 0) left++
                if (threeSum > 0) right--
                if (threeSum === 0) { 
                    res.add(JSON.stringify([first, sorted[left], sorted[right]]))
                    left++
                    right--
                }
            }
        }
        return Array.from(res, JSON.parse)
    }
}