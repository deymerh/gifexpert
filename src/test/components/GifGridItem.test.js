import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en el compoente <GifGridItem  />', () => {

  const url = 'https://images.com/12345';
  const title = 'Goku';
  const wrapper = shallow(<GifGridItem url={url} title={title} />);

  test('Debe mostrar el conponente <GifGridItem /> correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('Debe mostrar el title correctamente', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });
  test('debe mostrar las propiedades de la img correctamente', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });
  test('debe de tener el findIn en la clase', () => {
    const div = wrapper.find('div').prop('className').includes('animate__bounce');
    expect(div).toBe(true);
  });
});