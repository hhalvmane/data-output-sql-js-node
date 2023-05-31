// файл, у якому підключається база даних PostgreSQL

const { Pool } = require('pg');

const pool = new Pool({ // дані мають бути унікальні - ті, що у вашій базі даних в PostgreSQL
  user: "postgres",
  password: "hrefDataBs4",
  host: "localhost",
  port: 5432,
  database: "shop1"
});

// перевірка підключення до бази даних
const connect = async () => {
  try {
    await pool.connect();
    console.log('Успішно підключено до бази даних');
  } catch (error) {
    console.error('Помилка підключення: ', error);
  }
};

module.exports = {
  connect,
  pool
};