import InvalidData from "../errors/InvalidData.js";

class FibonacciController {
    checkFibonacci(num){
        num = Number(num)
        if(typeof num !== 'number'|| isNaN(num)) {
            throw new InvalidData('O valor passado deve ser um número.');
        }
        if (num === 0 || num === 1) {
            return true;
        }

        let a = 0;
        let b = 1;

        while (b <= num) {
            if (b === num) {
              return true;
            }

            [a, b] = [b, a + b];
        }

        return false;
    }
}

export default FibonacciController;