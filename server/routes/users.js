const express = require("express");
const router = express.Router();
const Users = require("../models/userModel");

router.get("/", (req, res) => {
    Users.find({}, (err, users) => {
        res.json(users);
    });
});

router.use("/:id", (req, res, next) => {
    Users.findById(req.params.id, (err, user) => {
        if (err) res.status(500).send(err);
        else req.user = user;
        next();
    });
});

router.post("/", (req, res) => {
    const user = new Users(req.body);
    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.status(201).json(user);
    });
});

router
    .get("/:id", (req, res) => {
        return res.json(req.user);
    })
    .put("/:id", (req, res) => {
        Object.keys(req.body).map(key => {
            req.user[key] = req.body[key];
        });
        req.user.save();
        res.json(req.user);
    })
    .delete("/:id", (req, res) => {
        req.user.delete();
        res.status(204).send();
    });

module.exports = router;
