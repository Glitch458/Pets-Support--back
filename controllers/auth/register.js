const bcrypt = require('bcryptjs');
const User = require('../../models/user');
const { RequestError } = require('../../helpers');

const register = async (req, res) => {
    const { email, password, name, city, phone } = req.body;
    const user = await User.findOne({ email });
    console.log(name);
    if (user) {
        throw RequestError(409, 'Email in use')
    }
    if (password.length < 7) {
        res.status(400);
        throw new Error('Password must be at least 7 characters long');
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const result = await User.create({ email, password: hashPassword, name, city, phone });
    res.status(201).json({
        email: result.email
    })
}

module.exports = register;