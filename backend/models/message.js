const db = require('../db');

const createMessage = (name, email, message, callback) => {
  const sql = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';
  db.run(sql, [name, email, message], callback);
};

const getAllMessages = (callback) => {
  db.all('SELECT * FROM messages ORDER BY created_at DESC', [], callback);
};

module.exports = { createMessage, getAllMessages };
