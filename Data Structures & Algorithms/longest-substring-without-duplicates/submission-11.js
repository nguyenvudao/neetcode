class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let result = 0
        for (let i = 0; i < s.length; i++) {
            const charSet = new Set()
            for (let j = i; j < s.length; j++) {
                if (charSet.has(s[j])) break
                charSet.add(s[j])
            }

            result = Math.max(result, charSet.size)
        }

        return result
    }
}
