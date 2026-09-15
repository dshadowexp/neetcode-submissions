class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const graph = this.makeGraph(numCourses, prerequisites);

        for (let i = 0; i < numCourses; i++) {
            if (!this.walk(i, graph, new Set()))
                return false;
        }

        return true;
    }

    walk(node: number, graph: Map<number, Set<number>>, visited: Set<number>): boolean {
        if (visited.has(node))
            return false;
        if (graph.get(node).size == 0)
            return true;
        
        visited.add(node);
        for (const nxtNode of Array.from(graph.get(node))) {
            if (!this.walk(nxtNode, graph, visited))
                return false;
        }
        visited.delete(node);
        graph.set(node, new Set());

        return true;
    }

    makeGraph(nodes: number, edges: number[][]) {
        const graph = new Map<number, Set<number>>();

        for (let i = 0; i < nodes; i++) {
            graph.set(i, new Set());
        }

        for (const [crs, req] of edges) {
            graph.get(crs).add(req);
        }

        return graph;
    }
}
