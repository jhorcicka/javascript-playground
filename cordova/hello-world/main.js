
/**
 * @param string id
 * @return string
 */
function getValue(id) {
  return document.getElementById(id).value;
}

/**
 * @param string id
 * @return number
 */
function getNumber(id) {
  return parseInt(getValue(id));
}

/**
 * @param string text
 */
function debug(text) {
  console.log("DEBUG: " + text);
}

/**
 * @param number x
 * @param number y
 * @return number
 */
function add(x, y) {
  var result = x + y;
  debug('result=' + result);
  return result;
}

