import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../components/Card.jsx";
import CardLoading from "../components/CardLoading.jsx";
import { getAllCategories } from "../services/menu.services.js";
// import { categories } from "../data/dummyData.js";

const HomePage = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllCategories(setCategoriesData, setIsLoading);
  }, []);

  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <Link to="/">Home Pages</Link>
        <span>•</span>
        <span className="text-blue-800">Our Categories</span>
      </div>
      {/* INTRODUCTION */}
      <div className="flex item-center justify-between">
        {/* TITLE */}
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-4xl lg:text-5xl font-bold">
            Embark on a Culinary Journey with Us.
          </h1>
          <p className="mt-2 text-lg md:text-lg">
            Welcome to Rei-Restaurant, where flavors meet passion.
            Discover our carefully curated categories of dishes,
            designed to tantalize your taste buds and make every
            dining experience unforgettable. From savory starters to
            decadent desserts, there's something special for everyone.
          </p>
        </div>
      </div>
      <div className="mt-5 mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {isLoading ? (
          [...Array(3)].map((_, index) => <CardLoading key={index} />)
        ) : categoriesData?.length > 0 ? (
          categoriesData.map((category) => (
            <Link key={category.id} to={`/menu/${category.slug}`}>
              <Card>
                <Card.Header
                  image={category.img}
                  title={category.name}
                />
                <Card.Body title={category.name} />
              </Card>
            </Link>
          ))
        ) : (
          <p>No categories available.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
