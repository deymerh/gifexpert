import '@testing-library/jest-dom';
import React from 'react';
import GitExpertApp from '../GitExpertApp';
import { shallow } from 'enzyme';

describe('Pruebas en el compoente <GItExpertApp />', () => {
  const wrapper = shallow(<GitExpertApp />);
  test('Debe mostrar el conponente <GItExpertApp /> correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar una lista de categorias', () => {
    const categories = ['One Punch', 'Dragon Ball'];
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });

});