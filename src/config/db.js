import mysql from 'mysql2/promise';

<<<<<<< HEAD
let pool;

try {
  pool = mysql.createPool({
=======
let db;

try {
  db = await mysql.createConnection({
>>>>>>> bcd69119f11b4adb561e4bcce16252be7b8e0daa
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'my_node',
<<<<<<< HEAD
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
=======
>>>>>>> bcd69119f11b4adb561e4bcce16252be7b8e0daa
  });
  console.log('Database connected');
} catch (error) {
  console.error('Database connection failed:', error.message);
  process.exit(1);
}

export default pool;