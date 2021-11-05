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



// Atentention: the property 'user' from req Object
// comes from the auth middleware!!!
const dashboard = async (req, res) => {
	console.log('req.user = ', req.user);
	
	const luckyNumber = Math.floor(Math.random() * 100);
	  
	res.status(200).json({ 
		msg: `Hello, ${req.user.username}`, 
		secret: `Here is your authorized data, your lucky number is ${luckyNumber}`});
};




module.exports = {
	login,
	dashboard
}





