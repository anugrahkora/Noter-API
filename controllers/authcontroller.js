const User = require('../models/userModel');


exports.signup = (req, res) => {
    console.log(req.body);
    const { uid, name, email, password } = req.body;
    User.findOne({ email }).exec((err, user) => {
        if (user) {
            return res.status(400).json({
                error: 'User with email already exists.'
            });
        } else {
            let newUser = new User({ uid, name, email, password });
            newUser.save((err, success) => {

                if (err) {
                    return res.status(400).json({
                        error: 'Error while Signing up'
                    });
                } else {
                    return res.json({
                        message: 'Sign up Success'
                    });
                }

            });
        }

    });

}