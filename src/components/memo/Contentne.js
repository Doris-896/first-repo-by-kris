import{memo} from 'react'

function Contentne({count}) {
    console.log('re-render')
    return (
        <h2> Hello world!!! {count}</h2>
    )
}

export default memo(Contentne)