import React, { useState } from 'react'
import './LoaderStyle.css'

function Loader ({loading}) {


    return (
        <>
        {
            loading &&  <div className='loader' /> 
        }
         
        </>
      
    )
}

export default Loader
