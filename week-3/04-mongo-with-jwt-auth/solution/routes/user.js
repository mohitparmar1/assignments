const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const jwt_secret = "../config";
const userMiddleware = require("../middleware/user");
const { User , Course} = require("../../db");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  User.create({
    Username: username,
    Password: password,
  });
  res.status(200).json({
    msg: "User created successfully",
  });
});

router.post("/signin", (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const user = User.find({
    Username: username,
  });
  if (user) {
    const token = jwt.verify({ username: username }, jwt_secret);
    res.status(200).json({
      token,
    });
  }
});

router.get("/courses", (req, res) => {
  // Implement listing all courses logic
  const courses = Course.findAll();
  res.status(200).json({
    courses,
  });
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
  const username = req.username;
  console.log(username);
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router;
