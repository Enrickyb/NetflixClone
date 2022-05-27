import React from 'react'
import './Header.css'
export default function Header(props) {
  return (
    <div className='header' id={props.black ? 'black' : ''} >
        <div className='header--logo'>
            <a href='*'><img src='https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png' alt='logo'></img></a>
        </div>
        <div className='header--user'><a href='*'><img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png' alt='avatar'></img></a></div>
    </div>
  )
}
