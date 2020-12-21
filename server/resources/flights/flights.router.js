const router = require('express').Router();
const pool = require('../../db');

router.route('/').get(async (req, res) => {
    const data = await pool.query('SELECT * FROM flights');

    res.json(data);
});

router.route('/:id').delete(async (req, res) => {
    const id = req.params.id;
    try {
        const isExist = await pool.query('SELECT * FROM flights WHERE cid = $1', [id]);
        if (isExist.rows.length === 0) {
            res.status(400).json({ message: 'Flight does not exist!' });
        }

        await pool.query('DELETE FROM fligths WHERE cid = $1', [id]);

        res.json({ message: 'Flight successfully deleted' });
    } catch (error) {
        res.status(400);
    }
});

module.exports = router;