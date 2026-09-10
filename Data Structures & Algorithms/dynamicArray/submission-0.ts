class DynamicArray {
    private capacity: number;
    private count: number;
    private internalArray: Array<any>;
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.internalArray = new Array(capacity);
        this.count = 0;
        this.capacity = capacity;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.internalArray[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.internalArray[i] = n;

    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if (this.count === this.capacity) {
            this.resize();
        }
        this.internalArray[this.count] = n;
        ++this.count;
    }

    /**
     * @returns {number}
     */
    popback(): number {
        --this.count;
        return this.internalArray[this.count];
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.capacity *= 2;
        const newArray = new Array(this.capacity);
        for (let i = 0; i < this.count; i++) {
            newArray[i] = this.internalArray[i];
        }
        this.internalArray = newArray;
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.count;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity;
    }
}
