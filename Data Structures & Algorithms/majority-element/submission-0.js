class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let maj=nums[0];
        let count=0;
        for(let i=0;i<nums.length;i++){
            if(count==0){
                maj=nums[i]
                count++;
            }
            else if(count !=0 && nums[i]==maj){
                count++;
            }
            else{
                count--;
            }
        }
        return maj
    }
}
