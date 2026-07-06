class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        function swap(nums,a,b){
            let temp=nums[a]
            nums[a] = nums[b]
            nums[b] = temp
        }
        let l=0;
        let r=nums.length-1;
        while(l<=r){
            if(nums[l] == val){
                swap(nums,l,r)
                r--;
            }
            else{
                l++;
            }

        }
        return l
    }
}
