module.exports = function ensureLogin(params) {
	return function (req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		}
		return res.redirect(params.redirectError);
	}
};