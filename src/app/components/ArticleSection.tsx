import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ArticleSectionProps{
    imageSrc: string;
  title: string;
  subtitle?: string;
  imageAlt: string;
  category: string;
  slug: string;
  
}

const ArticleSection: React.FC<ArticleSectionProps> = ({
     imageSrc,
  title,
  subtitle,
  imageAlt,
  category,
  slug,
 

    }) => {
  return (
    <>
      {/* Bootstrap CSS CDN */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
       <Link href={`/${category.toLowerCase()}/${slug}`} className='text-decoration-none text-reset'>
      <article className="article-section">
        <div className="container-fluid">
          <div className="row">
            {/* Article Content */}
            <div className="col-lg-4 col-12 pe-lg-4">
              <div className="article-content">
                <h1 className="article-headline1">
                 {title}
                </h1>
                
                <p className="article-excerpt">
                  {subtitle}
                </p>
                
                <p className="article-category">
                 {category}
                </p>
              </div>
            </div>
            
            {/* Article Image */}
            <div className="col-lg-8 col-12 ps-lg-4">
              <div className="article-image-container">
                <Image
                  src={imageSrc} 
                  alt={imageAlt}
                  className="article-image-news-bus"
                  width={600}
                  height={400}
                />
                <div className=""></div>
                <div className="author-tag">
                  BRIAN DONNELLY
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      </Link>
    </>
    
  );
};

export default ArticleSection;