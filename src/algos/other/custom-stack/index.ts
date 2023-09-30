class CustomStack<GItem> {
    private stack: GItem[] = [];
    private maxValuesHistory: GItem[] = [];

    constructor(...items: GItem[]) {
        this.stack.push(...items);
    }

    public push(...items: GItem[]) {
        this.stack.push(...items);

        if (items.length > 0 && this.isComparable(items[0])) {
            const maxValue = Math.max(...(items as number[]));
            const currentMax = this.maxValuesHistory.at(-1) as number | undefined;

            if (currentMax !== undefined && maxValue >= currentMax) {
                const maxValuesArray = items.filter((number) => number === maxValue);
                this.maxValuesHistory.push(...maxValuesArray);
            }
        }

        return this;
    }

    public pop() {
        const popped = this.stack.pop();

        if (popped !== undefined && this.isComparable(popped) && popped === this.maxValuesHistory.at(-1)) {
            this.maxValuesHistory.pop();
        }

        return popped;
    }

    public getMaxValue(): GItem | undefined {
        const item = this.stack.at(0);
        if (item === undefined) {
            return;
        }

        if (!this.isComparable(item)) {
            throw new Error('Illigal call getMatValue on not numeric stack');
        }

        return this.maxValuesHistory.at(-1);
    }

    private isComparable(item: GItem) {
        return typeof item === 'number';
    }
}
