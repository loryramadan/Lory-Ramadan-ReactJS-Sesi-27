import React from 'react'
import {Link} from 'react-router-dom'
import 'boxicons';

const BackToMenuButton = () => {
  return (
    <Link to="/">
      <button className='mx-5'>
                <box-icon name="left-arrow-alt" color="orange" size="lg"></box-icon>
        </button>
    </Link>
  )
}

export default BackToMenuButton