class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     * 
     * In place approach:
     * nums = [3, 2, 2, 3], val = 3
     * result = 2, nums = [2, 2, _, _]
     * 
     * [2, 2, 3, 3]
     *        i  j
     * 
     * [0,1,2,2,3,0,4,2] val = 2
     *      i         j
     * 
     * - iterate with i until you encounter val
     *   - iterate with j until you encounter non val
     *     - swap(i, j)
     * - return i
     */
    removeElement(nums: number[], val: number): number {
        let i = 0, n = nums.length;

        while (i < n) {
            if (nums[i] === val) {
                nums[i] = nums[--n];
            } else {
                i++;
            }
        }

        return n;
    }
}
