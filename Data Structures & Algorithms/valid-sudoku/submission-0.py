from collections import defaultdict
class Solution:
    '''
    use hashmap to keep set of values
    rows, cols, boxes hash maps
    rows and cols maps (i for row, j for col) -> set(board[i][j])
    boxes maps (i // 3, j //3 3) -> set(board[i][j])
    
    double loop of 
    
            
    '''
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        n = len(board)
        m = len(board[0])
        rows = defaultdict(set)
        cols = defaultdict(set)
        boxes = defaultdict(set)

        for i in range(n):
            for j in range(m):
                el = board[i][j]
                if el == '.':
                    continue
                box_id = (i // 3, j // 3)
                if el in rows[i] or el in cols[j] or el in boxes[box_id]:
                    return False
                rows[i].add(el)
                cols[j].add(el)
                boxes[box_id].add(el)

        return True