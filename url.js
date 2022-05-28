// import url from 'url';

const url = require('url');   // only way to import packages that work for me

const myurl = new URL('https://google.com');
myurl.pathname = 'a/b/c';
myurl.search = '?d=e';
myurl.hash = '#fgh';

console.log(myurl)
console.log(myurl.href)