var string1 = 'Army';
var string2 = 'Mary';

function checkIfAnagrams(string1, string2) {
  var len, i,

  if (string1.length !== string2.length) {
    return false;
  }

  len = string1.length;

  if (len === 0) {
    return false;
  }

  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();

  len = string1.length;

  for(i = 0; i < len; i++) {
    if (!string2.includes(string1[i])) {
      return false;
    }
  }

  return true;
}
