var outerWidth = require('./index');
var test = require('tape');
var domify = require('domify');

test('calculates width with no padding, margin or border', function (t) {
  
  document.body.innerHTML = '';
  var div = domify('<div style="width:100px"></div>');
  document.body.appendChild(div);
  
  t.equal(outerWidth(div), 100, 'calculated width');
  t.end();
});

test('calculates width with padding and border, but no margin', function (t) {
  
  document.body.innerHTML = ''
  var div = domify('<div style="width:100px"></div>');
  document.body.appendChild(div);
  
  div.style.paddingLeft = '10px';
  div.style.paddingRight = '10px';
  div.style.border = '1px solid #fff';
  
  t.equal(outerWidth(div), 122, 'calculated width');
  t.end();
});

test('calculates width with padding, border, and margin', function (t) {
  
  document.body.innerHTML = ''
  var div = domify('<div style="width:100px"></div>');
  document.body.appendChild(div);
  
  div.style.paddingLeft = '10px';
  div.style.paddingRight = '10px';
  div.style.border = '1px solid #fff';
  div.style.marginLeft = '10px',
  div.style.marginRight = '10px',
  
  t.equal(outerWidth(div), 142, 'calculated width');
  t.end();
});

test('calculates width with padding, border, and margin when box-sizing = border-box', function (t) {
  
  document.body.innerHTML = ''
  var div = domify('<div style="width:100px"></div>');
  document.body.appendChild(div);
  
  div.style.boxSizing = 'border-box';
  div.style.paddingLeft = '10px';
  div.style.paddingRight = '10px';
  div.style.border = '1px solid #fff';
  div.style.marginLeft = '10px',
  div.style.marginRight = '10px',
  
  t.equal(outerWidth(div), 120, 'calculated width');
  t.end();
});