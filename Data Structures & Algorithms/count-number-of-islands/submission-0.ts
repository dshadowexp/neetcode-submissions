class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        const ROWS = grid.length, COLS = grid[0].length;
        const WATER = '0';

        function dfs(r: number, c: number): boolean {
            if (
                Math.min(r, c) < 0
                || r > ROWS - 1
                || c > COLS - 1
                || grid[r][c] === WATER
            )
                return false;

            grid[r][c] = WATER;
            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);
            return true;
        }

        let islandCount = 0;
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                if (dfs(row, col)) {
                    islandCount++;
                }
            }
        }

        return islandCount;
    }
}
