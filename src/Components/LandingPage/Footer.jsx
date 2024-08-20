import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer class="footer-section">
    <div class="footer-content">
        <div class="footer-logo-nav">
            <img src="path-to-logo/logo.png" alt="MeetingMind Logo"/>
            <nav>
                <a href="#home">Home</a>
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
            </nav>
            <nav>
                <a href="#privacy-policy">Privacy Policy</a>
                <a href="#terms-of-service">Terms of Service</a>
            </nav>
        </div>
        <div class="footer-social">
            <a href="https://linkedin.com"><img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="LinkedIn"/></a>
            <a href="https://twitter.com"><img src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000" alt="Twitter"/></a>
            <a href="https://facebook.com"><img src="https://img.icons8.com/?size=100&id=13912&format=png&color=000000" alt="Facebook"/></a>
        </div>
        <div class="footer-contact">
            <p>Contact: <a href="mailto:info@meetingmind.com">abdullahtariq096@gmail.com</a> </p>
        </div>
    </div>
</footer>
  )
}

export default Footer