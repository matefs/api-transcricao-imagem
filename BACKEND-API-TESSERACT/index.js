const express = require('express');
const Tesseract = require('tesseract.js');
const cors = require('cors');



const app = express();
app.use(express.json());
app.use(cors()); // Adiciona o CORS à sua API

app.get('/', async (req,res) => { 
  let status = { status: 'Tente utilizar a rota /transcrever'}
  res.send(JSON.stringify(status))
})


app.post('/transcrever', async (req, res) => {
  try {
    const base64Image = req.body.image;
    const imageBuffer = Buffer.from(base64Image, 'base64');

    const result = await Tesseract.recognize(imageBuffer, 'por');
    const text = result.data.text;

    res.json({ text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro ao transcrever a imagem.' });
  }
});

const port = 4000;
app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
