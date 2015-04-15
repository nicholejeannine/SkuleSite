module.exports = function ensureLogin(params) {
    function (req, res, next) {
        if (req.isAuthenticated()) return next();
        return res.redirect(params.redirectError);
    }
};
