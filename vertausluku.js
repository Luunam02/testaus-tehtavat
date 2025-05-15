function laskeVertausluvut(ehdokkaat) {
  const kopio = [...ehdokkaat]; 

  const ryhmat = {};
  for (const e of kopio) {
    if (!ryhmat[e.aanet]) ryhmat[e.aanet] = [];
    ryhmat[e.aanet].push(e);
  }

  let satunnaistettuLista = [];
  for (const aanimaara in ryhmat) {
    const ryhma = ryhmat[aanimaara];
    if (ryhma.length > 1) {
      const arvottu = ryhma.sort(() => Math.random() - 0.5);
      for (const e of arvottu) {
        e.arvottu = true;
      }
      satunnaistettuLista = satunnaistettuLista.concat(arvottu);
    } else {
      satunnaistettuLista.push(ryhma[0]);
    }
  }

  const aanetYhteensa = satunnaistettuLista.reduce((summa, e) => summa + e.aanet, 0);

  satunnaistettuLista.sort((a, b) => b.aanet - a.aanet);

  return satunnaistettuLista.map((e, index) => ({
    ...e,
    vertausluku: aanetYhteensa / (index + 1)
  }));
}
export default laskeVertausluvut;
export { laskeVertausluvut };