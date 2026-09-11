class UnionFind {
    private parents: number[];
    private ranks: number[];
    private componentsCount: number;

    /**
     * @param {number} n
     */
    constructor(n: number) {
        this.parents = Array.from({ length: n }, (_, i) => i);
        this.ranks = new Array(n).fill(1);
        this.componentsCount = n;
    }

    /**
     * @param {number} x
     * @return {number}
     */
    find(x: number): number {
        if (x === this.parents[x])
            return x;
        
        this.parents[x] = this.find(this.parents[x]);
        return this.parents[x];
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    isSameComponent(x: number, y: number): boolean {
        return this.find(x) === this.find(y);
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    union(x: number, y: number): boolean {
        const x_parent = this.find(x);
        const y_parent = this.find(y);

        if (x_parent === y_parent) 
            return false;

        const x_rank = this.ranks[x_parent];
        const y_rank = this.ranks[y_parent];

        if (x_rank > y_rank) {
            this.parents[y_parent] = x_parent;
        } else if (x_rank < y_rank) {
            this.parents[x_parent] = y_parent;
        } else {
            this.parents[x_parent] = y_parent;
            this.ranks[y_parent] += 1;
        }

        this.componentsCount--;
        return true;
    }

    /**
     * @return {number}
     */
    getNumComponents(): number {
        return this.componentsCount;
    }
}
