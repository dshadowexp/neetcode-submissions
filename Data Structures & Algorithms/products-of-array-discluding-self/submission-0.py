class Solution:
    '''
    first approach: O(3n)
    settle the left product, looping from left to right
    settle the right product, looping from right to left
    result is product of left and right at i

    nums = [1, 2, 4, 6]
    left_product = [1, 1, 2, 8]
    right = 48
    result2 = [48, 24, 12, 8]
               i
    right_product = [48, 24, 6, 1]
    result1 = [48, 24, 12, 8]

    second approach
    settle the left product, looping from left to right
    keep a right variable to calculate right product that starts at 1
    for each i
        result[i] = right * left_product[i]
        right *= nums[i]
    '''
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        left_product = [1]
        for i in range(1, n):
            left_product.append(left_product[i - 1] * nums[i - 1])

        right = 1
        result = [1] * n
        for i in range(n - 1, -1, -1):
            result[i] = right * left_product[i]
            right *= nums[i]

        return result
        