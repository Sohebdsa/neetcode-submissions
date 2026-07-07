class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let count1 = 0;
    let count2 = 0;
    let el1 = null;
    let el2 = null;

    for (let i = 0; i < nums.length; i++) {
        if (count1 == 0 && nums[i] != el2 || count1 > 0 && nums[i] == el1) {
            el1 = nums[i];
            count1++;
        }
        else if (count2 == 0 && nums[i] != el1 || count2 > 0 && nums[i] == el2) {
            el2 = nums[i];
            count2++;
        }
        else {
            count1--;
            count2--;
        }
    }
    let res = []
    let v = Math.floor(nums.length / 3);
    count1=0;
    count2=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] == el1){
            count1++
        }
        else if(nums[i] == el2){
            count2++;
        }
    }
    if (count1 > v) res.push(el1);
    if (count2 > v) res.push(el2);
    return res;
    }
}
