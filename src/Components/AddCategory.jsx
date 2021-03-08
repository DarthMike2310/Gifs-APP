import React, { useState } from 'react'
import PropTypes from 'prop-types';

function AddCategory({ setCategories }) {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {

    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if ( inputValue.trim().length > 2 ) {
      setCategories( category => [inputValue, ...category]);
      setInputValue('');
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add category"
        value={ inputValue }
        onChange={handleInputChange}
      />
    </form>
  );
};

export default AddCategory


// Validacion
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}