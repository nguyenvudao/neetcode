class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const product = nums.reduce((acc, cur) => {
            if (cur !== 0) {
                return acc * cur
            } else { return acc * 1 }
        })

        const hasManyZero = nums.filter(num => num === 0)

        return nums.map(num => {
            if (hasManyZero.length > 1) return 0

            if (hasManyZero.length === 1) return num === 0 ? product : 0

            return product / num
        })
    }
}
