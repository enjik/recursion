// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
//document.body, element.childNodes, element.classList


var getElementsByClassName = function(className) {
  var matchingElements = [];

  var checkNode = function(node) {
    if (node.classList && node.classList.contains(className)) {
    matchingElements.push(node);
    }
    node.childNodes.forEach(function(node) {
      checkNode(node);
    });
  };
  checkNode(document.body);
  return matchingElements;
};
