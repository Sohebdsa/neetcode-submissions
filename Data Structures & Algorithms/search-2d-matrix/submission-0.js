class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let res = [];
        for(let i=0;i<matrix.length;i++){
            for(let j=0;j<matrix[i].length;j++){
                res.push(matrix[i][j])
            }
        }
        let l=0;
        let r=res.length-1;
        while(l<=r){
            let mid = Math.floor(l+(r-l)/2)
            if(res[mid] == target){
                return true
            }
            else if(target > res[mid]){
                l=mid+1
            }
            else{
                r=mid-1
            }
        }
        return false
    }
}
