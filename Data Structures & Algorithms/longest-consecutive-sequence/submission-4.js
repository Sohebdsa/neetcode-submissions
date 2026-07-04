class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let max=0;
        // console.log(set)
        for(let num of nums){
            let c=1;
            while(set.has(num+c)){
                console.log(c)
                c++;
            }
            max=Math.max(c,max)
        }

        return max
    }
}
