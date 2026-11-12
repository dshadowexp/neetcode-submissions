class Solution {
    /**
     * @param {number[][]} grid
     * @returns {number}
     */
    countPaths(grid: number[][]): number {
        const ROWS = grid.length, COLS = grid[0].length;

        function dfs(row: number, col: number, visited: Set<string>) {
            if (
                row > ROWS - 1 || row < 0
                || col > COLS - 1 || col < 0
                || grid[row][col] === 1
                || visited.has(`${row}-${col}`) 
            ) 
                return 0;

            if (row === ROWS - 1 && col === COLS - 1)
                return 1

            visited.add(`${row}-${col}`);

            let count = 0;
            count += dfs(row - 1, col, visited); 
            count += dfs(row + 1, col, visited);
            count += dfs(row, col + 1, visited);
            count += dfs(row, col - 1, visited);

            visited.delete(`${row}-${col}`);

            return count;
        }

        return dfs(0, 0, new Set());
    }
}
