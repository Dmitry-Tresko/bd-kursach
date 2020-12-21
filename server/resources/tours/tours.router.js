const router = require('express').Router();
const pool = require('../../db');

router.route('/').get(async (req, res) => {
    const data = await pool.query('SELECT * FROM tours');

    res.json(data);
});

router.route('/:type').get(async (req, res) => {
    const data = await pool.query('SELECT * FROM tours WHERE ttype = $1', [req.params.type]);

    res.json(data);
});

router.route('/id/:touroperatorid').get(async (req, res) => {
    const data = await pool.query('SELECT * FROM tours WHERE ttoid = $1', [req.params.touroperatorid]);

    res.json(data);
});

router.route('/food/:inclusion').get(async (req, res) => {
    const isIncluded = req.params.inclusion === 'Inclusive' ? true : false;

    const data = await pool.query('SELECT * FROM tours WHERE tfood = $1', [isIncluded]);

    res.json(data);
});

module.exports = router;