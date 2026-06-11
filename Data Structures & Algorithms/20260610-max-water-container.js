class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // Brute force way
        // let res = 0
        // for (let i = 0; i < heights.length; i++) {
        //     for (let j = 0; j < heights.length; j++) {
        //         const distance = Math.abs(j - i)
        //         const height = Math.min(heights[i], heights[j])
        //         const water = distance * height

        //         if (water > res) res = water
        //     }
        // }

        // return res


        // Two pointer
        let res = 0
        for (let i = 0; i < heights.length; i++) {
            let right = heights.length - 1; // last element
            let left = i
            while (left < right) {
                const distance = Math.abs(right - left)
                const height = Math.min(heights[left], heights[right])
                const water = distance * height

                if (water > res) res = water
                else right--

            }
        }

        return res
    }
}
