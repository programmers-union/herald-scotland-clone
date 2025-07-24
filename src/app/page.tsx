import Image from "next/image";
import styles from "./page.module.css";
import FeaturedNewsletters from "./components/FeaturedNewsletters ";
import ArticleSection from "./components/ArticleSection";
import politicsData from "../../public/data/politics.json";
import businessData from "../../public/data/business.json";
import technologyData from "../../public/data/technology.json";
import sportsData from "../../public/data/sports.json";
import scienceData from "../../public/data/science.json";
import healthData from "../../public/data/health.json";
import entertainmentData from "../../public/data/entertainment.json";
import NewsCard from "./components/NewsCard";
import ImageAndtitle from "./components/ImageAndtitle";
import ExampleNewsSection from "./components/NewsSection";
import NewsSection from "./components/NewsSection";
import Columnists from "./components/Columnists";

const mostReadData = [
  {
    title: sportsData[0].title,
    image: sportsData[0].image,
    category: sportsData[0].category,
    slug: sportsData[0].slug,
  },
  {
    title: businessData[0].title,
    image: businessData[0].image,
    category: businessData[0].category,
    slug: businessData[0].slug,
  },
  {
    title: businessData[4].title,
    image: businessData[4].image,
    category: businessData[4].category,
    slug: businessData[4].slug,
  },
  {
    title: politicsData[0].title,
    image: politicsData[0].image,
    category: politicsData[0].category,
    slug: politicsData[0].slug,
  },
  {
    title: healthData[0].title,
    image: healthData[0].image,
    category: healthData[0].category,
    slug: healthData[0].slug,
  },
  {
    title: scienceData[0].title,
    image: scienceData[0].image,
    category: scienceData[0].category,
    slug: scienceData[0].slug,
  },
  {
    title: technologyData[0].title,
    image: technologyData[0].image,
    category: technologyData[0].category,
    slug: technologyData[0].slug,
  },
  {
    title: technologyData[10].title,
    image: technologyData[10].image,
    category: technologyData[10].category,
    slug: technologyData[10].slug,
  },
  {
    title: scienceData[10].title,
    image: scienceData[10].image,
    category:scienceData[10].category,
    slug: scienceData[10].slug,
  },
  {
    title: healthData[6].title,
    image:  healthData[6].image,
    category:  healthData[6].category,
    slug:  healthData[6].slug,
  },
];

const commentedData = [
  {
    title: sportsData[9].title,
    image: sportsData[9].image,
    category: sportsData[9].category,
    slug: sportsData[9].slug,
  },
  {
    title: businessData[9].title,
    image:  businessData[9].image,
    category:  businessData[9].category,
    slug:  businessData[9].slug,
  },
  {
    title: politicsData[9].title,
    image:politicsData[9].image,
    category: politicsData[9].category,
    slug: politicsData[9].slug,
  },
  {
    title: scienceData[5].title,
    image:scienceData[5].image,
    category:scienceData[5].category,
    slug: scienceData[5].slug,
  },
  {
    title: technologyData[11].title,
    image: technologyData[11].image,
    category: technologyData[11].category,
    slug: technologyData[11].slug,
  },
  {
    title: healthData[11].title,
    image: healthData[11].image,
    category:healthData[11].category,
    slug:healthData[11].slug,
  },
  {
    title: politicsData[7].title,
    image:  politicsData[7].image,
    category:  politicsData[7].category,
    slug:  politicsData[7].slug,
  },
  {
    title: businessData[13].title,
    image: businessData[13].image,
    category:  businessData[13].category,
    slug: businessData[13].slug,
  },
  {
    title: healthData[2].title,
    image: healthData[2].image,
    category: healthData[2].category,
    slug:  healthData[2].slug,
  },
  {
    title: sportsData[13].title,
    image: sportsData[13].image,
    category: sportsData[13].category,
    slug: sportsData[13].slug,
  },
];

