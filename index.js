module.exports = function (element) {
  
  var computed = window.getComputedStyle(element);
  var left = computed.marginLeft.replace('px', '');
  var right = computed.marginRight.replace('px', '');
  
  return +element.offsetWidth + +left + +right;
};