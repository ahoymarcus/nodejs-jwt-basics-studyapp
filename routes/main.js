// ROUTES
const express = require('express');

const { login, dashboard } = require('../controllers/main');
const authMiddleware = require('../middleware/auth');



const router = express.Router();


// Route /dashboard protect by a auth middleware
// So, 1st the requisiton goes to the middleware
// then 2nd the middleware uses its next() 
// function and passes it again to the /dashboard.
router.route('/dashboard').get(authMiddleware, dashboard);
router.route('/login').post(login);



module.exports = router






