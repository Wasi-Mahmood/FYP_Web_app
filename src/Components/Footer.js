import React from 'react'
import '../Components/Footer.css'
import fb from '../Img/Footerimages/fb_logo.png'
import twitter from '../Img/Footerimages/twitter_logo.png'
import linkedin from '../Img/Footerimages/linkedin_logo.png'
import insta from '../Img/Footerimages/insta_logo.png'

function footer() {
  return (
  /*  <footer>
  <div className="footer-container">
    <div className="footer-col">
      <h3>About Us</h3>
      <p>We are a leading financial news and analysis website dedicated to providing investors with the latest market insights.</p>
    </div>
    <div className="footer-col">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="/Home">Home</a></li>
        <li><a href="#">Stocks</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
    <div className="footer-col">
      <h3>Follow Us</h3>
      <ul className="social-icons">
        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
        <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
      </ul>
    </div>
  </div>
</footer>*/

<div className='footer'>
<div className='sb__footer section__padding'>
    <div className='sb__footer-links'>
        <div className='sb__footer-links_div'>
            <h4>For Business</h4>
            <a href='#'>
                <p>Stocks</p>
            </a>
            <a href='#'>
                <p>Finance</p>
            </a>
            <a href='#'>
                <p>Individual</p>
            </a>
        </div>
        <div className='sb__footer-links_div'>
            <h4>Resources</h4>
            <a href='#'>
                <p>Resource Center</p>
            </a>
            <a href='#'>
                <p>Testimonials</p>
            </a>
            <a href='#'>
                <p>STV</p>
            </a>
        </div>
        <div className='sb__footer-links_div'>
            <h4>Partners</h4>
            <a href='#'>
                <p>Apple</p>
            </a>
            <a href='#'>
                <p>Microsoft</p>
            </a>
            <a href='#'>
                <p>Apple</p>
            </a>
            <a href='#'>
                <p>Apple</p>
            </a>
        </div>
        <div className='sb__footer-links_div'>
            <h4>Company</h4>
            <a href='/Home'>
                <p>Home</p>
            </a>
            <a href='/Portfolio'>
                <p>Portfolio</p>
            </a>
            <a href='/Services'>
                <p>Services</p>
            </a>
            <a href='#'>
                <p>Contact</p>
            </a>
        </div>
        <div className='sb__footer-links_div'>
            <h4>Coming Soon on</h4>
            <div className='socialmedia'>
                <p><img src={fb} alt='' /></p>
                <p><img src={twitter} alt='' /></p>
                <p><img src={linkedin} alt='' /></p>
                <p><img src={insta} alt='' /></p>
            </div>
        </div>
    </div>
    <hr></hr>
    <div className='sb__footer-below'>
        <div className='sb__footer-copyright'>
            <p>
                @{new Date().getFullYear} CodeInn. All right reserved.
            </p>
        </div>
        <div className='sb__footer-below-links'>
            <a href='#'><div><p>Terms & Conditions</p></div></a>
            <a href='#'><div><p>Privacy</p></div></a>
            <a href='#'><div><p>Security</p></div></a>
            <a href='#'><div><p>Cookie Declaration</p></div></a>
        </div>
    </div>

</div>
</div>
  )
}

export default footer