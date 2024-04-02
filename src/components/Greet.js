import React from 'react'
import Count from './Count'

const Greet = props => {
    console.log('this is props', props)
    return (
        <div>
            <h1>
                Hello {props.name} - {props.heroName}
            </h1>
            {props.children}
            <Count />
            {/* control space */}
        </div>
    )
}
export default  Greet