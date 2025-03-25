const express = require('express');
const { Suscriptor } = require('../models');
var router = express.Router();


/* GET home page. */
router.get('/crear', function (req, res, next) {
  res.render('index', { title: 'inicio', view: 'pages/crearSuscriptor', });
});
router.get('/', function (req, res, next) {
  res.render('index', { title: 'inicio', view: 'pages/crearSuscriptor', });
});

router.get('/suscriptores', async (req, res) => {
  try {
    const suscriptores = await Suscriptor.findAll();
    res.render('index', { title: 'inicio', view: 'pages/todosSuscriptores', suscriptores });
  } catch (error) {
    console.error('Error al obtener suscriptores:', error);
    res.status(500).send('Error interno del servidor');
  }
}
);

router.post('/suscriptor', async (req, res) => {
  const { name, email } = req.body;

  try {
    const existingSuscriptor = await Suscriptor.findOne({ where: { email } });
    if (existingSuscriptor) {
      return res.status(400).send('El email ya está registrado');
    }

    await Suscriptor.create({
      email: email,
      nombre: name,
      fecha_registro: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    res.render('index', { title: 'inicio', view: 'pages/index', });
  } catch (error) {
    console.error('Error al registrar suscriptor:', error);
    res.status(500).send('Error interno del servidor');
  }
});

router.put('/suscriptor', async (req, res) => {
  const { name, email } = req.body;

  try {
    const existingSuscriptor = await Suscriptor.findOne({ where: { email } });
    if (existingSuscriptor) {
      return res.status(400).send('El email ya está registrado');
    }

    await Suscriptor.create({
      email: email,
      nombre: name,
      fecha_registro: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    res.render('index', { title: 'inicio', view: 'pages/index', });
  } catch (error) {
    console.error('Error al registrar suscriptor:', error);
    res.status(500).send('Error interno del servidor');
  }
});

module.exports = router;
