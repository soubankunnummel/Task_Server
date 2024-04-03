import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(403).json({ error: "no token provided" });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.USER_SECREAT);
    if (decodedToken) {
      req.user = decodedToken.email;

      next();
    }
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: "Unauthorized" });
  }
};

export default verifyToken;
