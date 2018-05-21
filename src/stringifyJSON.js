// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var json = "{";

  for (var key in obj) {

    if (typeof obj[key] === 'string') {
      json = json.concat("\"" + key + "\"" + ":" + "\"" + obj[key] + "\"");
    } else if (typeof obj[key] === 'number') {
      json = json.concat("\"" + key + "\"" + ":" + obj[key]);
    }

    json = json.concat(",");
  }
  
  json = json.slice(0, json.length - 1);
  return json.concat("}");

};
