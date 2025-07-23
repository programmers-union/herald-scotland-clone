import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ImageProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  imageAlt: string;
  category: string;
  slug: string;
}

const ImageAndtitle: React.FC<ImageProps> = ({
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
      <article className="investing-article">
        <a href="#" className="article-link">
          <div className="d-flex flex-row">
            {/* Article Image */}
            <div className="flex-shrink-0">
              <Image
                src={imageSrc}
                alt="Stock market trading screens showing financial data"
                className="article-image"
                style={{ width: "120px" }}
                width={600}
                height={400}
              />
            </div>

            {/* Article Content */}
            <div className="flex-grow-1 article-content px-2  ">
              <span className="article-category text-decoration-underline">{category}</span>
              <h2 className="article-headline fw-bold">
                {title}
              </h2>
            </div>
          </div>
        </a>
      </article>
      </Link>
    </>
  );
};

export default ImageAndtitle;
