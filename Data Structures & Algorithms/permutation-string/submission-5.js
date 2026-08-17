class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
    // First option, compare two hashes

    //    const s1Map = new Map()
    //    const s2Map = new Map()
    //    let result = true
       
       
    //     for (let i = 0; i < s1.length; i++) {
    //         const s2Char = s2[i]
    //         s2Map.set(s2Char, (s2Map.get(s2Char) || 0) + 1)
    //     }

    //    for (const char of s1) {
    //         s1Map.set(char, (s1Map.get(char) || 0) + 1)
    //    }

    //     // compare first window
    //    s2Map.forEach((val, key) => {
    //         if (s1Map.get(key) !== val) result = false
    //    })

    //    if (result === true) return result

    //    for (let i = s1.length; i < s2.length; i++) {
    //         let isSame = true
    //         s2Map.set(s2[i], (s2Map.get(s2[i]) || 0) + 1)
    //         const firstElement = s2[i - s1.length] || 1

    //         s2Map.set(firstElement, (s2Map.get(firstElement) - 1))

    //         if(s2Map.get(firstElement) === 0) s2Map.delete(firstElement)
    //         s2Map.forEach((val, key) => {
    //             if (s1Map.get(key) !== val) isSame = false
    //         })
            
    //         if (isSame === true) return isSame
    //    }

    //    return result


    // Second option, keep a matches variable, return when matches === 26
    let matches = 0 // = 0 because no matches yet.
    const s1Count = new Array(26).fill(0)
    const s2Count = new Array(26).fill(0)

    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - 97]++
    }
    
    for (let i = 0; i < s1.length; i++) {
        s2Count[s2.charCodeAt(i) - 97]++
    }

    // First check after init
    for (let i = 0; i < s2Count.length; i++) {
        if (s1Count[i] === s2Count[i]) matches++
    }

    if (matches === 26) return true


    for (let i = s1.length; i < s2.length; i++) {
        const idx = s2.charCodeAt(i) - 97

        if (s2Count[idx] === s1Count[idx]) matches--
        s2Count[idx]++
        if (s2Count[idx] === s1Count[idx]) matches++


        const firstElementIdx = s2.charCodeAt(i - s1.length) - 97
        if (s2Count[firstElementIdx] === s1Count[firstElementIdx]) matches--
        s2Count[firstElementIdx]--
        if (s2Count[firstElementIdx] === s1Count[firstElementIdx]) matches++

        if (matches === 26) return true
    }

        return matches === 26
    }
}