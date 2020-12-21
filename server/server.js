const app = require('./app');

const start = async () => {
    try {
        app.listen(5000, () =>
            console.log(`App is running on http://localhost:5000`)
        );
    } catch (e) {
        console.error(e);
    }
};

start();