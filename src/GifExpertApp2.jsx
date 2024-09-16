import { useState } from "react";
import { AddCategory2 } from "./components/AddCategory2";
import { GiftGrid2 } from "./components/GiftGrid2";

export const GifExpertApp2 = () => {
  const [categories, setCategories] = useState(["Goku"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h2>GifExpertApp2</h2>

      <AddCategory2 onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GiftGrid2 key={category} category={category} />
      ))}
    </>
  );
};
