import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'> 
      <div className="footer-content">
        <div className="footer-content-left">
        <img src={assets.logo} alt="" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero minus molestiae, nisi soluta distinctio iste itaque dicta error quas, voluptates non nihil recusandae explicabo necessitatibus! Esse totam dolore velit similique quis et sint explicabo mollitia voluptates ab quibusdam, qui, reprehenderit facilis ut dolorem perspiciatis quisquam, cupiditate suscipit fuga exercitationem! Consequatur inventore assumenda laborum modi vitae porro delectus quae provident similique.

        </p>
        <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
        </div>
        <div className="footer-content-center">
        <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delievery</li>
            <li>Privacy Policy</li>
        </ul>
        </div>
        <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
        <ul>
            <li>+1-212-456-7890</li>
            <li>contact@tomato.com</li>
        </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright"> Copyright 2024 @ Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
