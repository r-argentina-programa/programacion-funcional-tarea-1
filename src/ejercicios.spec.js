import {
  soloPares,
  soloUnaPalabra,
  soloArraysPositivos,
  todasVocalesIguales,
  multiplicarPor10,
  moverALaDerecha,
  soloVocales,
  duplicarMatriz,
  mayoresDeEdadValidados,
  transformarObjetoEnArray,
} from "./ejercicios";

describe("Tests", function () {
  describe("#soloPares()", function () {
    it("solo devuelve numeros pares", function () {
      const input = [10, 15, 20, 25, 30, 35];
      const expected = [10, 20, 30];
      const actual = soloPares(input);

      expect(actual).toEqual(expected);
    });
  });

  describe("#multiplicarPor10()", function () {
    it("multiplica todos los elementos del array por 10", function () {
      const input = [45, 1, -10, 11, 250];
      const expected = [450, 10, -100, 110, 2500];
      const actual = multiplicarPor10(input);

      expect(actual).toEqual(expected);
    });
  });

  describe("#moverALaDerecha()", function () {
    it("mueve todos los elementos hacia la derecha (y el último hacia la primera posición)", function () {
      const input = [{ name: "" }, 10, "left-side"];
      const expected = ["left-side", { name: "" }, 10];
      const actual = moverALaDerecha(input);

      expect(actual).toEqual(expected);
    });
  });

  describe("#soloUnaPalabra()", function () {
    it("solo devuelve los strings sin espacios", function () {
      const input = ["return", "phrases", "with one word"];
      const expected = ["return", "phrases"];
      const actual = soloUnaPalabra(input);

      expect(actual).toEqual(expected);
    });
  });

  describe("#soloVocales()", function () {
    it("saca todas las consonantes de las strings en el array", function () {
      const input = ["average", "exceptional", "amazing"];
      const expected = ["aeae", "eeioa", "aai"];
      const actual = soloVocales(input);

      expect(actual).toEqual(expected);
    });
  });

  describe("#soloArraysPositivos()", function () {
    it("solo devuelve los arrays internos cuyos numeros son positivos", function () {
      const input = [
        [1, 10, -100],
        [2, -20, 200],
        [3, 30, 300],
      ];
      const expected = [[3, 30, 300]];
      const actual = soloArraysPositivos(input);

      expect(actual).toEqual(expected);
    });
  });

  describe("#duplicarMatriz()", function () {
    it("duplica todos los numeros en la matriz (array de arrays)", function () {
      const input = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      const expected = [
        [2, 4, 6],
        [8, 10, 12],
        [14, 16, 18],
      ];
      const actual = duplicarMatriz(input);

      expect(actual).toEqual(expected);
    });
  });

  describe("#todasVocalesIguales()", function () {
    it("solo devuelve las palabras donde todas las vocales son las mismas", function () {
      const input = ["racecar", "amalgam", "oligopoly", "zoom"];
      const expected = ["amalgam", "zoom"];
      const actual = todasVocalesIguales(input);

      expect(actual).toEqual(expected);
    });
  });

  describe("#mayoresDeEdadValidados", function () {
    it('agrega la propiedad "mayor" true o false según si edad >= 18', function () {
      const input = [
        { nombre: "Jorge", edad: 29 },
        { nombre: "Alicia", edad: 23 },
        { nombre: "Lucas", edad: 15 },
        { nombre: "Adriana", edad: 18 },
      ];
      const expected = [
        { nombre: "Jorge", edad: 29, mayor: true },
        { nombre: "Alicia", edad: 23, mayor: true },
        { nombre: "Lucas", edad: 15, mayor: false },
        { nombre: "Adriana", edad: 18, mayor: false },
      ];
      const actual = mayoresDeEdadValidados(input);

      expect(actual).toEqual(expected);
    });
  });

  describe("#transformarObjetoEnArray", function () {
    it("transforma cada key en una propiedad 'id' dentro del objeto y los devuelve en un array", function () {
      const input = {
        ARS: { venta: 539.97, compra: 526.35, simbolo: "$" },
        USD: { venta: 530.54, compra: 266.03, simbolo: "$" },
        EUR: { venta: 587.42, compra: 782.48, simbolo: "€" },
      };
      const expected = [
        { id: "ARS", venta: 539.97, compra: 526.35, simbolo: "$" },
        { id: "USD", venta: 530.54, compra: 266.03, simbolo: "$" },
        { id: "EUR", venta: 587.42, compra: 782.48, simbolo: "€" },
      ];
      const actual = transformarObjetoEnArray(input);

      expect(actual).toEqual(expected);
    });

    it("funciona para elementos con otras propiedades", function () {
      const input = {
        "user-25": { nombre: "Jorge", edad: 29 },
        "user-12": { nombre: "Alicia", edad: 23 },
        "user-176": { nombre: "Lucas", edad: 15 },
      };
      const expected = [
        { id: "user-25", nombre: "Jorge", edad: 29 },
        { id: "user-12", nombre: "Alicia", edad: 23 },
        { id: "user-176", nombre: "Lucas", edad: 15 },
      ];
      const actual = transformarObjetoEnArray(input);

      expect(actual).toEqual(expected);
    });
  });
});
