const User = require('../../Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secKey = process.env.SECKEY;

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "Please try to login with correct credentials" });
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.json({ success: false, message: "Please try to login with correct credentials" });
        }
        const data = {
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                name: user.name
            },
        }
        const authToken = jwt.sign(data, secKey);
        res.json({
            authToken, success: true, user: data.user, message: "Login Successful"
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = loginUser;