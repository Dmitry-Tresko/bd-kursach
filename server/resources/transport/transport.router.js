const router = require('express').Router();
const pool = require('../../db');

router.route('/').get(async (req, res) => {
    const data = await pool.query('SELECT * FROM transport');

    res.json(data);
});

module.exports = router;