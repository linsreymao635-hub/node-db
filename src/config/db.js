import mysql from 'mysql2/promise';

let pool;

try {
  pool = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'my_node',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
  console.log('Database connected');
} catch (error) {
  console.error('Database connection failed:', error.message);
  process.exit(1);
}

export default pool;