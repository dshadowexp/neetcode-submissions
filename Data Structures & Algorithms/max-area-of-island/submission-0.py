class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])
        LAND, WATER = 1, 0

        def dfs(r: int, c: int) -> int:
            if (
                min(r, c) < 0
                or r > ROWS - 1
                or c > COLS - 1
                or grid[r][c] == WATER
            ):
                return 0

            grid[r][c] = 0
            return 1 + (
                dfs(r + 1, c)
                + dfs(r - 1, c)
                + dfs(r, c + 1)
                + dfs(r, c - 1)
            )

        maxIslandArea = 0

        for row in range(ROWS):
            for col in range(COLS):
                if grid[row][col] == LAND:
                    maxIslandArea = max(maxIslandArea, dfs(row, col))

        return maxIslandArea