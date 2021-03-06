import React, {useState} from 'react';
import AddCategory from './Components/AddCategory';


const GifExpertApp = () => {

  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

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
          categories.map( category => {
            return <li key={category}>{category}</li>
          })
        }
      </ol>
    </>
  )
};


export default GifExpertApp;