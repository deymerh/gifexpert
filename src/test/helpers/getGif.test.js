import { getGif } from "../../helpers/getGifs"

describe('Pruebas en la funcion getGif fetch', () => {
  test('debe traer 10 elementos', async () => {
    const gifs = await getGif('One punch');
    expect(gifs.length).toBe(10);
  });
  test('no debe traer ningun elemento', async () => {
    const gifs = await getGif('');
    expect(gifs.length).toBe(0);
  });
});
