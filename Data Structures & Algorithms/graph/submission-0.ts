class Graph {
    private adjList: Map<number, Set<number>>;

    constructor() {
        this.adjList = new Map();
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {void}
     */
    addEdge(src: number, dst: number): void {
        if (this.adjList.has(src)) {
            this.adjList.get(src).add(dst);
        } else {
            this.adjList.set(src, new Set([dst]));
        }
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    removeEdge(src: number, dst: number): boolean {
        if (!this.adjList.has(src))
            return false;

        const listSet = this.adjList.get(src);
        if (!listSet.has(dst))
            return false;
        listSet.delete(dst);
        if (listSet.size === 0)
            this.adjList.delete(src)

        return true
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    hasPath(src: number, dst: number): boolean {
        const frontier = [src];
        const visited = new Set<number>();

        while (frontier.length != 0) {
            const curr = frontier.pop();

            if (visited.has(curr))
                continue;

            visited.add(curr);
            if (curr === dst)
                return true;

            const neighbors = this.adjList.get(curr);
            if (!neighbors)
                continue;

            for (const neighbor of Array.from(neighbors)) {
                if (!visited.has(neighbor))
                    frontier.push(neighbor);
            }
        }

        return false
    }
}
