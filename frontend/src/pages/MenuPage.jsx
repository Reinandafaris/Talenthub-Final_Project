import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card.jsx";
import CardLoading from "../components/CardLoading.jsx";
import { getAllMenu } from "../services/menu.services.js";
// import { menus } from "../data/dummyData.js";

export default function MenuPage() {
  const { categorySlug } = useParams();
  const [menusData, setMenusData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllMenu((data) => {
      const filteredMenus = data.filter(
        (menu) => menu.categorySlug === categorySlug
      );
      setMenusData(filteredMenus);
    }, setIsLoading);
  }, [categorySlug]);

  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <Link to="/">Menu Pages</Link>
        <span>•</span>
        <span className="text-blue-800">Our Menu</span>
      </div>
      {/* INTRODUCTION */}
      <div className="flex item-center justify-between">
        {/* TITLE */}
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-4xl lg:text-5xl font-bold">
            Explore Our Exquisite Menu.
          </h1>
          <p className="mt-2 text-lg md:text-lg">
            Step into a world of culinary delights! Browse our menu to
            find your next favorite dish, expertly crafted to
            perfection. Whether you're craving something light or a
            hearty main course, we've got you covered. Click on a dish
            to learn more about its story and flavors.
          </p>
        </div>
      </div>
      <div className="mt-5 mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {isLoading ? (
          [...Array(10)].map((_, index) => (
            <CardLoading key={index} />
          ))
        ) : menusData.length > 0 ? (
          menusData.map((menu) => (
            <Link key={menu.id} to={`/detail/${menu.slug}`}>
              <Card>
                <Card.Header image={menu.img} title={menu.name} />
                <Card.Body title={menu.name} />
              </Card>
            </Link>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No foods available for this category.
          </p>
        )}
      </div>
    </div>
  );
}
