import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GitExpertApp = (defaultCategories = []) => {
  // const [categories, setCategories] = useState(['One punch']);
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>GitExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      { categories.map(categorie =>
        <GifGrid
          key={categorie}
          category={categorie}
        />)}
    </>
  )
}

export default GitExpertApp;