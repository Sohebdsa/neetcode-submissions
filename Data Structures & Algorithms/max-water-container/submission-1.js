class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // console.log(heights)
        let l=0;
        let r=heights.length-1;
        let maxAr = 0
        while(l<r){
            let h = Math.min(heights[l],heights[r]);
            let w = r-l;
            let area = h*w;
            // console.log(area)
            maxAr = Math.max(maxAr,area)
            if(heights[l] < heights[r]){
                l++
            }
            else{
                r--;
            }
        }
        return maxAr
    }
}
