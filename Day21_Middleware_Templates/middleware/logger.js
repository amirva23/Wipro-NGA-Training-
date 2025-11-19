// Custom Request Logging Middleware
module.exports = function (req, res, next) {
    const time = new Date().toISOString();
    console.log(`[${time}] ${req.method} ${req.url}`);
    next();
};
