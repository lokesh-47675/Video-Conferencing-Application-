import React from 'react'
import "../css/Footer.css"

export default function Footer() {
  return (
    <>
        <div className='footer'>
            <h6>@Meetify</h6>
            <div className='media-handle'>
                <a role='button'><i className="fa-brands fa-instagram"></i>Instagram</a>
                <a role='button'><i className="fa-brands fa-facebook"></i>Facebook</a>
                <a role='button'><i className="fa-brands fa-twitter"></i>Twitter</a>
            </div>
        </div>
    </>
  )
}
