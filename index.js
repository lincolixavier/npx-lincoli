#!/usr/bin/env node
const open = require('open');

console.log("Hello! My name is Lincoli 🤓 \n");

console.log("and within 3 seconds you'll be redirect to my website 🚀  \n");

setTimeout(() => {
  open('http://www.lincolixavier.com');
  console.log("Thank you, and have a good trip!  \n");
}, 3000);

