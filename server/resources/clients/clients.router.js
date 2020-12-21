const router = require('express').Router();
const pool = require('../../db');

router.route('/').get(async (req, res) => {
    const data = await pool.query('SELECT * FROM clients');

    res.json(data);
});

router.route('/:id').delete(async (req, res) => {
    const id = req.params.id;
    try {
        const isExist = await pool.query('SELECT * FROM clients WHERE cid = $1', [id]);
        if (isExist.rows.length === 0) {
            res.status(400).json({ message: 'User does not exist!' });
        }

        await pool.query('DELETE FROM clients WHERE cid = $1', [id]);

        res.json({ message: 'Client successfully deleted' });
    } catch (error) {
        res.status(400);
    }
});

module.exports = router;