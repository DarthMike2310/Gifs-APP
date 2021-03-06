import React, { useState } from 'react'

function AddCategory() {

  const [inputValue, setInputValue] = useState('Hola Mundo');

  const handleInputChange = (event) => {

    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submite hecho');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={ inputValue }
        onChange={handleInputChange}
      />
    </form>
  );
};

export default AddCategory
