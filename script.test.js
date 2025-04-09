import { translateToMorse, translateToLetters } from './morse.js';

describe('Morse translation tests', () => {
    test("Sample test", () => {
        expect(true).toBe(true);
    });

    test('Translates English to morse code', () => {
        expect(translateToMorse("Cats and dogs")).toBe("-.-. .- - ...   .- -. -..   -.. --- --. ...   ");
      });
      
      test('Translates morse code to English', () => {
        expect(translateToLetters("-.-. .- - ...   .- -. -..   -.. --- --. ...")).toBe("CATS AND DOGS ");
      });
  });