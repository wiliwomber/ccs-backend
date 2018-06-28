"use strict";
const express        = require("express");
const router         = express.Router();
const middlewares    = require("../middlewares");
const authController = require("../controllers/auth");
const userModel      = require("../models/user");


router.post("/login", authController.login);
router.post("/register", authController.register);
router.get("/me", middlewares.checkAuthentication, authController.me);
router.get("/logout", authController.logout);
router.put("/update", middlewares.checkAuthentication, authController.update);
router.put("/selectCourse", middlewares.checkAuthentication, authController.selectCourse);
router.put("/deSelectCourse", middlewares.checkAuthentication, authController.deSelectCourse);
router.get("/:id", authController.read);
router.post("/select", authController.Test);


module.exports = router;