// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) {
    return ("null");
  }
  //strings
  if (typeof obj === 'string') {
    return ("\"" + obj + "\"");
  }
  //arrays
  if (Array.isArray(obj)) {
    var stringifiedArr = [];
    for (var i = 0; i < obj.length; i++) {
      stringifiedArr.push(stringifyJSON(obj[i]));
    }
    return ("[" + stringifiedArr.join(",") + "]");
  }
  //objects
  if (typeof obj === 'object') {
    var stringifiedObj = [];
    for (var key in obj) {
      stringifiedObj.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
    }
    return ("{" + stringifiedObj.join(",") + "}");
  }
  if (typeof obj === 'function' || obj === undefined) {
    return ""; 
  }
  //numbers, boolean
  return ("" + obj);
}
