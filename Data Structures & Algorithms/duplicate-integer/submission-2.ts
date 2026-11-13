class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const lookup = new Set();
        for (const num of nums) {
            if (lookup.has(num))
                return true;
            lookup.add(num);
        }

        return false;
    }
}
