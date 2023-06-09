const { Router } = require("express");

const PostController = require("./app/controllers/PostController");
const UserController = require("./app/controllers/UserController");

const router = Router();

router.get("/posts", PostController.index);

router.get("/users", UserController.index);
router.get("/users/:id", UserController.show);

module.exports = router;
