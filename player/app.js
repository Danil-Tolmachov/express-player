const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const indexRouter = require('./routes/index');
const jsonRouter = require('./routes/json')
const logger = require('./middleware').logger


let port = process.env.APP_PORT ?? 3000;
const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ejs');

// static connecting
app.use(express.static(path.join(__dirname, 'static')));



app.use(logger);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use('/', indexRouter);
app.use('/api', jsonRouter);


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err.stack);
});


app.listen(port, function() {
  console.log(`Server started at http://localhost:${port}`)
})
