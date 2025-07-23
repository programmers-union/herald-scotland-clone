import React from 'react';
import Image from 'next/image';

interface TennisSectionProps {
  sectionTitle: string;
  category: string;
  articleTitle: string;
  imageSrc: string;
  imageAlt: string;
  moreLink?: string;
}

const TennisSection: React.FC<TennisSectionProps> = ({
  sectionTitle,
  category,
  articleTitle,
  imageSrc,
  imageAlt,
  moreLink = "#"
}) => {
  return (
    <div className="tennis-section-wrapper">
      {/* Header with title and More button */}
      <div className="section-header d-flex justify-content-between align-items-center">
        <h2 className="section-title mb-0">{sectionTitle}</h2>
        <a href={moreLink} className="more-btn text-decoration-none">
          More
        </a>
      </div>

      {/* Main content area */}
      <div className="content-area">
        {/* Image container */}
        <div className="image-container position-relative">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="section-image"
            priority
          />
        </div>

        {/* Text content */}
        <div className="text-content">
          <p className="category-label mb-2 text-decoration-underline">{category}</p>
          <h3 className="article-title mb-0">{articleTitle}</h3>
        </div>
      </div>    
    </div>
  );
};

export default TennisSection;