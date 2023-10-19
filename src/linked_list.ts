export default class LinkedList {
	count
	private head: any
	equalsFn: Function
	constructor(equalsFn = defaultEquals) {
		this.count = 0
		this.head = undefined
		this.equalsFn = equalsFn
	}

	push(element: any) {
		const node = new LinkedListNode(element)
		let current

		if (this.head == null) {
			this.head = node
		} else {
			current = this.head

			while (current.next != null) {
				current = current.next
			}

			current.next = node
		}

		this.count++
	}

	removeAt(index: number) {
		if (!this.isValidIndex(index)) {
			return undefined
		}

		let current = this.head

		if (index === 0) {
			this.head = current.next
		} else {
			let previous = this.getElementAt(index - 1)
			current = previous.next
			previous.next = current.next
		}
		this.count--
		return current.element
	}

	getElementAt(index: number) {
		let node = this.head
		for (let i = 0; i < index && node != null; i++) {
			node = node.next
		}
		return node
	}

	insert(element: any, index: number) {
		if (index < 0 || index > this.count) {
			return false
		}

		const node = new LinkedListNode(element)
		if (index === 0) {
			const current = this.head
			node.next = current
			this.head = node
		} else {
			const previous = this.getElementAt(index - 1)
			const current = previous.next
			node.next = current
			previous.next = node
		}
		this.count++
		return true
	}

	indexOf(element: any) {
		let current = this.head

		for (let i = 0; i <= this.count && current != null; i++) {
			if (this.equalsFn(current.element, element)) {
				return i
			}
			current = current.next
		}
		return -1
	}

	remove(element: any) {
		const index = this.indexOf(element)
		this.removeAt(index)
	}

	isEmpty() {
		return this.size() === 0
	}

	size() {
		return this.count
	}

	getHead() {
		return this.head
	}

	toString() {
		if (this.head == null) {
			return ''
		}

		let objString = `${this.head.element}`
		let current = this.head.next
		for (let i = 1; i < this.size() && current != null; i++) {
			objString = `${objString},${current.element}`
			current = current.next
		}
		return objString
	}

	isValidIndex(index: number) {
		return index >= 0 && index < this.count
	}
}

class LinkedListNode {
	element: any
	next: any
	constructor(element: any) {
		this.element = element
		this.next = undefined
	}
}

function defaultEquals(a: any, b: any) {
	return a === b
}
