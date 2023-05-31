// налаштування серверної частини

// в терміналі - npm index - створення файлу json
// set test command -> node index.js
// завантаження пакетів - npm i pg express 

// Ctrl+C - end server session //

/*нотатка - APIs are mechanisms that enable two software components 
to communicate with each other using a set of definitions and protocols*/

const express = require('express');
const app = express();

const mainController = require('./control');
const db = require('./database');

// Підключення до бази даних
db.connect();

app.get('/data', mainController.getAllData); // за  http://localhost:3000/data виводиться інформація про товари
app.get('/orders', mainController.getAllData1); // за  http://localhost:3000/orders виводиться інформація про замовлення

app.listen(3000, () => {
  console.log('Сервер запущено на порту 3000');
});
