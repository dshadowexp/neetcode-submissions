from collections import Counter

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if (len(s) != len(t)):
            return False
            
        s_counter = Counter(list(s))
        t_counter = Counter(list(t))
        
        for k, v in s_counter.items():
            if (
                k not in t_counter
                or t_counter[k] != v
            ):
                return False
        
        return True
        