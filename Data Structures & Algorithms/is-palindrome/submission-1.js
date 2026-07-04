class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isPalindrome(s) {
        let word = s
            .split(" ")
            .join("")
            .replace(/[^a-zA-Z0-9]/g, "")
            .toLowerCase();
        let l = 0;
        let r = word.length - 1;
        while (l < r) {
            if (word[l] != word[r]) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}
