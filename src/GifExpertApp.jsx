import React from 'react';
import AddCategory from './Components/AddCategory';


const GifExpertApp = () => {

  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  // const categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

  // const handleAdd = () => {
  //   // setCategories([...categories, 'Superman', 'Batman', 'Spiderman', 'HunterXHunter']);
  //   setCategories( category => [...category, 'Superman', 'Batman', 'Spiderman', 'HunterXHunter']);
  // };

  return(
    <>
      <h2>GifExpertApp</h2>
      <AddCategory />
      <hr />

      <ol>

      </ol>
    </>
  )
};


export default GifExpertApp;