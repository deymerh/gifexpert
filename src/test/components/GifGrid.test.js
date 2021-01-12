import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en el componentes <GifGrid />', () => {

  const category = 'One Punch';

  test('Debe mostrarse correctamente', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar items cuando se cargan imagenes de mi custom hook useFetchGifs', () => {
    const gifs = [
      {
        id: '123',
        url: 'https://localhost/cualquiera/imagen.jpg',
        title: 'Lo que sea'
      },
      {
        id: '123',
        url: 'https://localhost/cualquiera/imagen.jpg',
        title: 'Lo que sea'
      }
    ]
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  })


})