export default function Home() {
  return (
    <div className="container">
      <div className="d-none d-lg-block">
  <FeaturedNewsletters />
</div>

      
      <ArticleSection
        title={businessData[15].title}
        subtitle={businessData[15].shortdescription}
        imageSrc={businessData[15].image}
        category={businessData[15].category}
        slug={businessData[15].slug}
        imageAlt={businessData[15].title}
      />
      <div className="row">
        <div className="col-lg-4">
          <NewsCard
            title={entertainmentData[0].title}
            subtitle={entertainmentData[0].shortdescription}
            imageSrc={entertainmentData[0].image}
            category={entertainmentData[0].category}
            slug={entertainmentData[0].slug}
            imageAlt={entertainmentData[0].title}
            newsType="EXCLUSIVE"
            classProp="NewsCard-exclusive-tag"
            imageSize="NewsCard-image "
          />
        </div>
        <div className="col-lg-4">
          <NewsCard
            title={businessData[1].title}
            subtitle={businessData[1].shortdescription}
            imageSrc={businessData[1].image}
            category={businessData[1].category}
            slug={businessData[1].slug}
            imageAlt={businessData[1].title}
            newsType="EXCLUSIVE"
            classProp="NewsCard-exclusive-tag"
            imageSize="NewsCard-image "
          />
        </div>
        <div className="col-lg-4">
          <NewsCard
            title={businessData[2].title}
            subtitle={businessData[2].shortdescription}
            imageSrc={businessData[2].image}
            category={businessData[2].category}
            slug={businessData[2].slug}
            imageAlt={businessData[2].title}
            newsType="UPDATED"
            classProp="NewsCard-exclusive-tag"
            imageSize="NewsCard-image "
          />
        </div>
      </div>
      <div className="row py-4">
        <div className="col-lg-4">
          <NewsCard
            title={politicsData[0].title}
            subtitle={politicsData[0].shortdescription}
            imageSrc={politicsData[0].image}
            category={politicsData[0].category}
            slug={politicsData[0].slug}
            imageAlt={politicsData[0].title}
            newsType="EXCLUSIVE"
            classProp="NewsCard-exclusive-tag"
            imageSize="NewsCard-image "
          />
        </div>
        <div className="col-lg-4">
          <NewsCard
            title={politicsData[1].title}
            subtitle={politicsData[1].shortdescription}
            imageSrc={politicsData[1].image}
            category={politicsData[1].category}
            slug={politicsData[1].slug}
            imageAlt={politicsData[1].title}
            imageSize="NewsCard-image "
          />
        </div>
        <div className="col-lg-4">
          <NewsCard
            title={politicsData[2].title}
            subtitle={politicsData[2].shortdescription}
            imageSrc={politicsData[2].image}
            category={politicsData[2].category}
            slug={politicsData[2].slug}
            imageAlt={politicsData[2].title}
            newsType="UPDATED"
            classProp="NewsCard-exclusive-tag"
            imageSize="NewsCard-image "
          />
        </div>
      </div>
      <div className="row py-4">
        <div className="col-lg-4">
          <NewsCard
            title={technologyData[0].title}
            subtitle={technologyData[0].shortdescription}
            imageSrc={technologyData[0].image}
            category={technologyData[0].category}
            slug={technologyData[0].slug}
            imageAlt={technologyData[0].title}
            newsType="EXCLUSIVE"
            classProp="NewsCard-exclusive-tag"
            imageSize="NewsCard-image "
          />
        </div>
        <div className="col-lg-4">
          <NewsCard
            title={technologyData[1].title}
            subtitle={technologyData[1].shortdescription}
            imageSrc={technologyData[1].image}
            category={technologyData[1].category}
            slug={technologyData[1].slug}
            imageAlt={technologyData[1].title}
            newsType="EXCLUSIVE"
            classProp="NewsCard-exclusive-tag"
            imageSize="NewsCard-image "
          />
        </div>
        <div className="col-lg-4">
          <NewsCard
            title={technologyData[2].title}
            subtitle={technologyData[2].shortdescription}
            imageSrc={technologyData[2].image}
            category={technologyData[2].category}
            slug={technologyData[2].slug}
            imageAlt={technologyData[2].title}
            imageSize="NewsCard-image "
          />
        </div>
      </div>
      <div className="row py-4">
        <div className="col-lg-4">
          <NewsCard
            title={scienceData[0].title}
            subtitle={scienceData[0].shortdescription}
            imageSrc={scienceData[0].image}
            category={scienceData[0].category}
            slug={scienceData[0].slug}
            imageAlt={scienceData[0].title}
            imageSize="NewsCard-image "
          />
        </div>
        <div className="col-lg-4">
          <NewsCard
            title={scienceData[1].title}
            subtitle={scienceData[1].shortdescription}
            imageSrc={scienceData[1].image}
            category={scienceData[1].category}
            slug={scienceData[1].slug}
            imageAlt={scienceData[1].title}
            newsType="EXCLUSIVE"
            classProp="NewsCard-exclusive-tag"
            imageSize="NewsCard-image "
          />
        </div>
        <div className="col-lg-4">
          <NewsCard
            title={scienceData[2].title}
            subtitle={scienceData[2].shortdescription}
            imageSrc={scienceData[2].image}
            category={scienceData[2].category}
            slug={scienceData[2].slug}
            imageAlt={scienceData[2].title}
            newsType="EXCLUSIVE"
            classProp="NewsCard-exclusive-tag"
            imageSize="NewsCard-image "
          />
        </div>
      </div>
      <div className="row py-4">
        <div className="col-lg-4">
          <NewsCard
            title={healthData[0].title}
            subtitle={healthData[0].shortdescription}
            imageSrc={healthData[0].image}
            category={healthData[0].category}
            slug={healthData[0].slug}
            imageAlt={healthData[0].title}
            imageSize="NewsCard-image "
          />
        </div>
        <div className="col-lg-4">
          <NewsCard
            title={healthData[1].title}
            subtitle={healthData[1].shortdescription}
            imageSrc={healthData[1].image}
            category={healthData[1].category}
            slug={healthData[1].slug}
            imageAlt={healthData[1].title}
            newsType="EXCLUSIVE"
            classProp="NewsCard-exclusive-tag"
            imageSize="NewsCard-image "
          />
        </div>
        <div className="col-lg-4">
          <NewsCard
            title={healthData[2].title}
            subtitle={healthData[2].shortdescription}
            imageSrc={healthData[2].image}
            category={healthData[2].category}
            slug={healthData[2].slug}
            imageAlt={healthData[2].title}
            imageSize="NewsCard-image "
          />
        </div>
      </div>
      <div className="row py-4">
        <div className="col-lg-3">
          <NewsCard
            title={healthData[4].title}
            subtitle={healthData[4].shortdescription}
            imageSrc={healthData[4].image}
            category={healthData[4].category}
            slug={healthData[4].slug}
            imageAlt={healthData[4].title}
            imageSize="NewsCard-image-small "
            newsType="EXCLUSIVE"
            classProp="NewsCard-exclusive-tag"
          />
        </div>
        <div className="col-lg-3">
          <NewsCard
            title={healthData[5].title}
            subtitle={healthData[5].shortdescription}
            imageSrc={healthData[5].image}
            category={healthData[5].category}
            slug={healthData[5].slug}
            imageAlt={healthData[5].title}
            imageSize="NewsCard-image-small "
            newsType="UPDATED"
            classProp="NewsCard-exclusive-tag"
          />
        </div>
        <div className="col-lg-3">
          <NewsCard
            title={healthData[6].title}
            subtitle={healthData[6].shortdescription}
            imageSrc={healthData[6].image}
            category={healthData[6].category}
            slug={healthData[6].slug}
            imageAlt={healthData[6].title}
            imageSize="NewsCard-image-small "
          />
        </div>
        <div className="col-lg-3">
          <NewsCard
            title={healthData[7].title}
            subtitle={healthData[7].shortdescription}
            imageSrc={healthData[7].image}
            category={healthData[7].category}
            slug={healthData[7].slug}
            imageAlt={healthData[7].title}
            imageSize="NewsCard-image-small "
            newsType="EXCLUSIVE"
            classProp="NewsCard-exclusive-tag"
          />
        </div>
      </div>

      <div className="row py-4">
        <div className="col-lg-3">
          <NewsCard
            title={healthData[8].title}
            subtitle={healthData[8].shortdescription}
            imageSrc={healthData[8].image}
            category={healthData[8].category}
            slug={healthData[8].slug}
            imageAlt={healthData[8].title}
            imageSize="NewsCard-image-small "
          />
        </div>
        <div className="col-lg-3">
          <NewsCard
            title={healthData[9].title}
            subtitle={healthData[9].shortdescription}
            imageSrc={healthData[9].image}
            category={healthData[9].category}
            slug={healthData[9].slug}
            imageAlt={healthData[9].title}
            imageSize="NewsCard-image-small "
            newsType="EXCLUSIVE"
            classProp="NewsCard-exclusive-tag"
          />
        </div>
        <div className="col-lg-3">
          <NewsCard
            title={healthData[10].title}
            subtitle={healthData[10].shortdescription}
            imageSrc={healthData[10].image}
            category={healthData[10].category}
            slug={healthData[10].slug}
            imageAlt={healthData[10].title}
            imageSize="NewsCard-image-small "
            newsType="EXCLUSIVE"
            classProp="NewsCard-exclusive-tag"
          />
        </div>
        <div className="col-lg-3">
          <NewsCard
            title={healthData[11].title}
            subtitle={healthData[11].shortdescription}
            imageSrc={healthData[11].image}
            category={healthData[11].category}
            slug={healthData[11].slug}
            imageAlt={healthData[11].title}
            imageSize="NewsCard-image-small "
          />
        </div>
      </div>
      <div className="col-lg-12">
        <h2 className=" columnists-title text-decoration-underline">News</h2>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <ImageAndtitle
            title={businessData[3].title}
            imageSrc={businessData[3].image}
            imageAlt={businessData[3].title}
            category={businessData[3].category}
            slug={businessData[3].slug}
          />
        </div>
        <div className="col-lg-4">
          <ImageAndtitle
            title={businessData[4].title}
            imageSrc={businessData[4].image}
            imageAlt={businessData[4].title}
            category={businessData[4].category}
            slug={businessData[4].slug}
          />
        </div>
        <div className="col-lg-4">
          <ImageAndtitle
            title={businessData[5].title}
            imageSrc={businessData[5].image}
            imageAlt={businessData[5].title}
            category={businessData[5].category}
            slug={businessData[5].slug}
          />
        </div>
      </div>
      <div className="row py-3">
        <div className="col-lg-4">
          <ImageAndtitle
            title={businessData[6].title}
            imageSrc={businessData[6].image}
            imageAlt={businessData[6].title}
            category={businessData[6].category}
            slug={businessData[6].slug}
          />
        </div>
        <div className="col-lg-4">
          <ImageAndtitle
            title={businessData[7].title}
            imageSrc={businessData[7].image}
            imageAlt={businessData[7].title}
            category={businessData[7].category}
            slug={businessData[7].slug}
          />
        </div>
        <div className="col-lg-4">
          <ImageAndtitle
            title={businessData[8].title}
            imageSrc={businessData[8].image}
            imageAlt={businessData[8].title}
            category={businessData[8].category}
            slug={businessData[8].slug}
          />
        </div>
      </div>
      <div className="row py-3">
        <div className="col-lg-4">
          <ImageAndtitle
            title={businessData[9].title}
            imageSrc={businessData[9].image}
            imageAlt={businessData[9].title}
            category={businessData[9].category}
            slug={businessData[9].slug}
          />
        </div>
        <div className="col-lg-4">
          <ImageAndtitle
            title={businessData[10].title}
            imageSrc={businessData[10].image}
            imageAlt={businessData[10].title}
            category={businessData[10].category}
            slug={businessData[10].slug}
          />
        </div>
        <div className="col-lg-4">
          <ImageAndtitle
            title={businessData[11].title}
            imageSrc={businessData[11].image}
            imageAlt={businessData[11].title}
            category={businessData[11].category}
            slug={businessData[11].slug}
          />
        </div>
      </div>
      <div className="py-4">
        <NewsSection
          mostReadData={mostReadData}
          commentedData={commentedData}
        />
      </div>
      <Columnists />
      <h2 className="columnists-title text-decoration-underline">Sports</h2>
      <ArticleSection
        title={sportsData[13].title}
        subtitle={sportsData[13].shortdescription}
        imageSrc={sportsData[13].image}
        category={sportsData[13].category}
        slug={sportsData[13].slug}
        imageAlt={sportsData[13].title}
      />
      <div className="row">
        <div className="col-lg-3">
          <NewsCard
            title={sportsData[0].title}
            subtitle={sportsData[0].shortdescription}
            imageSrc={sportsData[0].image}
            category={sportsData[0].category}
            slug={sportsData[0].slug}
            imageAlt={sportsData[0].title}
            imageSize="NewsCard-image-small "
          />
        </div>
        <div className="col-lg-3">
          <NewsCard
            title={sportsData[1].title}
            subtitle={sportsData[1].shortdescription}
            imageSrc={sportsData[1].image}
            category={sportsData[1].category}
            slug={sportsData[1].slug}
            imageAlt={sportsData[1].title}
            imageSize="NewsCard-image-small "
          />
        </div>
        <div className="col-lg-3">
          <NewsCard
            title={sportsData[2].title}
            subtitle={sportsData[2].shortdescription}
            imageSrc={sportsData[2].image}
            category={sportsData[2].category}
            slug={sportsData[2].slug}
            imageAlt={sportsData[2].title}
            imageSize="NewsCard-image-small "
          />
        </div>
        <div className="col-lg-3">
          <NewsCard
            title={sportsData[3].title}
            subtitle={sportsData[3].shortdescription}
            imageSrc={sportsData[3].image}
            category={sportsData[3].category}
            slug={sportsData[3].slug}
            imageAlt={sportsData[3].title}
            imageSize="NewsCard-image-small "
          />
        </div>
        <div className="text-center  mt-4  border-black border-top">
          <button className=" show-more-btn fw-bold ">
            Read more articles
          </button>
        </div>
      </div>
      <h2 className="columnists-title text-decoration-underline">Technology</h2>
      <div className="row">
        <div className="col-lg-4">
          <NewsCard
            title={technologyData[3].title}
            subtitle={technologyData[3].shortdescription}
            imageSrc={technologyData[3].image}
            category={technologyData[3].category}
            slug={technologyData[3].slug}
            imageAlt={technologyData[3].title}
            imageSize="NewsCard-image "
          />
        </div>
        <div className="col-lg-4">
          <NewsCard
            title={technologyData[4].title}
            subtitle={technologyData[4].shortdescription}
            imageSrc={technologyData[4].image}
            category={technologyData[4].category}
            slug={technologyData[4].slug}
            imageAlt={technologyData[4].title}
            imageSize="NewsCard-image "
          />
        </div>
        <div className="col-lg-4">
          <NewsCard
            title={technologyData[5].title}
            subtitle={technologyData[5].shortdescription}
            imageSrc={technologyData[5].image}
            category={technologyData[5].category}
            slug={technologyData[5].slug}
            imageAlt={technologyData[5].title}
            imageSize="NewsCard-image "
          />
        </div>
      </div>
      <div className="text-center  mt-4  border-black border-top">
        <button className=" show-more-btn fw-bold ">Read more articles</button>
      </div>
      <h2 className="columnists-title text-decoration-underline">Politics</h2>
      <div className="row">
        <div className="col-lg-4">
          <NewsCard
            title={politicsData[3].title}
            subtitle={politicsData[3].shortdescription}
            imageSrc={politicsData[3].image}
            category={politicsData[3].category}
            slug={politicsData[3].slug}
            imageAlt={politicsData[3].title}
            imageSize="NewsCard-image "
          />
        </div>
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-6">
              <ImageAndtitle
                title={politicsData[4].title}
                imageSrc={politicsData[4].image}
                imageAlt={politicsData[4].title}
                category={politicsData[4].category}
                slug={politicsData[4].slug}
              />
            </div>
            <div className="col-lg-6">
              <ImageAndtitle
                title={politicsData[5].title}
                imageSrc={politicsData[5].image}
                imageAlt={politicsData[5].title}
                category={politicsData[5].category}
                slug={politicsData[5].slug}
              />
            </div>
          </div>
          <div className="row py-3">
            <div className="col-lg-6">
              <ImageAndtitle
                title={politicsData[6].title}
                imageSrc={politicsData[6].image}
                imageAlt={politicsData[6].title}
                category={politicsData[6].category}
                slug={politicsData[6].slug}
              />
            </div>
            <div className="col-lg-6">
              <ImageAndtitle
                title={politicsData[7].title}
                imageSrc={politicsData[7].image}
                imageAlt={politicsData[7].title}
                category={politicsData[7].category}
                slug={politicsData[7].slug}
              />
            </div>
          </div>
          <div className="row py-3">
            <div className="col-lg-6">
              <ImageAndtitle
                title={politicsData[8].title}
                imageSrc={politicsData[8].image}
                imageAlt={politicsData[8].title}
                category={politicsData[8].category}
                slug={politicsData[8].slug}
              />
            </div>
            <div className="col-lg-6">
              <ImageAndtitle
                title={politicsData[9].title}
                imageSrc={politicsData[9].image}
                imageAlt={politicsData[9].title}
                category={politicsData[9].category}
                slug={politicsData[9].slug}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
