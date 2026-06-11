class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        /**
         * Brute force
         */
        // if (height.length === 0) return 0
        // let result = 0

        // for (let i = 0; i < height.length; i++) {
        //     let maxL = height[i]
        //     let maxR = height[i]

        //     for (let j = 0; j < i; j++) {
        //         maxL = Math.max(height[j], maxL)
        //     }

        //     for (let j = i + 1; j < height.length; j++) {
        //         maxR = Math.max(height[j], maxR)
        //     }

        //     result += Math.min(maxL, maxR) - height[i]
        // }

        // return result


        /**
         * Two Pointers
         */
        if (height.length === 0) return 0

        let left = 0
        let right = height.length - 1
        let leftMax = height[left]
        let rightMax = height[right]
        let result = 0

        while (left < right) {
            if (leftMax < rightMax) {
                left++
                leftMax = Math.max(leftMax, height[left])
                result += leftMax - height[left]
            } else {
                right--
                rightMax = Math.max(rightMax, height[right])
                result += rightMax - height[right]
            }
        }
        

        return result
    }
}
