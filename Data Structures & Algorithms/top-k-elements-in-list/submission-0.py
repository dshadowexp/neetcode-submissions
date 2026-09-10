import heapq

class Solution:
    '''
    return type: sorted?

    first approach: use two hashmaps
        first hash map: integer -> count O(n)
        second hash map: integer (count) -> integers[] O(n)
        get keys of second hash map, sort in descending O(nlogn)
        pic k elements in order O(k)

    second approach:
        create hash map counter: integer -> count O(n)
        insert all integers in heap with count as criteria
        keep up to k elements in heap
    '''
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        hash_map = {}
        for n in nums:
            hash_map[n] = hash_map.get(n, 0) + 1

        heap = []
        for n, count in hash_map.items():
            heapq.heappush(heap, (count, n))
            if len(heap) > k:
                heapq.heappop(heap)

        return [n for count, n in heap]
