class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let res = strs[0]
        for(let i=1;i<strs.length;i++){
            let word = strs[i]
            let j=0;
            while(word[j]==res[j] && j<word.length){
                j++
            }
            res = word.slice(0,j)
        }
        return res;
    }
}
