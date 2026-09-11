class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let maxSoFar = -1;

        for (let i = arr.length - 1; i > -1; i--) {
            const curr = arr[i];
            arr[i] = maxSoFar;
            maxSoFar = Math.max(maxSoFar, curr);
        }

        return arr;
    }
}
