import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  const footerLinks = {
    column1: [
      { text: "Contact us", href: "#" },
      { text: "Contributor Terms", href: "#" },
      { text: "Terms of Advertising", href: "#" },
      { text: "Students", href: "#" }
    ],
    column2: [
      { text: "Manage Consent", href: "#" },
      { text: "Advertise", href: "#" },
      { text: "Privacy Policy", href: "#" },
      { text: "Add Your Event For Free", href: "#" }
    ],
    column3: [
      { text: "Announcements", href: "#" },
      { text: "Newsletters", href: "#" },
      { text: "Diversity Statement", href: "#" }
    ],
    column4: [
      { text: "Leap", href: "#" },
      { text: "Reader Rewards", href: "#" },
      { text: "Photo sales", href: "#" }
    ],
    column5: [
      { text: "Cookie Policy", href: "#" },
      { text: "Site Map", href: "#" },
      { text: "Our Publications", href: "#" }
    ],
    column6: [
      { text: "Terms & Conditions", href: "#" },
      { text: "Exchange and Mart", href: "#" },
      { text: "Archive", href: "#" }
    ]
  };

  const socialLinks = [
    { platform: "Facebook", text: "Like us on Facebook", href: "#", icon: "📘" },
    { platform: "X", text: "Follow us on X.com", href: "#", icon: "🐦" },
    { platform: "Instagram", text: "Follow us on Instagram", href: "#", icon: "📷" }
  ];

  return (
    <footer className="site-footer">

      
      <div className="container ">
        {/* Footer Links Section */}
        <div className="row footer-links">
          <div className="col-12 col-md-6 col-lg-2 ">
            {footerLinks.column1.map((link, index) => (
              <a key={index} href={link.href} className="footer-link">
                {link.text}
              </a>
            ))}
          </div>
          
          <div className="col-12 col-md-6 col-lg-2">
            {footerLinks.column2.map((link, index) => (
              <a key={index} href={link.href} className="footer-link">
                {link.text}
              </a>
            ))}
          </div>
          
          <div className="col-12 col-md-6 col-lg-2">
            {footerLinks.column3.map((link, index) => (
              <a key={index} href={link.href} className="footer-link">
                {link.text}
              </a>
            ))}
          </div>
          
          <div className="col-12 col-md-6 col-lg-2">
            {footerLinks.column4.map((link, index) => (
              <a key={index} href={link.href} className="footer-link">
                {link.text}
              </a>
            ))}
          </div>
          
          <div className="col-12 col-md-6 col-lg-2">
            {footerLinks.column5.map((link, index) => (
              <a key={index} href={link.href} className="footer-link">
                {link.text}
              </a>
            ))}
          </div>
          
          <div className="col-12 col-md-6 col-lg-2">
            {footerLinks.column6.map((link, index) => (
              <a key={index} href={link.href} className="footer-link">
                {link.text}
              </a>
            ))}
          </div>
        </div>
        
        {/* Footer Bottom Section */}
        <div className="row footer-bottom">
          <div className="col-12 col-lg-8">
            <div className="ipso-logo">
              ipso Regulated
            </div>
            
            <p className="footer-text">
              This website and associated newspapers adhere to the Independent Press Standards Organisation's Editors' 
              Code of Practice. If you have a complaint about the editorial content which relates to inaccuracy or intrusion, 
              then please <a href="#">contact the editor here</a>. If you are dissatisfied with the response provided you can{' '}
              <a href="#">contact IPSO here</a>
            </p>
            
            <p className="copyright-text">
              © 2001-2025. Newsquest Media Group Ltd, 1st Floor, Chartist Tower, Upper Dock Street, Newport, Wales, NP20 
              1DW | 01676637 |
            </p>
          </div>
          
          <div className="col-12 col-lg-4">
            <div className="social-section">
              <h3 className="social-title">FOLLOW US</h3>
              
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="social-link">
                  <span className="social-icon">{social.icon}</span>
                  {social.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;