const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.post('/api/observations', upload.single('photo'), (req, res) => {
  const obs = {
    description: req.body.description,
    lat: parseFloat(req.body.lat),
    lng: parseFloat(req.body.lng),
    photo: req.file ? req.file.filename : null,
    timestamp: new Date().toISOString()
  };

  fs.mkdirSync('data', { recursive: true });
  const filePath = path.join('data', 'observations.json');
  let list = [];
  if (fs.existsSync(filePath)) {
    list = JSON.parse(fs.readFileSync(filePath));
  }
  list.push(obs);
  fs.writeFileSync(filePath, JSON.stringify(list, null, 2));
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
