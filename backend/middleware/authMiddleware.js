const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  //const token = req.header('Authorization');
  const token =
    req.header("Authorization") && req.header("Authorization").split(" ")[1]; // started working after change

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; //changed
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = authMiddleware;
