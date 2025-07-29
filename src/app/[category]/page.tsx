import politicsData from "../../../public/data/politics.json";
import businessData from "../../../public/data/business.json";
import technologyData from "../../../public/data/technology.json";
import sportsData from "../../../public/data/sports.json";
import scienceData from "../../../public/data/science.json";
import healthData from "../../../public/data/health.json";
import entertainmentData from  "../../../public/data/entertainment.json";
import educationData from  "../../../public/data/education.json";
import lifestyleData from  "../../../public/data/lifestyle.json";
import ArticleSection from "../components/ArticleSection";
import NewsCard from "../components/NewsCard";
import ArticleHero from "../components/ArticleHero";
import TennisSection from "../components/SectionCard";

type Article = {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  date?:string
};

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

// Generate static parameters for all categories
export async function generateStaticParams() {
  return [
    { category: "politics" },
    { category: "business" },
    { category: "technology" },
    { category: "sports" },
    { category: "science" },
    { category: "health" },
    {category:"entertainment"},
    {category:"education"},
    {category:"lifestyle"}
  ];
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  console.log("categorySlug:", category);

  let filteredArticles: Article[] = [];

  switch (category) {
    case "technology":
      filteredArticles = technologyData;
      break;
    case "sports":
      filteredArticles = sportsData;
      break;
    case "business":
      filteredArticles = businessData;
      break;
    case "health":
      filteredArticles = healthData;
      break;
    case "science":
      filteredArticles = scienceData;
      break;
    case "politics":
      filteredArticles = politicsData;
      break;
      case "entertainment":
        filteredArticles=entertainmentData
        break;
      case "education":
        filteredArticles=educationData;
        break;
      case "lifestyle":
        filteredArticles=lifestyleData;
    default:
      break;
  }

  if (!filteredArticles.length) {
    return (
      <div className="p-4">No articles found for category: {category}</div>
    );
  }

  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-lg-8">
          <ArticleHero
            authorName="KRISTY DORSEY"
            category={filteredArticles[16].category}
            title={filteredArticles[16].title}
            imageSrc={filteredArticles[16].image}
            imageAlt={filteredArticles[16].title}
            slug={filteredArticles[16].slug}
          />
        </div>
        <div className="col-lg-4">
          <NewsCard
            title={filteredArticles[1].title}
            subtitle={filteredArticles[1].shortdescription}
            imageSrc={filteredArticles[1].image}
            category={filteredArticles[1].category}
            slug={filteredArticles[1].slug}
            imageAlt={filteredArticles[1].title}
            imageSize="NewsCard-image"
          />
        </div>
      </div>
      <div className="row py-2">
        <div className="col-lg-4">
          <NewsCard
            title={filteredArticles[2].title}
            subtitle={filteredArticles[2].shortdescription}
            imageSrc={filteredArticles[2].image}
            category={filteredArticles[2].category}
            slug={filteredArticles[2].slug}
            imageAlt={filteredArticles[2].title}
            imageSize="NewsCard-image"
          />
        </div>
        <div className="col-lg-4">
          <NewsCard
            title={filteredArticles[3].title}
            subtitle={filteredArticles[3].shortdescription}
            imageSrc={filteredArticles[3].image}
            category={filteredArticles[3].category}
            slug={filteredArticles[3].slug}
            imageAlt={filteredArticles[3].title}
            imageSize="NewsCard-image"
          />
        </div>
        <div className="col-lg-4">
          <NewsCard
            title={filteredArticles[4].title}
            subtitle={filteredArticles[4].shortdescription}
            imageSrc={filteredArticles[4].image}
            category={filteredArticles[4].category}
            slug={filteredArticles[4].slug}
            imageAlt={filteredArticles[4].title}
            imageSize="NewsCard-image"
          />
        </div>
      </div>
      <div className="row py-2">
        <div className="col-lg-4">
          <NewsCard
            title={filteredArticles[5].title}
            subtitle={filteredArticles[5].shortdescription}
            imageSrc={filteredArticles[5].image}
            category={filteredArticles[5].category}
            slug={filteredArticles[5].slug}
            imageAlt={filteredArticles[5].title}
            imageSize="NewsCard-image"
          />
        </div>
        <div className="col-lg-4">
          <NewsCard
            title={filteredArticles[6].title}
            subtitle={filteredArticles[6].shortdescription}
            imageSrc={filteredArticles[6].image}
            category={filteredArticles[6].category}
            slug={filteredArticles[6].slug}
            imageAlt={filteredArticles[6].title}
            imageSize="NewsCard-image"
          />
        </div>
        <div className="col-lg-4">
          <NewsCard
            title={filteredArticles[7].title}
            subtitle={filteredArticles[7].shortdescription}
            imageSrc={filteredArticles[7].image}
            category={filteredArticles[7].category}
            slug={filteredArticles[7].slug}
            imageAlt={filteredArticles[7].title}
            imageSize="NewsCard-image"
          />
        </div>
      </div>
      <div className="row py-2">
        <div className="col-lg-3">
          <NewsCard
            title={filteredArticles[8].title}
            subtitle={filteredArticles[8].shortdescription}
            imageSrc={filteredArticles[8].image}
            category={filteredArticles[8].category}
            slug={filteredArticles[8].slug}
            imageAlt={filteredArticles[8].title}
            imageSize="NewsCard-image-small"
          />
        </div>
        <div className="col-lg-3">
          <NewsCard
            title={filteredArticles[9].title}
            subtitle={filteredArticles[9].shortdescription}
            imageSrc={filteredArticles[9].image}
            category={filteredArticles[9].category}
            slug={filteredArticles[9].slug}
            imageAlt={filteredArticles[9].title}
            imageSize="NewsCard-image-small"
          />
        </div>
        <div className="col-lg-3">
          <NewsCard
            title={filteredArticles[10].title}
            subtitle={filteredArticles[10].shortdescription}
            imageSrc={filteredArticles[10].image}
            category={filteredArticles[10].category}
            slug={filteredArticles[10].slug}
            imageAlt={filteredArticles[10].title}
            imageSize="NewsCard-image-small"
          />
        </div>
        <div className="col-lg-3">
          <NewsCard
            title={filteredArticles[11].title}
            subtitle={filteredArticles[11].shortdescription}
            imageSrc={filteredArticles[11].image}
            category={filteredArticles[11].category}
            slug={filteredArticles[11].slug}
            imageAlt={filteredArticles[11].title}
            imageSize="NewsCard-image-small"
          />
        </div>
      </div>
      <div className="row py-2">
        <div className="col-lg-3">
          <NewsCard
            title={filteredArticles[12].title}
            subtitle={filteredArticles[12].shortdescription}
            imageSrc={filteredArticles[12].image}
            category={filteredArticles[12].category}
            slug={filteredArticles[12].slug}
            imageAlt={filteredArticles[12].title}
            imageSize="NewsCard-image-small"
          />
        </div>
        <div className="col-lg-3">
          <NewsCard
            title={filteredArticles[13].title}
            subtitle={filteredArticles[13].shortdescription}
            imageSrc={filteredArticles[13].image}
            category={filteredArticles[13].category}
            slug={filteredArticles[13].slug}
            imageAlt={filteredArticles[13].title}
            imageSize="NewsCard-image-small"
          />
        </div>
        <div className="col-lg-3">
          <NewsCard
            title={filteredArticles[14].title}
            subtitle={filteredArticles[14].shortdescription}
            imageSrc={filteredArticles[14].image}
            category={filteredArticles[14].category}
            slug={filteredArticles[14].slug}
            imageAlt={filteredArticles[14].title}
            imageSize="NewsCard-image-small"
          />
        </div>
      </div>
      <div className="text-center  mt-4  border-black border-top">
        <button className=" show-more-btn fw-bold ">Read more articles</button>
      </div>
      <h2 className="columnists-title text-decoration-underline">Most Read</h2>
      <div className="row">
        <div className="col-lg-3">
          <NewsCard
            title={filteredArticles[15].title}
            subtitle={filteredArticles[15].shortdescription}
            imageSrc={filteredArticles[15].image}
            category={filteredArticles[15].category}
            slug={filteredArticles[15].slug}
            imageAlt={filteredArticles[15].title}
            imageSize="NewsCard-image-small"
          />
        </div>
        <div className="col-lg-3">
          <NewsCard
            title={filteredArticles[17].title}
            subtitle={filteredArticles[17].shortdescription}
            imageSrc={filteredArticles[17].image}
            category={filteredArticles[17].category}
            slug={filteredArticles[17].slug}
            imageAlt={filteredArticles[17].title}
            imageSize="NewsCard-image-small"
          />
        </div>
        <div className="col-lg-3">
          <NewsCard
            title={filteredArticles[18].title}
            subtitle={filteredArticles[18].shortdescription}
            imageSrc={filteredArticles[18].image}
            category={filteredArticles[18].category}
            slug={filteredArticles[18].slug}
            imageAlt={filteredArticles[18].title}
            imageSize="NewsCard-image-small"
          />
        </div>
        <div className="col-lg-3">
          <NewsCard
            title={filteredArticles[19].title}
            subtitle={filteredArticles[19].shortdescription}
            imageSrc={filteredArticles[19].image}
            category={filteredArticles[19].category}
            slug={filteredArticles[19].slug}
            imageAlt={filteredArticles[19].title}
            imageSize="NewsCard-image-small"
          />
        </div>
      </div>
      <div className="text-center  mt-4  border-black border-top">
        <button className=" show-more-btn fw-bold ">Read more articles</button>
      </div>
      <h2 className="columnists-title text-decoration-underline">Latest</h2>
      <ArticleSection
        title={filteredArticles[20].title}
        subtitle={filteredArticles[20].shortdescription}
        imageSrc={filteredArticles[20].image}
        category={filteredArticles[20].category}
        slug={filteredArticles[20].slug}
        imageAlt={filteredArticles[20].title}
      />
      <div className="row">
        <div className="col-lg-3">
          <NewsCard
            title={filteredArticles[21].title}
            subtitle={filteredArticles[21].shortdescription}
            imageSrc={filteredArticles[21].image}
            category={filteredArticles[21].category}
            slug={filteredArticles[21].slug}
            imageAlt={filteredArticles[21].title}
            imageSize="NewsCard-image-small"
          />
        </div>
        <div className="col-lg-3">
          <NewsCard
            title={filteredArticles[22].title}
            subtitle={filteredArticles[22].shortdescription}
            imageSrc={filteredArticles[22].image}
            category={filteredArticles[22].category}
            slug={filteredArticles[22].slug}
            imageAlt={filteredArticles[22].title}
            imageSize="NewsCard-image-small"
          />
        </div>
        <div className="col-lg-3">
          <NewsCard
            title={filteredArticles[23].title}
            subtitle={filteredArticles[23].shortdescription}
            imageSrc={filteredArticles[23].image}
            category={filteredArticles[23].category}
            slug={filteredArticles[23].slug}
            imageAlt={filteredArticles[23].title}
            imageSize="NewsCard-image-small"
          />
        </div>
        <div className="col-lg-3">
          <NewsCard
            title={filteredArticles[24].title}
            subtitle={filteredArticles[24].shortdescription}
            imageSrc={filteredArticles[24].image}
            category={filteredArticles[24].category}
            slug={filteredArticles[24].slug}
            imageAlt={filteredArticles[24].title}
            imageSize="NewsCard-image-small"
          />
        </div>
      </div>
      <div className="text-center  mt-4  border-black border-top">
        <button className=" show-more-btn fw-bold ">Read more articles</button>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <TennisSection
            sectionTitle={filteredArticles[25].category}
            category={filteredArticles[25].category}
            articleTitle={filteredArticles[25].title}
            imageSrc={filteredArticles[25].image}
            imageAlt={filteredArticles[25].title}
            moreLink={category}
          />
        </div>
        <div className="col-lg-4">
          <TennisSection
            sectionTitle={filteredArticles[26].category}
            category={filteredArticles[26].category}
            articleTitle={filteredArticles[26].title}
            imageSrc={filteredArticles[26].image}
            imageAlt={filteredArticles[26].title}
            moreLink={category}
          />
        </div>
        <div className="col-lg-4">
          <TennisSection
            sectionTitle={filteredArticles[27].category}
            category={filteredArticles[27].category}
            articleTitle={filteredArticles[27].title}
            imageSrc={filteredArticles[27].image}
            imageAlt={filteredArticles[27].title}
            moreLink={category}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <TennisSection
            sectionTitle={filteredArticles[28].category}
            category={filteredArticles[28].category}
            articleTitle={filteredArticles[28].title}
            imageSrc={filteredArticles[28].image}
            imageAlt={filteredArticles[28].title}
            moreLink={category}
          />
        </div>
        <div className="col-lg-4">
          <TennisSection
            sectionTitle={filteredArticles[29].category}
            category={filteredArticles[29].category}
            articleTitle={filteredArticles[29].title}
            imageSrc={filteredArticles[29].image}
            imageAlt={filteredArticles[29].title}
            moreLink={category}
          />
        </div>
        <div className="col-lg-4">
          <TennisSection
            sectionTitle={filteredArticles[30].category}
            category={filteredArticles[30].category}
            articleTitle={filteredArticles[30].title}
            imageSrc={filteredArticles[30].image}
            imageAlt={filteredArticles[30].title}
            moreLink={category}
          />
        </div>
      </div>
    </div>
  );
}
