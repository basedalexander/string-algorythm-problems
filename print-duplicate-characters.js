function printDuplicates (string) {
  var chars = [];
  var duplicates = [];

  for(var i = 0; i < string.length; i++ ) {
    var char = string[i];

    if (chars.includes(char)) {
      if (!duplicates.includes(char)) {
        duplicates.push(char)
      }
    }
    else {
    chars.push(char);
    }
  }

  console.log(duplicates.toString());
}
