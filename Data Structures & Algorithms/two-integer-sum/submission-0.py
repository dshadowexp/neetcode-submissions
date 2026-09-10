class Solution:
    '''
    [3, 4, 5, 6], 7
    Question - extacly one solution?
    Negative and positive integers? And 0?
    Input size limit (array of integers)
    Order of output matters?

    approach 1: double loop with double pointer
    time: O(n2) space: O(2)

    approach 2: hash_map with difference check
    hash_map stores key(current difference) to seen positional index
    for each position, calculate difference from target
    check if difference has been previously stored from hash_map
    retrieve positional index if exists and return with current index

    '''
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash_map = {}
        for i in range(len(nums)):
            curr_diff = target - nums[i]
            if curr_diff in hash_map:
                return [hash_map[curr_diff], i]
            hash_map[nums[i]] = i

