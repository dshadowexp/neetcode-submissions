class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const lookup = new Map<number, number>(); //diff -> i

        for (let i = 0; i < nums.length; i++) {
            if (lookup.has(nums[i])) {
                return [lookup.get(nums[i]), i];
            }
            const diff = target - nums[i];
            lookup.set(diff, i);
        }
    }
}
