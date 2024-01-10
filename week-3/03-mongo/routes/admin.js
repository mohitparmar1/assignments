const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  await Admin.create({
    username: username,
    password: password,
  })
    .then(function (value) {
      res.json({
        msg: "Admin created successfully",
      });
    })
    .catch(function (err) {
      res.status(400).json({
        msg: "Admin already exists",
      });
    });
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;

  const newCourse = Course.create({
    title,
    description,
    imageLink,
    price,
  });
  res.status(200).json({
    msg: "Course created successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  const response = Course.find({});
  res.json({
    response,
  });
});

module.exports = router;
