// файл що відповідає за посилання SQL-запитів та вивід таблиць на сторінку мовою json
const { pool } = require('./database');

// запит на вивід даних з таблиці "tovary"
const getAllData = async (req, res) => { 
  try {
    const query = 'SELECT * FROM tovary'; 
    const { rows } = await pool.query(query);
    res.json(rows);
  } catch (error) {
    console.error('Помилка отримання даних:', error);
    res.status(500).json({ error: 'Помилка сервера' });
  }
};

// запит на вивід даних з таблиці "zakazy"
const getAllData1 = async (req, res) => {
    try {
      const query = 'SELECT * FROM zakazy'; 
      const { rows } = await pool.query(query);
      res.json(rows);
    } catch (error) {
      console.error('Помилка отримання даних:', error);
      res.status(500).json({ error: 'Помилка сервера' });
    }
  };


module.exports = {
  getAllData,
  getAllData1,
};