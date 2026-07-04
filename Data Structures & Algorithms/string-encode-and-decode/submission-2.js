class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = ''
        for (let i = 0; i < strs.length; i++) {
            let s = strs[i].length;
            str += `${s}#`
            str += strs[i].split("").join("")
        }
        return str;
    }
    //str = 5#hello5#world
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []
        let i=0
        while (i < str.length) {
            // Step 1: find the separator #
            let j = i;
            while (str[j] !== "#") {
                j++;
            }

            // Step 2: extract the length
            let length = parseInt(str.slice(i, j));

            // Step 3: extract the word of that length
            let word = str.slice(j + 1, j + 1 + length);
            res.push(word);

            // Step 4: move pointer forward
            i = j + 1 + length;
        }
        return res;
    }
}
