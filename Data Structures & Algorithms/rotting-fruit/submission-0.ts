class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        const ROWS = grid.length, COLS = grid[0].length;
        const EMPTY = 0, FRESH = 1, ROTTEN = 2;
        const directions = [
            [-1, 0], [1, 0],
            [0, -1], [0, 1]
        ];

        let fresh = 0;
        const rottenQueue: [number, number][] = [];

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                if (grid[i][j] === FRESH) {
                    fresh++;
                } else if (grid[i][j] === ROTTEN) {
                    rottenQueue.push([i, j]);
                }
            }
        }

        let timeLapse = 0;

        while (rottenQueue.length > 0 && fresh > 0) {
            const length = rottenQueue.length;

            for (let i = 0; i < length; i++) {
                const [r, c] = rottenQueue.shift();

                for (const [dr, dc] of directions) {
                    const nr = r + dr, nc = c + dc;
                    if (
                        Math.min(nr, nc) >= 0
                        && nr < ROWS
                        && nc < COLS
                        && grid[nr][nc] === FRESH
                    ) {
                        grid[nr][nc] = ROTTEN;
                        rottenQueue.push([nr, nc]);
                        fresh--;
                    }
                }
            }

            timeLapse++;
        }

        return fresh === 0 ? timeLapse : -1;
    }
}
