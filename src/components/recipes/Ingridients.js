import React from 'react'
import Ingridient from './Ingridient'


const Ingridients = ({sections}) => {
    return !sections ? <li>no components</li> : (
        <React.Fragment>
            {sections[0].components.map(component => (
                <Ingridient key={component.id} item={component} />
            ))}
        </React.Fragment>
    )
}

export default Ingridients
