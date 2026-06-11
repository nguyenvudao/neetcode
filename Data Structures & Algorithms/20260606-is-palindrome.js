class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const arr = s.replace(/[^A-Za-z0-9]/g, '').split(' ').join('').split('')
        const middle = Math.floor(arr.length / 2)
        let j = arr.length - 1;
        
        for (let i = 0; i < middle; i++) {
            if (arr[i].toLowerCase() !== arr[j].toLowerCase()) return false
            j--
        }
        return true
    }
}
