import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
        <p className='copy'>Copyright &copy; {new Date().getFullYear()} By Zubeyir</p>
    </footer>
  )
}

export default Footer