class DequeNode {
    public next: DequeNode;
    public prev: DequeNode;

    constructor(public value: number) {
        this.next = null;
        this.prev = null;
    }
}

class MyDeque {
    private head: DequeNode;
    private tail: DequeNode;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * @return {boolean}
     */
    isEmpty(): boolean {
        return this.head === null;
    }

    /**
     * @param {number} value
     */
    append(value: number): void {
        const newNode = new DequeNode(value);

        if (this.tail === null) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value: number): void {
        const newNode = new DequeNode(value);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    /**
     * @return {void}
     */
    pop(): number {
        if (this.isEmpty())
            return -1;

        const result = this.tail;
        this.tail = this.tail.prev;

        if (this.tail === null) {
            this.head = null;
        } else {
            this.tail.next = null;
        }

        result.prev = null;
        return result.value;
    }

    /**
     * @return {number}
     */
    popleft(): number {
        if (this.isEmpty())
            return -1;
        
        const result = this.head;
        this.head = this.head.next;

        if (this.head === null) {
            this.tail = null;
        } else {
            this.head.prev = null;
        }

        result.next = null;
        return result.value;
    }
}
