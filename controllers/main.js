// controllers
// Check username, password in post(login)
// if exists create a new JWT
// send back to front-end

// Set up authentication so only the request with JWT can access the dashboard
const jwt = require('jsonwebtoken');

const CustomAPIError = require('../errors/custom-error');



const login = async (req, res) => {
	console.log('req.body = ', req.body);
	const { username, password } = req.body;
	
	if (!username || !password) {
		throw new CustomAPIError('Please provide email and password', 400);
	}
	
	// Mock user id (no database)
	const id = new Date().getDate();
	
	// Try to keep payload small
	// In Production use a real secret
	const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' });
	
res.send({ msg: 'user created', token });
};


const dashboard = async (req, res) => {
	console.log('req.headers = ', req.headers);
	
	const authHeader = req.headers.authorization;
	
	// 401 - Authentication error
	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		throw new CustomAPIError('No valid token provided', 401);
	}
	
	const token = authHeader.split(' ')[1];
	
	
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		
		console.log('decoded.....', decoded);
		
		const luckyNumber = Math.floor(Math.random() * 100);
	  
		res.status(200).json({ msg: `Hello, ${decoded.username}`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}`});
	} catch (error) {
		throw new CustomAPIError('Not authorized to access this route', 401);
	}
};


module.exports = {
	login,
	dashboard
}












