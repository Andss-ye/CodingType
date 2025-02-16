export const CODE_SNIPPETS = [
  "console.log('Hello, world!');",
  "function add(a: number, b: number): number { return a + b; }",
  "const fetchData = async () => { const res = await fetch('/api'); return res.json(); }",
  `const nums = [1, 2, 3].map(n => n * 2);`,
  "const isEven = num => num % 2 === 0;",
  "const greet = name => `Hello, ${name}!`;",
  "const randomNum = () => Math.random();",
  "const reverseStr = str => str.split('').reverse().join('');",
  "const unique = arr => [...new Set(arr)];",
  "const delay = ms => new Promise(res => setTimeout(res, ms));",
  "const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);",
  "const shuffle = arr => arr.sort(() => Math.random() - 0.5);",
  "const getLast = arr => arr[arr.length - 1];",
  "const fetchData = async url => (await fetch(url)).json();",
  "const toHex = num => num.toString(16);",
  "const range = (n, start = 0) => [...Array(n).keys()].map(i => i + start);"
]; 