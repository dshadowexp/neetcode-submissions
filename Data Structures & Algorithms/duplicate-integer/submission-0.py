class Solution:
    '''
    [1,2,3,3] = true
     i
    approach 1 = Counter using a hashmap 
        O(1) lookup and insertion
        O(2n) space for keys and values
    approach 2 = Using a hashset 
        O(1) lookup and insertion
        O(n) space
    '''
    def hasDuplicate(self, nums: List[int]) -> bool:
        hash_set = set()
        for num in nums:
            if num in hash_set:
                return True
            hash_set.add(num)

        return False