import Image from "next/image";
import React from "react";
import NewsSection from "./NewsSection";
import politicsData from "../../../public/data/politics.json"
import businessData from  "../../../public/data/business.json";
import technologyData from  "../../../public/data/technology.json";
import sportsData from  "../../../public/data/sports.json";
import scienceData from  "../../../public/data/science.json";
import healthData from  "../../../public/data/health.json";

const mostReadData = [
  {
    title: sportsData[0].title,
    image: sportsData[0].image,
    category: sportsData[0].category,
    slug: sportsData[0].slug,
  },
  {
    title: sportsData[0].title,
    image: sportsData[0].image,
    category: sportsData[0].category,
    slug: sportsData[0].slug,
  },
  {
    title: sportsData[0].title,
    image: sportsData[0].image,
    category: sportsData[0].category,
    slug: sportsData[0].slug,
  },
  {
    title: sportsData[0].title,
    image: sportsData[0].image,
    category: sportsData[0].category,
    slug: sportsData[0].slug,
  },
  {
    title: sportsData[0].title,
    image: sportsData[0].image,
    category: sportsData[0].category,
    slug: sportsData[0].slug,
  },
  {
    title: sportsData[0].title,
    image: sportsData[0].image,
    category: sportsData[0].category,
    slug: sportsData[0].slug,
  },
  {
    title: sportsData[0].title,
    image: sportsData[0].image,
    category: sportsData[0].category,
    slug: sportsData[0].slug,
  },
  {
    title: sportsData[0].title,
    image: sportsData[0].image,
    category: sportsData[0].category,
    slug: sportsData[0].slug,
  },
  {
    title: sportsData[0].title,
    image: sportsData[0].image,
    category: sportsData[0].category,
    slug: sportsData[0].slug,
  },
  {
    title: sportsData[0].title,
    image: sportsData[0].image,
    category: sportsData[0].category,
    slug: sportsData[0].slug,
  },
];

const commentedData = [
  {
    title: sportsData[0].title,
    image: sportsData[0].image,
    category: sportsData[0].category,
    slug: sportsData[0].slug,
  },
  {
    title: sportsData[0].title,
    image: sportsData[0].image,
    category: sportsData[0].category,
    slug: sportsData[0].slug,
  },
  {
    title: sportsData[0].title,
    image: sportsData[0].image,
    category: sportsData[0].category,
    slug: sportsData[0].slug,
  },
  {
    title: sportsData[0].title,
    image: sportsData[0].image,
    category: sportsData[0].category,
    slug: sportsData[0].slug,
  },
  {
    title: sportsData[0].title,
    image: sportsData[0].image,
    category: sportsData[0].category,
    slug: sportsData[0].slug,
  },
  {
    title: sportsData[0].title,
    image: sportsData[0].image,
    category: sportsData[0].category,
    slug: sportsData[0].slug,
  },
  {
    title: sportsData[0].title,
    image: sportsData[0].image,
    category: sportsData[0].category,
    slug: sportsData[0].slug,
  },
  {
    title: sportsData[0].title,
    image: sportsData[0].image,
    category: sportsData[0].category,
    slug: sportsData[0].slug,
  },
  {
    title: sportsData[0].title,
    image: sportsData[0].image,
    category: sportsData[0].category,
    slug: sportsData[0].slug,
  },
  {
    title: sportsData[0].title,
    image: sportsData[0].image,
    category: sportsData[0].category,
    slug: sportsData[0].slug,
  },
];

interface ArticleSectionProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  imageAlt: string;
  category: string;
  slug: string;
  shortdescription: string;
  description: string;
}

const DetailComponent: React.FC<ArticleSectionProps> = ({
  imageSrc,
  title,
  subtitle,
  imageAlt,
  category,
  slug,
  shortdescription,
  description,
}) => {
  return (
    <div className="container py-4 rugby-news-bg">
      <div className="row">
        <div className="col-lg-8"></div>
      </div>
      <div className="row">
        <h1 className="display-6  mb-3 rugby-news-title fw-bold fs-2">
          {title}
        </h1>
        <div className="d-flex flex-wrap align-items-center mb-3 rugby-news-meta">
          <span className="me-3 fw-bold">19TH JULY</span>
          <span className="me-3 fw-bold text-uppercase">
            British & Irish Lions
          </span>
          <span className="me-3 fw-bold text-uppercase">Rugby Union</span>
          <span className="fw-bold text-uppercase">{category}</span>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3">
          {/* Meta Information */}

          {/* Author */}
<div className="position-sticky top-0 bg-white z-3 pb-2">
  <div className="mb-2">
    <span className="fw-bold rugby-news-author">By Martin McMillan</span>
  </div>

  <div className="d-flex align-items-center">
    <span className="me-3 fw-bold">Share</span>
    <div className="d-flex gap-2 me-4">
      <div className="rounded-circle d-flex align-items-center justify-content-center social-btn social-fb">
        <span className="text-white fw-bold social-icon">f</span>
      </div>
      <div className="rounded-circle d-flex align-items-center justify-content-center social-btn social-x">
        <span className="text-white fw-bold social-icon">X</span>
      </div>
      <div className="rounded-circle d-flex align-items-center justify-content-center social-btn social-twitter">
        <span className="text-white fw-bold social-icon-small">@</span>
      </div>
    </div>
    <span className="fw-bold rugby-news-comments">0 Comments</span>
  </div>
</div>

        </div>
        <div className="position-relative mb-4 col-lg-6">
          <Image
            src={imageSrc}
            alt="Rugby player in action"
            className="img-fluid w-100  rugby-news-image"
            width={600}
            height={400}
          />
          <div className="section-header d-flex justify-content-between align-items-center">
            <h2 className="section-title-detial mb-0 fs-5"> {title}</h2>
          </div>
          <div className="py-3">
            <p className="fw-bold fst-italic">{shortdescription}</p>
          </div>
          <div className="py-3">
            {description
              .split(".")
              .filter((sentence) => sentence.trim() !== "")
              .map((sentence, index) => (
                <p key={index}>{sentence.trim()}.</p>
              ))}
          </div>
        </div>

        <div className="col-lg-3 col-md-12 mt-4 mt-lg-0">
          <div className="p-4 rounded text-white text-center rugby-news-sidebar">
            <h3 className="mb-3 rugby-news-sidebar-title">
              Get <span className="rugby-news-sidebar-italic">involved</span>
            </h3>
            <h4 className="mb-4 rugby-news-sidebar-subtitle">with the news</h4>
            <button className=" btn-sm rounded-5 fw-bold px-4 py-2 rugby-news-cta-btn">
              Send your news & photos
            </button>
          </div>
                 <div className="newsection-detail d-none d-lg-block">
        <NewsSection
          mostReadData={mostReadData}
          commentedData={commentedData}
          layout="column"
        />
      </div>
        </div>
       
      </div>
    </div>
  );
};

export default DetailComponent;
