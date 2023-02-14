const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let arr = [];
  for (let i = 0; i < expr.length; i += 10) {
    arr.push(expr.slice(i, i + 10))
  }
  let morseArr = arr.map((str) => {
    if (str === "**********") {
      return ' '
    }
    let strArr = [];
    let codeStr = [];
    for (let i = 0; i < str.length; i += 2) {
      strArr.push(str.slice(i, i + 2))
    }
    while (strArr.length > 0) {
      switch (strArr[0]) {
        case '00':
          strArr.shift();
          break;
        case '10':
          codeStr.push('.');
          strArr.shift();
          break;
        case '11':
          codeStr.push('-');
          strArr.shift();
          break;
      }
    }
    return codeStr.join('')
  })
  console.log(morseArr)
  let result = morseArr.map((char) => {
    for (key in MORSE_TABLE) {
      if (char === ' ') {
        return ' '
      }
      if (char === key) {
        return MORSE_TABLE[key]
      }
    }
  })
  return result.join('')
}

module.exports = {
  decode
}
