class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
       const s1Map = new Map()
       const s2Map = new Map()
       let result = true
       
        for (let i = 0; i < s1.length; i++) {
            const s2Char = s2[i]
            s2Map.set(s2Char, (s2Map.get(s2Char) || 0) + 1)
        }

       for (const char of s1) {
            s1Map.set(char, (s1Map.get(char) || 0) + 1)
       }

       s2Map.forEach((val, key) => {
            if (s1Map.get(key) !== val) result = false
       })

       if (result === true) return result

       for (let i = s1.length; i < s2.length; i++) {
            let isSame = true
            s2Map.set(s2[i], (s2Map.get(s2[i]) || 0) + 1)
            const firstElement = s2[i - s1.length] || 1

            s2Map.set(firstElement, (s2Map.get(firstElement) - 1))

            if(s2Map.get(firstElement) === 0) s2Map.delete(firstElement)


            s2Map.forEach((val, key) => {
                if (s1Map.get(key) !== val) isSame = false
            })
            
            if (isSame === true) return isSame
            result = isSame
       }

       return result
    }
}