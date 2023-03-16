export default class Queue {
	count: number;
	lowestCount: number;
	items: any;

	constructor() {
		this.count = 0;
		this.lowestCount = 0;
		this.items = {};
	}

	enqueue<T>(element: T): void {
		this.items[this.count] = element;
		this.count++;
	}

	dequeue<T>(): T | undefined {
		if (this.isEmpty()) {
			return undefined;
		}

		const result = this.items[this.lowestCount];
		delete this.items[this.lowestCount];

		this.count--;
		this.lowestCount++;

		return result;
	}

	isEmpty(): boolean {
		return this.size() === 0;
	}

	peek<T>(): T | undefined {
		if (this.isEmpty()) {
			return undefined;
		}

		return this.items[this.lowestCount];
	}

	size(): number {
		return this.count - this.lowestCount;
	}

	prune(): void {
		this.count = 0;
		this.lowestCount = 0;
		this.items = {};
	}
}
