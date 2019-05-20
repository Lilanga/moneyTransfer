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

router.get('/chart', (_req, res) => {
    Transections.aggregate([{$group : 
        {
        _id: {mode: "$mode", amount: "$amount"},
        "amount": {
          $min:"$amount"
        },
        "total": {
          $sum: 1
        }
      }
    }], (err, transections) => {
        if (err) {
            res.status(500).send(err);
        }

        res.json(transections.map( doc =>
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