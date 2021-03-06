import React, {useState} from 'react';
import AddCategory from './Components/AddCategory.jsx';
import GifGrid from './Components/GifGrid.jsx';


const GifExpertApp = () => {

  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['One Punch'])

  // const handleAdd = () => {
  //   // setCategories([...categories, 'Superman', 'Batman', 'Spiderman', 'HunterXHunter']);
  //   setCategories( category => [...category, 'Superman', 'Batman', 'Spiderman', 'HunterXHunter']);
  // };

  return(
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories } />
      <hr />

      <ol>
        {
          categories.map( category => (
            <GifGrid
              key={category}
              category={category}
            />
          ))
        }
      </ol>
    </>
  )
};


export default GifExpertApp;