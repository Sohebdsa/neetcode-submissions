class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let red=0;
        let white = 0;
        let blue = 0;
        for(let i=0;i<nums.length;i++){
            if(nums[i]==0){
                red++;
            }
            else if(nums[i] == 1){
                white++;
            }
            else{
                blue++
            }
        }
        let count=0;
        while(red!=0){
            nums[count]=0
            red--;
            count++;
        }
        while(white!=0){
            nums[count]=1
            white--;
            count++;
        }
        while(blue!=0){
            nums[count]=2
            blue--;
            count++;
        }
    }
}
