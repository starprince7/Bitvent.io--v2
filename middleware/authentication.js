const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  // console.log("Middle-ware in action!!!")
  const token = req.cookies.jwt;
  if (!token) {
    return res.redirect("/login");
  } else {
    const verifyToken = jwt.verify(token, "mysecret", (err, dToken) => {
      if (err) {
        return res.redirect("/login");
      } else {
        next();
      }
    });
  }
};

const requireAuth2 = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.json({redirect: "/login"})
  } else {
    const verifyToken = jwt.verify(token, "mysecret", (err, dToken) => {
      if (err) {
        return res.json({redirect: "/login"})
      } else {
        next();
      }
    });
  }
};

module.exports = { requireAuth, requireAuth2 };
