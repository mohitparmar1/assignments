const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://hello1234:hello1234@cluster0.bgxg4lf.mongodb.net/course_selling-app');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    Username: String,
    Password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    Username: String,
    Password: String,
    PurchasedCourses : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    Title: String,
    Description: String,
    ImageLink: String,
    Price : Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}