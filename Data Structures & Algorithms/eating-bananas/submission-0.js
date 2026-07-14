class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l=1;
        let r=Math.max(...piles);
        let sp = h;

        while(l<=r){
            let mid=Math.floor(l+(r-l)/2);
            let total_hour=0;

            for(let pile of piles){
                total_hour+=Math.ceil(pile/mid)
            }
            if(total_hour <= h){
                sp = mid;
                r = mid-1
            }
            else{
                l=mid+1
            }
        }
        return sp
    }
}
