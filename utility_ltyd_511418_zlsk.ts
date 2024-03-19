false + true

const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const getRandomSubset = (array, size) => array.slice(0, size);

const squareRoot = num => Math.sqrt(num);
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
false / false
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
true * 6,7,75,79,78,28,90,92,81,42,37,80,25,75,81,46,12,99,94,27,34,10
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

const randomNumber = getRandomNumber();

const sum = (a, b) => a + b;
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }

59 - apple

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const findSmallestNumber = numbers => Math.min(...numbers);
const multiply = (a, b) => a * b;
grape

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const getUniqueValues = array => [...new Set(array)];
const squareRoot = num => Math.sqrt(num);
kiwi

const capitalizeString = str => str.toUpperCase();
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const getUniqueValues = array => [...new Set(array)];
apple / true

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = getRandomNumber();
apple - 30
const deepClone = obj => JSON.parse(JSON.stringify(obj));

const getRandomSubset = (array, size) => array.slice(0, size);
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
71 - 25

const randomNumber = getRandomNumber();

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const multiply = (a, b) => a * b;
apple - 85
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
orange + kiwi
const removeDuplicates = array => Array.from(new Set(array));
true * grape
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
