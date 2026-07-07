class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let ans=""
        let minlen = Math.min(word1.length,word2.length)
        let maxlen = Math.max(word1.length,word2.length)
        let max="";
        for(let i=0;i<minlen;i++){
            ans+=word1[i]
            ans+=word2[i]
        }
        if(word1.length == word2.length ) return ans;
        if(word1.length == max.length){
            max = word1;
        }
        else{
            max=word2
        }
        if (word1.length > minlen) {
            ans += word1.slice(minlen);
        } else if (word2.length > minlen) {
            ans += word2.slice(minlen);
        }
        return ans
    }
}
