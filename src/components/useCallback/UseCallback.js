import { memo } from 'react'

function Hihi({ onIncrease}) {
    console.log('re-render')

    return (
        <>
            <h2>Hello world </h2>
            <button onClick={onIncrease}>Click me!</button>               
        </>
    )
}

export default memo(Hihi)