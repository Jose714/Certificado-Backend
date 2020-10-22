const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const path = require('path');
const app = express()
const port = 3000

app.use(require('./routes'));
app.use(require('./routes/autentication'));
app.use('/links',require('./routes/links'));
//settings 
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs',hbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts')

}))


//middlework
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//variables globales

//public
app.use(express.static(path.join(__dirname, 'public')));




//iniciar servidor
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })