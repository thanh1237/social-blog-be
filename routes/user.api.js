const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/authentication");
/**
 * @route POST api/users
 * @description Register new account
 * @access Public
 */
router.post("/", userController.register);
/**
 * @route PUT api/users/
 * @description Update user profile
 * @access Login required
 */
router.put("/", authMiddleware.loginRequired, userController.updateProfile);

/**
 * @route GET api/users/me
 * @description Get current user info
 * @access Login required
 */
router.get("/me", authMiddleware.loginRequired, userController.getCurrentUser);

/**
 * @route GET api/users?page=1&limit=10
 * @description Get users with pagination
 * @access Login required
 */
router.get("/", authMiddleware.loginRequired, userController.getUsers);

module.exports = router;
