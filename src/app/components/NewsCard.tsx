import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NewsCardaSectionProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  imageAlt: string;
  category: string;
  slug: string;
  newsType?:string
  classProp?:string
  imageSize?:string
  
}

const NewsCard: React.FC<NewsCardaSectionProps> = ({
  imageSrc,
  title,
  subtitle,
  imageAlt,
  category,
  slug,
  newsType,
  classProp,
  imageSize
}) => {
  return (
    <>
     <Link href={`/${category.toLowerCase()}/${slug}`} className='text-decoration-none text-reset'>
      <div className="NewsCard-container">
        <div className="NewsCard-link">
          <div className="NewsCard-image-wrapper ">
            <Image src={imageSrc} alt={imageAlt} width={600} height={600} className={imageSize} />
            <div className={classProp}>{newsType}</div>
          </div>

          <div className="NewsCard-content">
            <span className="NewsCard-category text-decoration-underline">{category}</span>
            <h2 className="NewsCard-headline">{title}</h2>
          </div>
        </div>
      </div>
      </Link>
    </>
  );
};

export default NewsCard;
