const router = require('express').Router();
const pool = require('../../db');

router.route('/').post(async (req, res) => {
    const { name, login, password, role, pasSeries, pasNum, pasIssueDate, pasExpiryDate, phone, birthdate, address } = req.body;
    console.log(req.body);
    try {
        const user = await pool.query('SELECT * FROM clients WHERE clogin = $1', [login]);

        if (user.rows.length !== 0) {
            res.status(400).json({ message: 'This login is already used by someone else!' });
        }

        if (user.rows.length === 0) {
            await pool.query('INSERT INTO clients (cname, clogin, cpassword, crole, cpassportseries, cpassportnumber, cpassportdateofissue, cpassportdateofexpiry, cphone, cbirthdate, caddress) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)',
                [name,
                    login,
                    password,
                    role,
                    pasSeries,
                    pasNum,
                    pasIssueDate,
                    pasExpiryDate,
                    phone,
                    birthdate,
                    address]);

            res.status(201).json({ message: 'New account was created!' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error' });
    }
});

module.exports = router;