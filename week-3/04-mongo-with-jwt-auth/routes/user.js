const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Courses, PurchasedCourses } = require("../../db");
const jwt = require("jsonwebtoken");
const jwt_secret = require("../config");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  await User.create({
    Username: username,
    Password: password,
  });
  res.status(200).json({
    msg: "User created successfully",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const user = await User.find({
    Username: username,
  });
  if (user) {
    const token = await jwt.sign({ username: username }, jwt_secret);
    res.status(200).json({
      msg: "User logged in successfully",
      token: token,
    });
  } else {
    res.status(401).json({
      msg: "User not found",
    });
  }
});

router.get("/courses", (req, res) => {
  // Implement listing all courses logic
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, jwt_secret);
  const user = User.find({
    Username: decoded.username,
  });
  if (user) {
    const course = Courses.find({});
    res.status(200).json({
      courses: course,
    });
  }
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
  const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, jwt_secret);
    const user = User.find({
        Username: decoded.username,
    });
    if(user){
        const course = Courses.find({
            _id: req.params.courseId,
        });
        PurchasedCourses.create({
            Username: decoded.username,
            Course: course,
        });
        res.status(200).json({
            msg: "Course purchased successfully",
        });
    }
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
   const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, jwt_secret);
    const user = User.find({
        Username: decoded.username,
    });
    if(user){
        const purchasedCourses = PurchasedCourses.find({
            Username: decoded.username,
        });
        res.status(200).json({
            purchasedCourses: purchasedCourses,
        });
    }
});

module.exports = router;
