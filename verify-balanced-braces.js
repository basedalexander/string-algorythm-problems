function verifyBalancedBraces(string) {
  let braces = '[](){}<>';
  let i = 0;
  let stack = [];
  let char;

  for (i; i < string.length; i++) {
    char = string[i];
    let bracePos = braces.indexOf(char);
    let braceType;

    if (bracePos === -1) {
      continue;
    }

    braceType = bracePos % 2 ? 'closed' : 'opened';

    if (braceType === 'closed') {
        if ( (stack.length === 0) || (stack.pop() !== braces[bracePos - 1]) ) {
          return false;
        }
    }
    else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

console.log('{}([]) true', verifyBalancedBraces('{sg}d(sd[dg]dg)sdg'));
console.log('{{ false', verifyBalancedBraces('{{'));
console.log('[(]) false', verifyBalancedBraces('[(])'));
console.log("{}([]) true", verifyBalancedBraces("{}([])"));
console.log("([}]) false", verifyBalancedBraces("([}])"));
console.log("(  [  <>  ()  ]  <>  ) true", verifyBalancedBraces("(  [  <>  ()  ]  <>  )"));
console.log("(  [  <>  ()  <]  >  ) false", verifyBalancedBraces("(  [  <>  ()  <]  >  )"));
console.log("---(++++)---- true", verifyBalancedBraces("---(++++)----"));
console.log(" true", verifyBalancedBraces(""));
console.log("before ( middle []) after  true", verifyBalancedBraces("before ( middle []) after "));
console.log("   (      [)  false", verifyBalancedBraces("   (      [)"));
