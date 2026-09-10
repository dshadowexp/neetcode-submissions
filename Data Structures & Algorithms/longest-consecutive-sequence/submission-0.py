class Solution:
    '''
    Can it contain negative integers?
    
    lookup as O(1) with hash set
    put nums in a hash set

    keep max value
    iterate through nums
        if nums[i] in hash set:
            iterate all consecutives and remove
                update max value

    return max value
    '''
    def longestConsecutive(self, nums: List[int]) -> int:
        look_up = set(nums)
        longest = 0

        for num in nums:
            val = num
            count = 1
            while val + 1 in look_up:
                count += 1
                val += 1
            longest = max(longest, count)

        return longest