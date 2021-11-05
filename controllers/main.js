// controllers
// Check username, password in post(login)
// if exists create a new JWT
// send back to front-end

// Set up authentication so only the request with JWT can access the dashboard
const CustomAPIError = require('../errors/custom-error');



const login = async (req, res) => {
	console.log('req.body = ', req.body);
	const { username, password } = req.body;
	
	if (!username || !password) {
		throw new CustomAPIError('Please provide email and password', 400);
	}
	
	res.send('Fake Login/Register/Singup Route');
};


const dashboard = async (req, res) => {
	const luckyNumber = Math.floor(Math.random() * 100);
	
	res.status(200).json({ msg: 'Hello, John Doe', secret: `Here is your authorized data, your lucky number is ${luckyNumber}`});
};


module.exports = {
	login,
	dashboard
}












