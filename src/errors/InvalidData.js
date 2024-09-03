export default class InvalidData extends Error {
    constructor(message, errorCode = 'INVALID_DATA') {
        super(message);
        this.name = 'InvalidData'; 
        this.statusCode = 400;
        this.errorCode = errorCode;
    } 
}
