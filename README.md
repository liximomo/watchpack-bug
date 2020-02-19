## Problem

Initial event won't fire if the dir depth is less than 2 


## Environment
System: MacOS 10.14.6

Watpchpack: 2.0.0-beta.12

## Steps to Reproduction
1. run `node test-a.js` 
2. run `node test-b.js`

## What I Expected
Both `test-a.js` and `test-b.js` have output.

## What actually happened
Only `test-b.js` have output.


