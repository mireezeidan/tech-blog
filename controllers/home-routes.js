const router = require("express").Router();
const { User } = require("../models");
const Post = require("../models/Post");
const withAuth = require("../utils/auth");

// route to get all posts
router.get("/", async (req, res) => {
  const postData = await Post.findAll({ include: [User] }).catch((err) => {
    res.json(err);
  });
  const posts = postData.map((post) => post.get({ plain: true }));
  res.render("all", { posts, loggedIn: req.session.loggedIn });
});

// route to login page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/dashboard", (req, res) => {
  if (req.session.loggedIn) {
    res.render("dashboard");
    return;
  }

  res.redirect("/");
});

module.exports = router;
