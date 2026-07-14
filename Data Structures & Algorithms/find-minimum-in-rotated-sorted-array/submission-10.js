class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l=0;
        let r=nums.length-1;
        while(l<r){
            let mid=Math.floor(l+(r-l)/2);
            if(nums[mid-1] > nums[mid] && nums[mid] < nums[mid+1]){
                return nums[mid]
            }
            if(nums[r] < nums[mid]){
                l=mid+1
            }
            else{
                r=mid
            }
        }
        return nums[l]
    }
}
