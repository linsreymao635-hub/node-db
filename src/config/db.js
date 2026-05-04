import mysql from 'mysql2/promise';

let db;

try {
  db = await mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'my_node',
  });
  console.log('Database connected');
} catch (error) {
  console.error('Database connection failed:', error.message);
  process.exit(1);
}

export default db;