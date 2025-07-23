import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ArticleHeroProps {
  authorName: string;
  category: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  slug:string;
}

const ArticleHero: React.FC<ArticleHeroProps> = ({
  authorName,
  category,
  title,
  imageSrc,
  imageAlt,
  slug
}) => {
  return (
      <Link href={`/${category.toLowerCase()}/${slug}`} className='text-decoration-none text-reset'>
    <div className="article-hero">
      {/* Hero Image Section */}
      <div className="hero-image-wrapper position-relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="hero-image"
          priority
        />
        
        {/* Author Badge - Top Left */}
        <div className="author-badge position-absolute">
          {authorName}
        </div>
      </div>

      {/* Content Section - Below Image */}
      <div className="hero-content-section">
        <div className="container-fluid px-0">
          <div className="content-wrapper">
            <p className="category-label mb-2">{category}</p>
            <h1 className="article-title mb-0">{title}</h1>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ArticleHero;