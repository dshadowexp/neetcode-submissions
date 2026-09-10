class Solution:
    '''
    Approach 1:
        double pointer: at i, move j (incrementally) to find element at i
            return true if arr[i] == arr[j]
        time compx: O(n^2)
        space compx: O(1)
    Approach 2:
        hash counter: for each unique element, count occurences
            return true if hash[arr[i]] > 1
        time compx: O(2n)
        space compx: O(n)
    Approach 3:
        hash set: keep track of unique elements
            return true if element already exists in set
        time compx: O(n)
        space compx: O(n)
    '''
    def hasDuplicate(self, nums: List[int]) -> bool:
        n = len(nums)
        hash_set = set()
        for i in range(n):
            if nums[i] in hash_set:
                return True
            hash_set.add(nums[i])
        return False
