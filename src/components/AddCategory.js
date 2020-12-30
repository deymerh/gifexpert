import React, { useState } from 'react';
import propTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 3) {
      setCategories(cats => [inputValue, ...cats]);
      setInputValue('')
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text" />
    </form>
  )
}
AddCategory.propTypes = {
  setCategories: propTypes.func.isRequired
}