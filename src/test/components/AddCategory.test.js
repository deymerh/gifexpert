import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en el compoente <AddCategory  />', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });
  test('Debe mostrar el conponente <AddCategory /> correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola Mundo';
    input.simulate('change', { target: { value } });
  });
  test('NO debe postear la información con submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() { } }) // En el objeto hay una función
    expect(setCategories).not.toHaveBeenCalled();
  });
  test('debe de llamar el set categories y limpiar la caja de texto', () => {
    // wrapper.find('form').simulate('submit', { preventDefault() { } })
    const value = 'Hola Mundo';
    const input = wrapper.find('input');
    input.simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault() { } });
    // expect(setCategories).toHaveBeenCalled(); //que haya sido llamda
    // expect(setCategories).toHaveBeenCalledTimes(1); // saber cuantas veces ha sido llamada
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); //para asegurarme de que hala sido llamada como con una funcion
    expect(input.prop('value')).toBe('')
  });
});