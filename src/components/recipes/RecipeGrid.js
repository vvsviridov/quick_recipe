import React from 'react'
import RecipeItem from './RecipeItem'
import Spinner from '../ui/Spinner'

const RecipeGrid = ({items, isLoading}) => {
    return isLoading ? (<Spinner />) : (
        <section className='cards'>
            {items.map(item => (
                <RecipeItem key={item.id} item={item} />
            ))}
        </section>
    )
}

export default RecipeGrid
