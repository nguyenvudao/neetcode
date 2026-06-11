class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const newSet = new Set(nums)
        let result = 0

        for (const num of newSet) {
            let streak = 0

            while (newSet.has(num + streak)) {
                streak++
            }

            result = Math.max(result, streak)
        }

        return result
    }

}
