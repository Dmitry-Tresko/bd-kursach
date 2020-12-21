const express = require('express');
const cors = require('cors');
const app = express();

const managersRouter = require('./resources/managers/managers.router');
const clientsRouter = require('./resources/clients/clients.router');
const tourOperatorsRouter = require('./resources/tour_operators/tour_operators.router');
const reservationsRouter = require('./resources/reservations/reservations.router');
const toursRouter = require('./resources/tours/tours.router');
const flightsRouter = require('./resources/flights/flights.router');
const transportRouter = require('./resources/transport/transport.router');
const tourTypesRouter = require('./resources/tour_types/tour_types.router');

const loginRouter = require('./resources/login/login.js');
const registrationRouter = require('./resources/registration/registration.js');

app.use(cors());

app.use(express.json());

app.use('/managers', managersRouter);
app.use('/clients', clientsRouter);
app.use('/tour_operators', tourOperatorsRouter);
app.use('/reservations', reservationsRouter);
app.use('/tours', toursRouter);
app.use('/flights', flightsRouter);
app.use('/transport', transportRouter);
app.use('/tour_types', tourTypesRouter);

app.use('/login', loginRouter);
app.use('/registration', registrationRouter);

module.exports = app;