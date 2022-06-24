const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const SortMiddleware = require('./app/middlewares/sortMiddleware');

const route = require('./routes');
const db = require('./config/db');
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'));

app.use(morgan('combined'));

app.use(SortMiddleware);

app.engine('hbs', engine({ extname: '.hbs', 
                          defaultLayout: "main", 
                          helpers: require('./helpers/handlebars')
                        }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));


//route init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})