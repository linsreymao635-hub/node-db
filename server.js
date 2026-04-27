import express from 'express'
import mysql from 'mysql2'

const app = express()
app.use(express.json())

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'my_node',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Home route
app.get('/', (req, res) => {
  res.send('Hello World')
})

/* =========================
   USERS API (MySQL)
========================= */

// GET all users
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results);
  });
});

// CREATE user
app.post('/users', (req, res) => {
  const { name } = req.body;

  const sql = 'INSERT INTO users (name) VALUES (?)';

  db.query(sql, [name], (err, result) => {
    if (err) return res.status(500).send(err);

    res.status(201).send({
      id: result.insertId,
      name: name
    });
  });
});

// UPDATE user
app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const { name } = req.body;

  const sql = 'UPDATE users SET name = ? WHERE id = ?';

  db.query(sql, [name, id], (err, result) => {
    if (err) return res.status(500).send(err);

    if (result.affectedRows === 0) {
      return res.status(404).send({ error: 'User not found' });
    }

    res.send({ id, name });
  });
});

// DELETE user
app.delete('/users/:id', (req, res) => {
  const id = req.params.id;

  db.query('DELETE FROM users WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).send(err);

    if (result.affectedRows === 0) {
      return res.status(404).send({ error: 'User not found' });
    }

    res.send({ message: 'User deleted successfully' });
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
});