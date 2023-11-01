require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const jwt = require('jsonwebtoken');



const authRoutes = require('./routes/auth');
// const userRoutes = require('./routes/users');
// const orderRoutes = require('./routes/orders');
const modelRoutes = require('./routes/models');
const fabricRoutes = require('./routes/fabrics');




const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Pour vérifier le token JWT et ajouter l'utilisateur au req si valide
app.use((req, res, next) => {
  if (req.headers && req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decode) => {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});

// Routes
app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/orders', orderRoutes);
app.use('/api/models', modelRoutes);
app.use('/api/fabrics', fabricRoutes);
// ... ajoutez d'autres routes selon vos besoins

// Gestion des erreurs 404
app.use((req, res, next) => {
  res.status(404).send({ error: 'Not found' });
});

// Gestion des autres erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;  // pour les tests et autres besoins
