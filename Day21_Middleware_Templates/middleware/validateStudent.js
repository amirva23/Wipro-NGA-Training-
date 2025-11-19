// Custom Validation Middleware
module.exports = function (req, res, next) {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            success: false,
            message: "Name and Email are required"
        });
    }

    next();
};
