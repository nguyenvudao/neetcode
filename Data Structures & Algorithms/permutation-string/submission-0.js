class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const n = s1.length, m = s2.length;
        if (n > m) return false;

        const a = 'a'.charCodeAt(0);
        const need = new Array(26).fill(0);   // counts for s1
        const win  = new Array(26).fill(0);   // counts for current window

        // Build s1's counts and the first window of s2
        for (let i = 0; i < n; i++) {
            need[s1.charCodeAt(i) - a]++;
            win[s2.charCodeAt(i) - a]++;
        }

        // How many of the 26 letters currently match
        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (need[i] === win[i]) matches++;
        }

        for (let r = n; r < m; r++) {
            if (matches === 26) return true;

            // slide right edge in
            const inIdx = s2.charCodeAt(r) - a;
            win[inIdx]++;
            if (win[inIdx] === need[inIdx]) matches++;
            else if (win[inIdx] === need[inIdx] + 1) matches--;

            // slide left edge out
            const outIdx = s2.charCodeAt(r - n) - a;
            win[outIdx]--;
            if (win[outIdx] === need[outIdx]) matches++;
            else if (win[outIdx] === need[outIdx] - 1) matches--;
        }

        return matches === 26;
    }
}