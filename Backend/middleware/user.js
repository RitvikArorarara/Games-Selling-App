const jwt = require("jsonwebtoken");
const { JWT_USER_SECRET } = require("../config");

function userMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      message: "No token provided",
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_USER_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(403).json({
      message: "Invalid token",
    });
  }
}
module.exports = {
  userMiddleware: userMiddleware,
};
