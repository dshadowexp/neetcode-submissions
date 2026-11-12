class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        ROWS, COLS = len(image), len(image[0])
        visited = set()
        starting_color = image[sr][sc]

        def dfs(row, col):
            if (
                min(row, col) < 0 
                or row > ROWS - 1
                or col > COLS - 1
                or f"{row}-{col}" in visited
                or image[row][col] != starting_color
            ):
                return
            
            image[row][col] = color
            visited.add(f"{row}-{col}")
            dfs(row + 1, col)
            dfs(row - 1, col)
            dfs(row, col + 1)
            dfs(row, col - 1)

        dfs(sr, sc)
        return image
        