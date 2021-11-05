const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom-error');



class BadRequest extends CustomAPIError {
  constructor(message) {
    super(message)
		this.statusCode = StatusCodes.BAD_REQUEST; // 400
  }
}


module.exports = BadRequest








