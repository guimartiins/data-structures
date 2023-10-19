import { assert } from 'chai'
import LinkedList from '../src/linked_list'

describe('LinkedList', () => {
	const linkedListFactory = () => {
		const linkedList = new LinkedList()
		linkedList.push('John')
		linkedList.push('Jack')
		linkedList.push('Camila')
		return linkedList
	}

	describe('push', () => {
		it('should push first element correctly', () => {
			const linkedList = new LinkedList()
			linkedList.push('John')

			assert.strictEqual(linkedList.count, 1)
			assert.strictEqual(linkedList.getHead().element, 'John')
		})

		it('should push second element correctly', () => {
			const linkedList = new LinkedList()
			linkedList.push('John')
			linkedList.push('Jack')

			assert.strictEqual(linkedList.count, 2)
			assert.strictEqual(linkedList.getHead().element, 'John')
			assert.strictEqual(linkedList.getHead().next.element, 'Jack')
		})
	})

	describe('removeAt', () => {
		it('should return undefined if invalid index is provided', () => {
			const linkedList = new LinkedList()
			linkedList.removeAt(-2)

			assert.strictEqual(linkedList.count, 0)
			assert.isUndefined(linkedList.getHead())
		})

		it('should return null if list has not elements', () => {
			const linkedList = new LinkedList()
			linkedList.removeAt(3)

			assert.strictEqual(linkedList.count, 0)
			assert.isUndefined(linkedList.getHead())
		})

		it('should remove first element correctly', () => {
			const linkedList = linkedListFactory()

			linkedList.removeAt(0)

			assert.strictEqual(linkedList.count, 2)
			assert.strictEqual(linkedList.getHead().element, 'Jack')
		})

		it('should remove element correctly', () => {
			const linkedList = linkedListFactory()

			linkedList.removeAt(1)

			assert.strictEqual(linkedList.count, 2)
			assert.strictEqual(linkedList.getHead().element, 'John')
		})
	})

	describe('insertAt', () => {
		it('should return undefined if invalid index is provided', () => {
			const linkedList = linkedListFactory()

			const result = linkedList.insert('John', -2)

			assert.strictEqual(linkedList.count, 3)
			assert.isFalse(result)
		})

		it('should return true and insert correctly at first position', () => {
			const linkedList = new LinkedList()

			const result = linkedList.insert('John', 0)

			assert.strictEqual(linkedList.count, 1)
			assert.isTrue(result)
			assert.strictEqual(linkedList.getHead().element, 'John')
		})

		it('should return true if element is inserted correctly', () => {
			const linkedList = linkedListFactory()

			const result = linkedList.insert('Marie', 1)

			assert.strictEqual(linkedList.count, 4)
			assert.isTrue(result)
		})
	})

	describe('indexOf', () => {
		it('should return -1 if element is not found', () => {
			const linkedList = linkedListFactory()

			const result = linkedList.indexOf('Marie')

			assert.strictEqual(result, -1)
		})

		it('should return index if element is in the list', () => {
			const linkedList = linkedListFactory()

			const result = linkedList.indexOf('Jack')

			assert.strictEqual(result, 1)
		})
	})

	describe('isEmpty', () => {
		it('should return true if list is empty', () => {
			const linkedList = new LinkedList()

			assert.isTrue(linkedList.isEmpty())
		})
		it('should return false if list is not empty', () => {
			const linkedList = linkedListFactory()

			assert.isFalse(linkedList.isEmpty())
		})
	})
})
