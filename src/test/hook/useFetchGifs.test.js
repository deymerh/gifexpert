import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas sobre el hook useFetchGifs', () => {

  test('Debe retornar el estado inicial', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));

    const { data, loading } = result.current;

    await waitForNextUpdate()
    expect(data).toEqual([]);
    expect(loading).toEqual(true);
  });

  test('Debe retornar un arreglo de imagenes y loading igual false', async () => {

    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toEqual(false);
  });


});
