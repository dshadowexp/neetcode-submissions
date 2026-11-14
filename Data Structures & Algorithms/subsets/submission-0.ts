class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     * 
     * all = []
     * n = nums.length
     * innerFunc(index, holder):
     *  if index > n - 1: return
     *  push holder content in all
     *  for(i = index to n):
     *   innerfunc(i, [...holder, nums[i]])
     */
    subsets(nums: number[]): number[][] {
        const allSets = [];
        const n = nums.length;

        function backtrack(idx: number, holder: number[]) {
            if (idx > n) return;
            allSets.push([...holder]);
            for (let i = idx; i < n + 1; i++) {
                backtrack(i + 1, [...holder, nums[i]]);
            }
        }

        backtrack(0, []);
        return allSets;
    }
}
