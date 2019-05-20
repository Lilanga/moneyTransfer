const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const isDev = process.env.NODE_DEV !== 'production';
const nextApp = next({ isDev });
const handle = nextApp.getRequestHandler();
const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://systemuser:1qaz2wsx@ds123625.mlab.com:23625/cashtransfer', { useNewUrlParser: true });

nextApp.prepare().then(() => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api/transections', require('./routes/transections'));
    app.use('/api/users', require('./routes/users'));
    app.use('/api/paymentmodes', require('./routes/paymentModes'));

    app.get('*', (req,res) => {
        return handle(req,res);
    });

    app.listen(PORT, err => {
        if (err) throw err;
        console.log(`> running at http://localhost:${PORT}`);
    });
}).catch(ex=>{
    console.error(ex.stack);
    process.exit(1);
});