class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * 
     * Approach one: pointer counter
     * - pointer, ptr 
     * - maximum value, maxCon - initialized to 0
     * - increment value of ptr, ptr++
     *   - if num[i] === 1
     * - if num[i] === 0 or end of array
     *   - maxCon = max(ptr, maxCon)
     * 
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let ptr = 0, maxCon = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1)
                ptr++;
            else {
                maxCon = Math.max(ptr, maxCon);
                ptr = 0;
            }
        }

        maxCon = Math.max(ptr, maxCon);

        return maxCon;
    }
}
