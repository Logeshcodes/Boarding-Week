import React, { forwardRef } from 'react'

const Forward = forwardRef((props , ref)=>{
    return <input type="text" ref={ref} onChange={props.onChange} />
})

export default Forward