import React from 'react';

const FeaturedNewsletters = () => {
  const newsletterItems = [
    'Unspun: Scottish Politics',
    'Lessons to Learn',
    'Business Insight',
    'Winds of Change'
  ];

  return (
    <>
      {/* Bootstrap CSS CDN */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      

      <div>
        {/* Featured Newsletters Section */}
        <section className="featured-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="featured-newsletters">
                  <h2 className="featured-title">
                    <span className="star-icon">★</span>
                    Featured newsletters
                  </h2>
                  <div className="newsletter-links">
                    {newsletterItems.map((item, index) => (
                      <a key={index} href="#" className="newsletter-link">
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Employment Tribunal Section */}
        <section className="employment-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <h3 className="employment-title">
                  The Sandie Peggie Employment Tribunal: <a href="#" className="employment-link">Follow our coverage here</a>
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FeaturedNewsletters;