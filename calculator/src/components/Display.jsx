import React from 'react'

function Display(props) {

  return (
    <div id='display'>
        <div>
            {props.text}
        </div>
    </div>
  )
}

export default Display