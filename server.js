const express = require("express");
const session = require("express-session");
const nocache = require("nocache");
const hbs = require("hbs");

const userRoute = require("./Routes/user");

const app = express();
const PORT = 5000;

app.use(express.static("public"));
app.set("view engine", "hbs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    session({
        secret: "mySuperSecretKey",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
    })
);

app.use(nocache());


app.use("/", userRoute);


app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);