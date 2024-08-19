const { verify } = require("jsonwebtoken");
const  AppError  = require("../utils/appError");
const authConfig = require("../configs/auth");

function ensureAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new AppError("JWT token is missing", 401);
  }

  const [, token] = authHeader.split(" ");

  if (!token) {
    throw new AppError("Invalid JWT token", 401); 
  }
 
  try {
    const { sub: user_id } = verify(token, authConfig.jwt.secret);
    req.user = { id: Number(user_id) };
    return next();
  } catch (error) {
    throw new AppError("Invalid JWT token", 401);
  }
  
}

module.exports = ensureAuth;
