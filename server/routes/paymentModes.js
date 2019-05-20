const express = require("express");
const router = express.Router();
const PaymentMode = require("../models/paymentModeModel");

router.get("/", (_req, res) => {
    PaymentMode.find({}, (err, modes) => {
        if (err) {
            res.status(500).send(err);
        }

        res.json(modes);
    });
});

router.use("/:id", (req, res, next) => {
    PaymentMode.findById(req.params.id, (err, paymentMode) => {
        if (err) {res.status(500).send(err);}
        else { req.paymentMode = paymentMode; }
        next();
    });
});

router.post("/", (req, res) => {
    const paymentMode = new PaymentMode(req.body);
    paymentMode.save(function (err) {
        if (err) {
            return next(err);
        }
        res.status(201).json(paymentMode);
    });
});

router
    .get("/:id", (req, res) => {
        return res.json(req.paymentMode);
    })
    .put("/:id", (req, res) => {
        Object.keys(req.body).map(key => {
            req.paymentMode[key] = req.body[key];
        });
        req.paymentMode.save();
        res.json(req.paymentMode);
    })
    .delete("/:id", (req, res) => {
        req.paymentMode.delete();
        res.status(204).send();
    });

module.exports = router;
