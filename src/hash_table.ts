// Javascript implements hashtable as an object with key-value pairs
const hashTable = {
	banana: 142.32,
	apple: 123.32,
	orange: 5,
	peach: 2,
	plum: 12.32,
	pear: 2123.32,
	pineapple: 51.32,
	papaya: 21,
	passionfruit: 90,
	pomegranate: 98,
	persimmon: 1000,
	plantain: 212,
}

// If we want to access the value of a key, we can do it in constant time
console.time('banana')
console.log(hashTable['pomegranate'])
console.timeEnd('banana')
