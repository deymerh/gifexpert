import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const { loading, data: images } = useFetchGifs(category);

  return loading ? <p>Cargando...</p> : (
    <>
      <h3> {category} </h3>
      <div className="card-grid animate__animated animate__fadeIn">
        {
          images.map(img => {
            return (
              <GifGridItem key={img.id} {...img} />
            )
          })
        }
      </div>
    </>
  )
}
