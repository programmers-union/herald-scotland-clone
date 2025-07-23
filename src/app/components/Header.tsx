'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const HeraldHeader = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const topNavItems = [
    'Newsletters', 'Reader Rewards', 'Jobs', 'Homes', 'Motoring', 
    'Book an ad', 'Graduations', 'Contact us'
  ];

  const navItems = [
    { label: "Business", slug: "business" },
    { label: "Politics", slug: "politics" },
    { label: "Sports", slug: "sports" },
    { label: "Technology", slug: "technology" },
    { label: "Science", slug: "science" },
    {label:"Health", slug:"health"}
  ];

  return (
    <>
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />

      <header className="herald-header">
        {/* Top Navigation - Hidden on mobile */}
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
          <div className="width100">
            {/* Desktop Layout */}
            <div className="row align-items-center d-none d-lg-flex">
              <div className="col-lg-8 text-start">
                <a href="/" className="logo">
                 <img src="/images/download.svg" alt="" />
                </a>
              </div>
              <div className="col-lg-4 text-end">
                <div className="d-flex justify-content-end align-items-center header-buttons">
                  <button className="show-more-btn ">Subscribe</button>
                  <button className="show-more-btn ">Digital Edition</button>
                  <button className="show-more-btn me-2">Puzzles</button>
                  <button className="show-more-btn me-2">
                    <i className="fas fa-user"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="row align-items-center d-flex d-lg-none mobile-header-row">
              <div className="col-8 text-start">
                <a href="/" className="logo">
                 <img src="/images/download.svg" alt="" />
                </a>
              </div>
              <div className="col-4 text-end ">
                <div className="d-flex justify-content-end align-items-center mobile-header-buttons">
                  <button className="show-more-btn ">Subscribe</button>
                  <button className="show-more-btn">
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
            <div className="width100">
              {/* Desktop Navigation */}
              <div className="d-none d-lg-flex justify-content-between align-items-center w-100">
                <ul className="navbar-nav d-flex flex-row">
                  {navItems.map((item, index) => (
                    <li key={index} className="nav-item">
                      <Link href={`/${item.slug}`} className="nav-link">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <button className="search-toggle">
                  <i className="fas fa-search"></i>
                </button>
              </div>

              {/* Mobile Navigation */}
              <div className="d-flex d-lg-none justify-content-between align-items-center w-100 mobile-nav-container">
                <div className="d-flex align-items-center">
                  <button 
                    className="mobile-menu-toggle me-3"
                    type="button"
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                  >
                    <i className="fas fa-bars"></i>
                  </button>
                  
                  {/* Mobile Categories - show first few */}
                  <div className="mobile-categories d-flex">
                    {navItems.slice(0,3).map((item, index) => (
                      <Link 
                        key={index} 
                        href={`/${item.slug}`} 
                        className="mobile-nav-link me-3"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <button className="mobile-search-toggle">
                  <i className="fas fa-search"></i>
                </button>
              </div>

              {/* Mobile Menu Dropdown */}
              {showMobileMenu && (
                <div className="mobile-menu-dropdown d-lg-none">
                  <ul className="mobile-nav-list">
                    {navItems.map((item, index) => (
                      <li key={index} className="mobile-nav-item">
                        <Link 
                          href={`/${item.slug}`} 
                          className="mobile-nav-dropdown-link"
                          onClick={() => setShowMobileMenu(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>



        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
    </>
  );
};

export default HeraldHeader;