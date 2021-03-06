import React from 'react'

function GifGrid({category}) {

  const getGifs = async() => {

    const url = 'https://api.giphy.com/v1/gifs/search?q=Superman&limit=10&api_key=a3XisP6Vn3x7TzUQtfW6KLDd4yOQEakV';
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img =>  {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    });

    console.log(gifs);

  };

  getGifs();

  return (
    <div>
      <h3>{category}</h3>
    </div>
  )
}

export default GifGrid
