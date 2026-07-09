class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, t) {
        let l=0;
        let r = nums.length-1
        while(l<r){
            let sum = nums[l] + nums[r];
            console.log(sum)
            if(sum == t && l < r){
                return [l+1,r+1];
            }
            else if(sum < t){
                l++
            }
            else{
                r--;
            }
        }
        return []
    }
}
