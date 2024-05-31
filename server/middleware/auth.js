const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    const token = req.cookies.token;
    console.log(token);
    if (token === undefined) {
        return res.status(401).json({
            success: false,
            error: 'Unauthorized',
            message: 'Admin Token not found'
        });
    }
    
    try {
        console.log("verification starting");
        const decoded = jwt.verify(token, "shhhh");
        console.log("verification done")
        if(decoded.role !== 'admin'){
            return res.status(401).json({
                success: false,
                error: 'Unauthorized',
                message: 'You are not authorized to access this route'
            });
        }
        req.user = decoded;
    } catch (err) {
        return res.status(401).json({
            success: false,
            error: 'Unauthorized',
            message: 'Please login to access this route'
        });
    }

    return next();
};

module.exports = auth;