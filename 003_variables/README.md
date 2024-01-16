# Variables

Variables are containers for <b>storing data</b>. JavaScript variables can be declared in *4* ways:


- <b>*Automatically*</b>
- Using <b>*var*</b>
- Using <b>*let*</b>
- Using <b>*const*</b>


## Automatically

```javascript
x = 10;
y = 20;

z = x + y;
```

## Using '*var*'

```javascript
var x = 10;
var y = 20;

var z = x + y;
```

> ***Note***: The '*var*' keyword was used in all JavaScript code from 1995 to 2015.

## Using '*let*'

```javascript
let x = 10;
let y = 20;

let z = x + y;
```

> ***Note***: The '*let*' keyword was added to JavaScript in 2015.

## Using '*const*'

```javascript
const x = 10;
const y = 20;

const z = x + y;
```
> ***Note***: These are '*constant*' values and <b>cannot be changed</b>.

<br>

## When to Use *'var'*, *'let'*, or *'const'* ?

1. Always declare variables.

2. Always use <b>*const*</b> if the value should not be changed.

3. Always use <b>*const*</b> if the type should not be changed. (Arrays and Objects)

4. Only use <b>*let*</b> if you can't use const.