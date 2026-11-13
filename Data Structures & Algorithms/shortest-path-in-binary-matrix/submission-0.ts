class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     * 
     * 8-dimensional = [
     *  [-1, -1], [-1, 0],
     *  [-1, 1], [0, -1],
     *  [0, 1], [1, -1],
     *  [1, 0], [1, 1]
     * ];
     * bfs = to go through all paths with queue (or optimized priority queue | heap)
     * when bottom right is reached, keep track of shortest path
     */
    shortestPathBinaryMatrix(grid: number[][]): number {
        const N = grid.length;
        if (grid[0][0] === 1 || grid[N - 1][N - 1] === 1) return -1;
        const directions = [
            [1, 1], [0, 1],
            [1, 0], [0, -1],
            [-1, 0], [1, -1],
            [-1, 1], [-1, -1]
        ];
        const queue = [[0, 0, 1]];
        const visited = new Set();
        visited.add(`${0}-${0}`);

        while (queue.length > 0) {
            const [r, c, cost] = queue.shift();
            if (r === N - 1 && c === N - 1) {
                return cost;
            }

            for (const [dr, dc] of directions) {
                const nr = r + dr, nc = c + dc;
                if (
                    Math.min(nr, nc) < 0
                    || nr > N - 1
                    || nc > N - 1
                    || grid[nr][nc] === 1
                    || visited.has(`${nr}-${nc}`)
                )
                    continue;
                queue.push([nr, nc, cost + 1]);
                visited.add(`${nr}-${nc}`)
            }
        }

        return -1;
    }
}
