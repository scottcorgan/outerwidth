# outerwidth

Get an element's outerwidth, including padding, borders, and margin. For use with [Browserify](https://github.com/substack/node-browserify).

## Install

```
npm install outerwidth --save
```

## Usage

```js
var outerWidth = require('outerwidth');

var el = document.querySelector('.some-element');

el.style.width = '100px';
el.style.marginRight = '20px';
el.style.border = '1px solid #eee';

console.log(outerWidth(el)) // OUTPUTS: 122 - (width + marginRight + border)
```

## Run Tests

Requires [PhantomJS](http://phantomjs.org/) to be installed

```
npm install
npm test
```