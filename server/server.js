var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var passport = require('./strategies/sql.localstrategy');
var sessionConfig = require('./modules/session-middleware'); //could be session.config

// Route includes
var userRouter = require('./routes/usernew.router');
var registerRouter = require('./routes/register.router');
var addQuestionRouter = require('./routes/addQuestion.router');
var answerResultsRouter = require('./routes/answerResults.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Passport Session Configuration
app.use(sessionConfig);

// Start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
// app.use('/api/usernew', userRouter);
app.use('/usernew', userRouter);
app.use('/register', registerRouter);
app.use('/addQuestion', addQuestionRouter);
app.use('/answerResults', answerResultsRouter);

// Serve static files
app.use(express.static('server/public'));

var PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
