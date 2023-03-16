import { assert } from 'chai';
import Queue from '../src/queue';

describe('Queue methods', () => {
	let queue: Queue;
	beforeEach(() => {
		queue = new Queue();
	});
	it('should enqueue correctly', () => {
		queue.enqueue('John');
		queue.enqueue('Jack');

		assert.strictEqual(queue.count, 2);
		assert.strictEqual(queue.items[0], 'John');
		assert.strictEqual(queue.items[1], 'Jack');
	});

	it('should dequeue correctly', () => {
		queue.enqueue('John');
		queue.enqueue('Jack');
		const dequeue = queue.dequeue();

		assert.strictEqual(dequeue, 'John');
		assert.strictEqual(queue.count, 1);
		assert.strictEqual(queue.lowestCount, 1);
		assert.strictEqual(queue.items[1], 'Jack');
	});

	it('should return undefined when dequeue an empty queue', () => {
		const dequeue = queue.dequeue();

		assert.strictEqual(dequeue, undefined);
		assert.strictEqual(queue.count, 0);
		assert.strictEqual(queue.lowestCount, 0);
		assert.deepStrictEqual(queue.items, {});
	});

	it('should prune correctly', () => {
		queue.enqueue('John');
		queue.enqueue('Jack');
		queue.prune();

		assert.strictEqual(queue.count, 0);
		assert.strictEqual(queue.lowestCount, 0);
		assert.deepStrictEqual(queue.items, {});
	});
});
