import { useState } from "react";

export const AddCategory2 = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState();

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(inputValue)

    if (inputValue.trim() <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue("");
    // setCategories( categories => [ inputValue, ...categories ]);
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar gifts"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

/* 
export const AddCategory2 = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState();

  const onInputChange = ({target}) => {
    console.log(target.value); // comentar
    setInputValue(target.value);
  };

  const onSubmit = (event)=>{
    event.preventDefault();
    if(inputValue.trim() <=1) return;
    onNewCategory( inputValue.trim() );
    setCategories( categories =>[ inputValue, ...categories ]); //comentar
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Ingrese sus datos"
        value={inputValue}
        onChange={ onInputChange }
      />
    </form>
  );
};

 */
