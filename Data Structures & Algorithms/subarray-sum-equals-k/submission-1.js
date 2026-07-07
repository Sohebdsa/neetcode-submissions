class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let count = 0; // how many subarrays we find
        let sum = 0; // running total
        let map = new Map();
        map.set(0, 1); // base case: one way to have sum = 0

        for (let num of nums) {
            sum += num; // add current number

            // check if (sum - k) was seen before
            if (map.has(sum - k)) {
                count += map.get(sum - k);
            }

            // record this sum in the map
            map.set(sum, (map.get(sum) || 0) + 1);
        }

        return count;
    }
}
