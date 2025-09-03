const express = require("express");
const user = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");


const userDetails = {
    username: "mubashir",
    password: "123123",
    fullName: "Mubashir Palapadiyan",
    role: "MERN STACK DEVELOPER",
    email: "mubashir@example.com",
    phone: "+91 98765 43210",
    location: "Kerala, India",
    repos: 120,
    followers: 350,
    projects: 45
};


user.get("/", (req, res) => {
    if (req.session.user) {
        return res.redirect("/index");
    }

    let msg = null;
    if (req.session.passwordWrong) {
        msg = "Invalid Credentials. Try again!";
        req.session.passwordWrong = false;
    }

    res.render("login", { msg });
});


user.post("/verify", (req, res) => {
    const { username, password } = req.body;

    if (username === userDetails.username && password === userDetails.password) {
        req.session.user = userDetails;
        return res.redirect("/index");
    } else {
        req.session.passwordWrong = true;
        return res.redirect("/");
    }
});


user.get("/index", authMiddleware, (req, res) => {
    res.render("index", { user: req.session.user });
});


user.post("/logout", (req, res) => {
    req.session.destroy(() => {
        res.clearCookie("connect.sid");
        req.session = null;
        res.redirect("/");
    });
});

user.use((req, res) => {
    if (req.session.user) {
        res.redirect("/index");
    } else {
        res.redirect("/");
    }
})


module.exports = user;