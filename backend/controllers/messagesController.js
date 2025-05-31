const Message = require('../models/message');

exports.create = (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
  }

  Message.createMessage(name, email, message, (err) => {
    if (err) return res.status(500).json({ error: 'Error al guardar el mensaje.' });
    res.status(201).json({ success: true });
  });
};

exports.list = (req, res) => {
  Message.getAllMessages((err, rows) => {
    if (err) return res.status(500).json({ error: 'Error al obtener mensajes.' });
    res.json(rows);
  });
};
