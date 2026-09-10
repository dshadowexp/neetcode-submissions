class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const stringArray = [];
        for (const str of strs) {
            stringArray.push(`${str.length}*${str}`);
        }
        return stringArray.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const results = [];

        let i = 0;
        let currentString = [];
        while (i < str.length){
            if (str[i] === '*') {
                const length = parseInt(currentString.join(''));
                const extractedString = str.substring(i + 1, i + length + 1);
                results.push(extractedString);
                i += length + 1;
                currentString = [];
            } else {
                currentString.push(str[i]);
                i++;
            }
        }

        return results;
    }
}
