class Solution:
    '''
    Can s or t be empty strings?

    approach 1: sort and compare
    time: O(nlogn)
    space: O(1)

    approach 2: hash map counter
    time: O(n)
    space: O(n)

    first compare lengths, return false if difference
    create character counters of each string
    compare character presence and counts in each hash map
    return true if no discrepancy found

    '''
    def createCharCounter(self, a: str) -> dict:
        d = {}
        for char in a:
            d[char] = d.get(char, 0) + 1
        return d

    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        counter_s = self.createCharCounter(s)
        counter_t = self.createCharCounter(t)

        for k, v in counter_s.items():
            if k not in counter_t or v != counter_t[k]:
                return False

        return True