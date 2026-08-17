class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0

        for (let i = 0; i < s.length; i++) {
            const frequency = new Map()
            let maxF = 0

            for (let j = i; j < s.length; j++) {
                frequency.set(s[j], (frequency.get(s[j]) || 0) + 1)

                maxF = Math.max(maxF, frequency.get(s[j]))

                const numOfChanges = j - i + 1
                if (numOfChanges - maxF <= k) res = Math.max(res, numOfChanges)
            }
        }

        return res
    }
}
