import React from 'react'
import Ingridient from './Ingridient'


const Ingridients = ({sections}) => {
    return !sections ? <li>no components</li> : (
        <div>
            {sections[0].components.map(component => (
                <Ingridient key={component.id} item={component} />
            ))}
        </div>
    )
}

export default Ingridients
