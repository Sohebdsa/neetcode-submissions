class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        function check(a){
            let l=0;
            let r=a.length-1;
            while(l<r){
                if(a[l]!=a[r]){
                    return [l,r]
                }
                l++;
                r--;
            }
            return true
        }
        let str = s;
        let res = check(s);
        let l = res[0];
        let r = res[1]
        let option2 = str.slice(0, r) + str.slice(r + 1);
        let option1 = str.slice(0, l) + str.slice(l + 1);
        if(check(option1) == true) return true
        if(check(option2) ==true ) return true
        return false;
    }
}
