// Set up authentication so only the request with JWT can access the dashboard
const jwt = require('jsonwebtoken');

const { UnauthenticatedError } = require('../errors');




const authenticationMiddleware = async (req, res, next) => {
	console.log('req.headers = ', req.headers);
	
	const authHeader = req.headers.authorization;
	
	// 401 - Authentication error
	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		throw new UnauthenticatedError('No valid token provided');
	}
	
	
	const token = authHeader.split(' ')[1];
	
	
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		
		console.log('decoded.....', decoded);
		
		const { id, username } = decoded;
		req.user = { id, username };
		
		next();
	} catch (error) {
		throw new UnauthenticatedError('Not authorized to access this route');
	}
};



module.exports = authenticationMiddleware





