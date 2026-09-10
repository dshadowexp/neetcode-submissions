class Solution:
    '''
    key data structure to store anagram list: hash map
    sorted_string (sorted anagram) -> anagram strings[]
    result = values of hashmap as list of strings

    for every string O(n):
        sort string for anagram key - O(mlogm)
        insert into hash_map O(1)

    where n is string list length
    and m is string length
    O(nmlogm)
    '''
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hash_map = {}
        for st in strs:
            key = ''.join(sorted(st))
            if key not in hash_map:
                hash_map[key] = []
            hash_map[key].append(st)

        return [v for v in hash_map.values()]