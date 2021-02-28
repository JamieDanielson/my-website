---
title: "Map, Filter, Reduce; Working with Arrays in JavaScript"
date: "2021-02-28"
draft: false
path: "/blog/map-filter-reduce/"
---

## for, forEach

When working with arrays in JavaScript, it can be tempting to reach for the classic `for` loop for every circumstance. After all, it loops through the array a set number of times, is easy to use, and is comfortable. However, it is often not the best method for all scenarios.

Three options that can be superior to the `for` loop are `map`, `filter`, and `reduce`. I don't cover `forEach` in depth here but I use it often as well, especially in tandem with the other three. There are many powerful array methods, and it's important to use the right one for each use case.

This is the general syntax of a `for` loop:

```js
for (let i=0; i < myArray.length; i++) {
  // do all the things;
}
```

This is the general syntax of a `forEach`:

```js
myArray.forEach(/*function*/);
```

Both of these likely look familiar, especially the `for` loop. Let's go through the three other methods you may not be using, with examples on how to use them with an array of numbers and an array of strings. The two string examples are individual letters and words... for no real reason really except to show some extra examples.

Here are our arrays that we will work with:

```js
const numberArray = [1, 2, 3, 4];
const letterArray = ['a', 'b', 'c', 'd'];
const wordArray = ['alfa', 'bravo', 'charlie', 'delta'];
```

## map

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) defines the `map()` method:

> The **map()** method **creates a new array** populated with the results of calling a provided function on every element in the calling array.

```js
numberArray.map(number => number * 2); // [ 2, 4, 6, 8 ]

letterArray.map(letter => `letter: ${letter}`); // [ 'letter: a', 'letter: b', 'letter: c', 'letter: d' ]

wordArray.map(word => word.toUpperCase()); // [ 'ALFA', 'BRAVO', 'CHARLIE', 'DELTA' ]
```

Use `map()` when you want to apply a function to each item in the array and return a new array.

* The first example on numbers takes each number and multiplies it by 2, so the new array will be populated with each number from the original array doubled.
* The second example on letters takes each letter and adds "letter: " in front of it for the new array.
* The third example on words takes each word and converts it uppercase lettering for the new array.

## filter

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) defines the `filter()` method:

> The **filter()** method **creates a new array** with all elements that pass the test implemented by the provided function.

```js
numberArray.filter(number => number < 3); // [ 1, 2 ]

letterArray.filter(letter => letter.match('a')); // [ 'a' ]

wordArray.filter(word => word.charAt(0) == 'b' || word.charAt(0) == 'c'); //[ 'bravo', 'charlie' ]
```

Use `filter()` when you want to return a new array that ONLY contains the items from the array that match a specified criteria.

* The first example on numbers returns a new array containing only the numbers that are less than 3.
* The second example on letters returns a new array containing only the letters that match 'a'.
* The third example on words returns a new array containing only the words that begin with 'b' or 'c'.

## reduce

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) defines the `reduce()` method:

> The **reduce()** method executes a **reducer** function (that you provide) on each element of the array, resulting in single output value.

```js
numberArray.reduce((numberA, numberB) => numberA + numberB); // 10

letterArray.reduce((letterA, letterB) => letterA + letterB); // 'abcd'

wordArray.reduce(function (words, word) {
  if (word in words) {
    words[word]++;
  } else {
    words[word] = 1;
  }
  return words;
}, {}); // {alfa: 1, bravo: 1, charlie: 1, delta: 1}
```

Use `reduce()` when you want to return a single output value. This method is notorious for being underutilized and misunderstood. The most common scenario I find myself reaching for the `reduce()` method is when working with numbers, typically to get a sum or average. I outline basic uses for the string arrays only for the sake of simplicity, but this is a powerful method that when used in tandem with the others can quickly and effectively provide what you need.

* The first example on numbers adds all the numbers and returns a sum.
* The second example on letters concatenates the letters(strings) into one single string.
  * It's probably more common to use `join()` for this e.g. `letterArray.join('');` returns the same result of 'abcd'.
* The third example on words counters the number of occurrences for each word(string).
  * It's not as obvious with this array because there is only one of each; but if the array had another 'delta' in there for example it would have delta: 2 instead of delta: 1.

## Further Reading

* [Array.prototype.map() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* [Array.prototype.filter() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* [Array.prototype.reduce() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
* [Array methods | javascript.info](https://javascript.info/array-methods)
