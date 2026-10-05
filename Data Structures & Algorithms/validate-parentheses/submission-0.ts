class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];
        const bracketTable = {
            ')': '(',
            ']': '[',
            '}': '{',
        };

        for (let i = 0; i < s.length; i++) {
            if ("([{".includes(s[i])) {
                stack.push(s[i]);
            } else {
                const curr = stack.pop();
                if (curr !== bracketTable[s[i]]) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
