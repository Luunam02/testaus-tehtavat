import express from 'express';
import { laskeVertausluvut } from './vertausluku.js';
import ehdokasRekisteri from './ehdokasRekisteri.js'; 

const app = express();

app.get('/vertausluvut', (req, res) => {
  const ehdokkaat = ehdokasRekisteri.haeLista(1);
  const tulos = laskeVertausluvut(ehdokkaat);
  res.json(tulos);
});

app.listen(3000, () => {
  console.log('Palvelin käynnissä portissa 3000');
});