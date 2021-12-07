const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(bodyParser.json());

router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});


router.get('/hello', (req, res) => {
  res.send('Hello, World!');
});


router.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'form.html'));
});

router.post('/formdata', (req, res) => {
  const body = req.body;
  res.render('formdata', {
    title: 'Submitted data from the form at /form',
    textinput: body.textInput,
    passwordinput: body.passwordExample,
    textarea: body.textareaExample,
  });
});

router.post(('/jsondata'), (req, res) => {
  console.log(req.body);
  res.render('jsondata', { data: req.body });
});

module.exports = router;
