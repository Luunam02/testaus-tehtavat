// Palauttaa ehdokaslistan

const ehdokasRekisteri = {
  haeLista: (tunnus) => {
    return [
      { numero: 101, nimi: "Maija Meikäläinen", aanet: 2 },
      { numero: 102, nimi: "Kalle Korhonen", aanet: 4 },
      { numero: 103, nimi: "Sari Virtanen", aanet: 2 },
      { numero: 104, nimi: "Jukka Jokinen", aanet: 5 }
    ];
  }
};

export default ehdokasRekisteri;