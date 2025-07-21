'use client'
import React, { useState } from 'react';

const HeraldHeader = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const topNavItems = [
    'Newsletters', 'Reader Rewards', 'Jobs', 'Homes', 'Motoring', 
    'Book an ad', 'Graduations', 'Contact us'
  ];

  const mainNavItems = [
    'News', 'Politics', 'Sport', 'Voices', 'Business HQ', 
    'Features', 'USA Today', 'Campaigns', 'Announcements', 
    'Events', 'Shop', 'Archive'
  ];

  return (
    <>
      {/* Bootstrap CSS CDN */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      


      <header className="herald-header">
        {/* Top Navigation */}
        <div className="top-nav d-none d-lg-block">
          <div className="container-fluid">
            <div className="d-flex width100">
              {topNavItems.map((item, index) => (
                <a key={index} href="#" className="text-nowrap">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Logo Section */}
        <div className="logo-section">
          <div className=" width100">
            <div className="row align-items-center">
              <div className="col-lg-8 col-12 text-center text-lg-start">
                <a href="#" className="logo">
                  <img src="/images/download.svg" alt="" />
                </a>
              </div>
              <div className="col-lg-4 col-12 text-center text-lg-end">
                <div className="d-flex justify-content-center justify-content-lg-end align-items-center header-buttons">
                  <button className="btn btn-subscribe me-2">Subscribe</button>
                  <button className="btn btn-secondary-custom me-2">Digital Edition</button>
                  <button className="btn btn-secondary-custom me-2">Puzzles</button>
                  <button className="user-icon">
                    <i className="fas fa-user"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="navbar navbar-expand-lg main-nav">
          <div className="container-fluid">
            <div className="d-flex  width100 align-items-center">
              <div className="d-lg-none">
                <button 
                  className="navbar-toggler menu-toggle"
                  type="button"
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>

              <div className={`navbar-collapse ${showMobileMenu ? 'show' : ''}`} id="navbarNav">
                <ul className="navbar-nav me-auto">
                  {mainNavItems.map((item, index) => (
                    <li key={index} className="nav-item">
                      <a className="nav-link" href="#">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="d-flex">
                <button className="menu-toggle d-lg-none">
                  <i className="fas fa-bars"></i>
                </button>
                <button className="search-toggle">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Font Awesome for icons */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
      />
    </>
  );
};

export default HeraldHeader;