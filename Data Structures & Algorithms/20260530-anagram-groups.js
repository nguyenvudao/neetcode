class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const seen = new Map()
        for(const s of strs) {
            const str = s.split('').sort().join('')
            if (seen.has(str)) {
                const currentVal = seen.get(str)
                currentVal.push(s)
                seen.set(str, currentVal)}
            else seen.set(str, Array(s))
        }

        return Array.from(seen.values())
    }
}
