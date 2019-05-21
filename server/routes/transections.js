const express = require('express');
const router = express.Router();
const Transections = require('../models/transectionModel');

router.get('/', (_req, res) => {
    Transections.find({}, (err, transections) => {
        if (err) {
            res.status(500).send(err);
        }

        res.json(transections);
    });
});

router.get('/summary', (_req, res) => {
    Transections.aggregate([
        {
            $group:
            {
                _id: { mode: "$mode" },
                data: {
                    $push: {
                        amount: "$amount"
                    }
                }
            },
        },
        {
            $unwind:
            {
                path: "$data"
            }
        },
        {
            $group:
            {
                _id: { mode: "$_id.mode", amount: "$data.amount" },
                "total": {
                    $sum: 1
                }
            }
        },
        {
            $project:
            {
                _id: 0,
                type: "$_id.mode",
                data: ["$_id.amount", "$total"],
            }
        },
        {
            $group:
            {
                _id: "$type",
                data: { $push: "$data" }
            }
        },
        {
            $project:
            {
                _id:1,
                name:"$_id",
               data:1,
             }
        }
    ], (err, transections) => {
        if (err) {
            res.status(500).send(err);
        }

        res.json(transections.map(doc =>
            Object.assign(
                doc,
                { "mode": doc._id.mode }
            )
        ));
    });
});

router.post("/", (req, res) => {
    const transections = new Transections(req.body);
    transections.save(function (err) {
        if (err) {
            return next(err);
        }

        res.status(201).send(transections);
    });
});

router.use('/:id', (req, res, next) => {
    Transections.findById(req.params.id, (err, transection) => {
        if (err) {
            res.status(500).send(err);
        } else {
            req.transection = transection;
        }
        next();
    });
});

router
    .get('/:id', (req, res) => {
        return res.json(req.transection);
    });

module.exports = router;