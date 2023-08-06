let express = require('express');
let path = require('path');

let indexRouter = require('./routes/index');
let logger = require('./middleware').logger


let port = process.env.APP_PORT ?? 3000;
let app = express();


// view engine setup
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'static')));

app.use('/', indexRouter);
app.use(logger)


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
