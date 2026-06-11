class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()
        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1)
        }

        const sorted = Array.from(map).sort((a ,b) => b[1] - a[1]);
        return sorted.slice(0, k).map(ele => ele[0])
    }
}
