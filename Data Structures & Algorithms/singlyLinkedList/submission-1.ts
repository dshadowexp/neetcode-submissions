class ListNode {
    public next: ListNode;

    constructor(public val: number) {
        this.next = null;
    }
}

class LinkedList {
    private head: ListNode;
    private tail: ListNode;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        let ptr = this.head;

        while (ptr !== null && index > 0) {
            ptr = ptr.next;
            index--;
        }

        if (ptr)
            return ptr.val;

        return -1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        const newNode = new ListNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        const newNode = new ListNode(val);

        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean {
        if (!this.head || !this.tail)
            return false;

        let ptr = this.head;

        if (index === 0) {
            this.head = ptr.next;
            ptr.next = null;
            return true;
        }

        while (ptr !== null && ptr.next !== null && index > 1) {
            ptr = ptr.next;
            index--;
        }

        if (index === 1 && ptr && ptr.next) {
            const hold = ptr.next;
            ptr.next = hold.next;
            hold.next = null;

            if (ptr.next === null) {
                this.tail = ptr;
            }

            return true;
        }

        return false;
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        const resultArray = [];
        let ptr = this.head;

        while (ptr !== null) {
            resultArray.push(ptr.val);
            ptr = ptr.next;
        }

        return resultArray;
    }
}
