const express = require('express');
const router = express.Router();
const User = require('./../Models/User');
const fetchUser = require("../middleware/fetchUser")
const createProfile = require('./profile/createProfile.js');
const updateProfile = require('./profile/updateProfile.js');
const getProfile = require('./profile/getProfile.js');


// @Route: POST /api/auth/createProfile
// @Desc: Create a new profile
// @Access: Private
//@data: {bio,profilePic,educations,projects,achievements,experience,skills,socials}
router.post("/createProfile", fetchUser, createProfile);


//@Route: POST /api/auth/updateProfile
//@Desc: Update a profile
//@Access: Private
//@data: {bio,profilePic,educations,projects,achievements,experience,skills,socials}
router.post("/updateProfile", fetchUser, updateProfile);
module.exports = router;

//@Route: GET /api/auth/getProfile
//@Desc: Get a profile
//@Access: public
//@data: {username}
router.get("/getProfile", getProfile);
