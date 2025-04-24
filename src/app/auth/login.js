const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const app = express();

const users = [
  { email: 'you@example.com', password: '$2a$10$u4skNzvC69f3OlBL6I7c9e/8EXdZjcfVrYIc/jBx8M9dTlxhJzBPO' }, // bcrypt hashed password
];

const SECRET_KEY = 'your-secret-key';

app.use(bodyParser.json());

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  bcrypt.compare(password, user.password, (err, isMatch) => {
    if (err || !isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ email: user.email }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
