
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem' 


export const GifGrid = ({category}) => {

    const key = "qEAQXhI4hSjMHGi3YrKBycdDS9tKkf6h"
 
    const {data:images, loading} = useFetchGifs(category, key)


    return (
       <div className='wrapper' >
        <h3> {category} </h3>
        { loading &&  <p className='animate__animated animate__pulse animate__slower loading-text'> Loading... </p> }
        {
            images.map( img => (
                <GifGridItem  {...img} key={img.id} />
            ))
        }
      </div>     
  )
}
