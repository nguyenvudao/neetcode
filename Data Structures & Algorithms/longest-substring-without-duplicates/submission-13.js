class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        /**
         * Brute force
         */
        let result = 0
        // for (let i = 0; i < s.length; i++) {
        //     const charSet = new Set()
        //     for (let j = i; j < s.length; j++) {
        //         if (charSet.has(s[j])) break
        //         charSet.add(s[j])
        //     }

        //     result = Math.max(result, charSet.size)
        // }

        // return result

        /**
         * Sliding Window
         */
        let left = 0
        const charSet = new Set()
        for (let right = 0; right < s.length; right++) {
            while (charSet.has(s[right])) {
                charSet.delete(s[left])
                left++
            }
            charSet.add(s[right])
            result = Math.max(result, right - left + 1)

        }
        return result

    }
}
