import React from 'react'
import './floatingDiv.scss'
function FloatingDiv({Image, text1, text2}) {
  return (
    <div className='floatingdiv'>
        <Image className='logoJs'/>
        <span>
            {text1}
            <br />
            {text2}
        </span>
    </div>
  )
}

export default FloatingDiv