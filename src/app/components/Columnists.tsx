import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

const Columnists = () => {
  const columnists = [
    {
      id: 1,
      name: "Kevin McKenna",
      image: "https://www.heraldscotland.com/resources/images/16086061?htype=&type=display", // Replace with actual image path
      title: "I had a heart attack 30,000ft in the air - here's how I've stayed healthy since"
    },
    {
      id: 2,
      name: "Alison Rowat",
      image: "https://www.heraldscotland.com/resources/images/16085840?htype=&type=display", // Replace with actual image path
      title: "Karen Pirie: Call the fashion police, Scotland's worst dressed detective is back"
    },
    {
      id: 3,
      name: "Dani Garavelli",
      image: "https://www.heraldscotland.com/resources/images/16533273?htype=&type=display", // Replace with actual image path
      title: "The glee over the downfall of Salt Path author is ugly and elitist"
    },
    {
      id: 4,
      name: "Brian Taylor",
      image: "https://www.heraldscotland.com/resources/images/16533273?htype=&type=display", // Replace with actual image path
      title: "Who should be most worried about meeting Trump: Starmer or Swinney?"
    }
  ];

  return (
    <div className="columnists-section">      
      <div className="container-fluid">
        <h2 className="columnists-title text-decoration-underline">Columnists</h2>
        
        <div className="row g-4">
          {columnists.map((columnist) => (
            <div key={columnist.id} className="col-12 col-md-6 col-lg-3">
              <a href="#" className="columnist-card d-block h-100">
                <div className=" h-100">
                  <div className="card-body">
                    <Image 
                      src={columnist.image} 
                      alt={columnist.name}
                      className="columnist-image"
                      width={600}
                      height={400}
                    />
                    <h3 className="columnist-name">{columnist.name}</h3>
                    <p className="columnist-title">{columnist.title}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        
        <div className="navigation-section">
          <button className="nav-button" disabled>
            Previous
          </button>
          
          <div className="nav-dots">
            <div className="nav-dot active"></div>
            <div className="nav-dot"></div>
          </div>
          
          <button className="nav-button">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Columnists;