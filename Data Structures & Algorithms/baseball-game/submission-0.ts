class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     * 
     * Stack approach:
     * 
     * ["1","2","+","C","5","D"]
     * 
     * [1, 2, 5, 10]
     */
    calPoints(operations: string[]): number {
        const stack: number[] = [];

        for (let i = 0; i < operations.length; i++) {
            if (operations[i] === '+') {
                const operand1 = stack.at(-1);
                const operand2 = stack.at(-2);
                stack.push(operand1 + operand2);
            } else if (operations[i] === 'D') {
                stack.push(stack.at(-1) * 2);
            } else if (operations[i] === 'C') {
                stack.pop();
            } else {
                stack.push(Number(operations[i]));
            }
        }

        return stack.reduce((accum, curr) => accum + curr, 0);
    }
}
