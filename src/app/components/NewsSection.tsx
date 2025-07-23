'use client'
import React, { useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

interface NewsItem {
  title: string;
  image: string;
  category: string;
  slug: string;
}

interface NewsSectionProps {
  mostReadData: NewsItem[];
  commentedData: NewsItem[];
   layout?: "row" | "column";
}

const NewsSection: React.FC<NewsSectionProps> = ({
  mostReadData,
  commentedData,
   layout = "row",


  
}) => {
  const [activeTab, setActiveTab] = useState("mostRead");

  const currentData = activeTab === "mostRead" ? mostReadData : commentedData;

  return (
    
    <div className="container-fluid px-0">
      <div className="news-section">
        {/* Tab Navigation */}
        <div className="d-flex border-black border-bottom  mb-4">
          <button
            className={`btn btn-link text-decoration-none fs-5  p-0 me-4 pb-2 position-relative  ${
              activeTab === "mostRead" ? "active-tab" : "inactive-tab"
            }`}
            onClick={() => setActiveTab("mostRead")}
          >
            Most read
          </button>
          <button
            className={`btn btn-link text-decoration-none fs-5 p-0 pb-2 position-relative ${
              activeTab === "commented" ? "active-tab" : "inactive-tab"
            }`}
            onClick={() => setActiveTab("commented")}
          >
            Commented
          </button>
        </div>

        {/* News Grid */}
     <div className={`row py-2 g-3 ${layout === "column" ? "flex-column" : ""}`}>
  {currentData?.slice(0, 10).map((item, index) => (
    <div
      key={`${item.slug}-${index}`}
      className={`${
        layout === "column" ? "col-12 mb-3" : "col-12 col-md-6"
      }`}
    >
      <div className="d-flex align-items-center news-item">
        <span className="news-number me-3 flex-shrink-0">
          {index + 1}
        </span>
        <div className="news-content">
          <Link
            href={`/${item.category.toLowerCase()}/${item.slug}`}
            className="text-decoration-none"
          >
            <h6 className="news-title mb-0">{item.title}</h6>
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>


        {/* Show More Button */}
        <div className="text-center  mt-4  border-black border-top">
          <button className=" show-more-btn fw-bold ">Show more articles</button>
        </div>
      </div>


    </div>
    
  );
};

export default NewsSection;