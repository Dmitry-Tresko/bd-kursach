const router = require('express').Router();
const pool = require('../../db');

router.route('/').post(async (req, res) => {
    const { login, password } = req.body;
    try {
        const user = await pool.query('SELECT * FROM clients WHERE clogin = $1', [login]);
        const manager = await pool.query('SELECT * FROM managers WHERE mlogin = $1', [login]);

        if (user.rows.length === 0 && manager.rows.length === 0) {
            res.status(400).json({ message: "User not found!" });
        }
        if (user.rows.length !== 0) {
            if (user.rows[0].cpassword === password) {
                res.status(200).json(user.rows[0].crole);
            }
        }
        if (manager.rows.length !== 0) {
            if (manager.rows[0].mpassword === password) {
                res.status(200).json(manager.rows[0].mrole);
            }
        }
        res.status(400).json({ message: 'Invalid login or password!' });
    } catch (error) {
        res.status(500).json({ message: 'Error happened!' });
    }
});

module.exports = router;