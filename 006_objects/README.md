# Objects

Objects are variables too. But objects can contain <b>*many values*</b>.

```javascript
const car = {
    brand:"Ford",
    model:"Mustang",
    color:"blue"
}; 
```

> The values are written as <b>KEY:VALUE</b> pairs.

## Accessing Object Properties

You can access object properties in two ways:

```javascript
objectName.propertyName
```

or

```javascript
objectName["propertyName"]
```

## Object Methods

Objects can also have <b>methods</b>.

```javascript
 const person = {
  firstName: "foo",
  lastName : "bar",
  id       : 101,
  getFullName : function() {
    return this.firstName + " " + this.lastName;
  }
}; 
```


## The '*this*' Keyword

In a function definition, this refers to the "<b>owner</b>" of the function.

## Accessing Object Methods

```javascript
objectName.methodName() 
```