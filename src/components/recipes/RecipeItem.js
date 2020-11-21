import React from 'react'
import Ingridients from './Ingridients'


const RecipeItem = ({ item }) => {
    return (
        <div className='card'>
          <div className='card-inner'>
            <div className='card-front'>
              <img src={item.thumbnail_url} alt='' />
            </div>
            <div className='card-back'>
              <h1>{item.name}</h1>
                <ul>
                  <Ingridients sections={item.sections} />
                </ul>
            </div>
          </div>
        </div>
      )
    }

export default RecipeItem
