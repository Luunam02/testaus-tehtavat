import laskeVertausluvut from "../vertausluku.js";
import ehdokasRekisteri from "../ehdokasRekisteri.js";

import { afterEach, beforeEach, describe, it, mock } from "node:test";
import assert from "node:assert/strict";

describe("laskeVertausluvut", () => {
  beforeEach(() => {
    const lista = [
      { numero: 101, nimi: "Maija Meikäläinen", aanet: 1 },
      { numero: 102, nimi: "Kalle Korhonen", aanet: 4 },
      { numero: 103, nimi: "Sari Virtanen", aanet: 2 },
      { numero: 104, nimi: "Jukka Jokinen", aanet: 5 }
    ]

    mock.method(ehdokasRekisteri, 'haeLista', () => {
      return lista;
    });
  });
  afterEach(() => {
    mock.reset();
  });

  it('listan eniten ääniä saaneen ehdokkaan vertausluku on listan äänten summa', () => {
    const tulos = laskeVertausluvut(ehdokasRekisteri.haeLista(1));
    assert.equal(tulos[0].vertausluku, 12);
  });
  it('listan toiseksi eniten ääniä saaneen ehdokkaan vertausluku on puolet listan äänien summasta', () => {
    const tulos = laskeVertausluvut(ehdokasRekisteri.haeLista(1));
    assert.equal(tulos[1].vertausluku, 6);
  });
  it('saman äänimäärän saaneet ehdokkaat saavat kentän arvottu: true', () => {
    const lista = [
      { numero: 201, nimi: "Eka", aanet: 3 },
      { numero: 202, nimi: "Toka", aanet: 3 },
      { numero: 203, nimi: "Kolmas", aanet: 1 }
    ];
  
    mock.method(ehdokasRekisteri, 'haeLista', () => lista);
  
    const tulos = laskeVertausluvut(ehdokasRekisteri.haeLista(1));
  
    const arvotut = tulos.filter(e => e.aanet === 3 && e.arvottu === true);
    assert.equal(arvotut.length, 2);
  });
  
  it('saman äänimäärän ehdokkaiden järjestys vaihtelee useissa ajoissa', () => {
    const lista = [
      { numero: 301, nimi: "A", aanet: 2 },
      { numero: 302, nimi: "B", aanet: 2 },
      { numero: 303, nimi: "C", aanet: 1 }
    ];
  
    mock.method(ehdokasRekisteri, 'haeLista', () => lista);
  
    const tulos1 = laskeVertausluvut(ehdokasRekisteri.haeLista(1));
    const tulos2 = laskeVertausluvut(ehdokasRekisteri.haeLista(1));
    const tulos3 = laskeVertausluvut(ehdokasRekisteri.haeLista(1));
    const tulos4 = laskeVertausluvut(ehdokasRekisteri.haeLista(1));
    const tulos5 = laskeVertausluvut(ehdokasRekisteri.haeLista(1));
    const tulos6 = laskeVertausluvut(ehdokasRekisteri.haeLista(1));
    const tulos7 = laskeVertausluvut(ehdokasRekisteri.haeLista(1));
    const tulos8 = laskeVertausluvut(ehdokasRekisteri.haeLista(1));
    const tulos9 = laskeVertausluvut(ehdokasRekisteri.haeLista(1));
    const tulos10 = laskeVertausluvut(ehdokasRekisteri.haeLista(1));
  
    const getJarjestys = (tulos) => tulos.filter(e => e.aanet === 2).map(e => e.numero).join(',');
  
    const j1 = getJarjestys(tulos1);
    const j2 = getJarjestys(tulos2);
    const j3 = getJarjestys(tulos3);
    const j4 = getJarjestys(tulos4);
    const j5 = getJarjestys(tulos5);
    const j6 = getJarjestys(tulos6);
    const j7 = getJarjestys(tulos7);
    const j8 = getJarjestys(tulos8);
    const j9 = getJarjestys(tulos9);
    const j10 = getJarjestys(tulos10);

  
    const kaikki = new Set([j1, j2, j3, j4, j5, j6, j7, j8, j9, j10]);
    assert.ok(kaikki.size > 1, "Arvonnassa pitää tulla eri järjestyksiä useilla kerroilla");
  });

});