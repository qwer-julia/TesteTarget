import InvalidData from "../errors/InvalidData.js";

class letterAController {
    countA(str) {
        if(typeof str !== 'string'){
            throw new InvalidData('O valor passado deve ser uma string.');
        }
        
        let count = 0;
        const lowerStr = str.toLowerCase();
      
        for (let i = 0; i < lowerStr.length; i++) {
          if (lowerStr[i] === 'a') {
            count++;
          }
        }
        return `A letra 'a' aparece ${count} vezes na string.`
      }
}

export default letterAController;