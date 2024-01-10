const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { User, Course, Admin } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");
// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  Admin.create({
    Username: username,
    Password: password,
  });
  res.status(200).json({
    msg: "Admin created successfully",
  });
});

router.post("/signin", (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const user = Admin.find({
    Username: username,
    Password: password,
  });
  if (user) {
    const token = jwt.sign({ username: username }, JWT_SECRET);
    res.json({
      token,
    });
  } else {
    res.status(411).json({
      msg: "Incorrect email and pass",
    });
  }
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;

  Course.create({
    title,
    description,
    imageLink,
    price,
  });
  res.json({
    message: "Course created successfully",
  });
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
   const response = Course.find({});
   res.status(200).json({
     msg: "Courses fetched successfully",
   });
});

module.exports = router;
