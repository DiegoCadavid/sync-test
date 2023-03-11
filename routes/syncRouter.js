const express = require('express');
const syncRouter = express.Router();

syncRouter.get('/', (req, res) => {
    res.status(200).json({ msg : 'path test'});
});

module.exports = syncRouter;