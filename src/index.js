const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const { engine } = require('express-handlebars');
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
                          helpers: {
                            sum:(a, b) => a + b,
                            sortable: (field, sort) => {
                              const sortType = field === sort.column ? sort.type : 'default';

                              const icons = {
                                default: 'oi oi-elevator',
                                asc: 'oi oi-sort-ascending',
                                desc: 'oi oi-sort-descending'
                              }
                              const types = {
                                default: 'desc',
                                asc: 'desc',
                                desc: 'asc'
                              }

                              const icon = icons[sortType]
                              const type = types[sortType]

                              return `<a href="?_sort&column=${field}&type=${type}">
                              <span class="${icon}"></span>
                            </a>`;
                            }
                          },
                        }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//route init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})