import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card.jsx";
import CardLoading from "../components/CardLoading.jsx";
import { getAllDetail } from "../services/menu.services.js";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice.js";
// import { menuDetails } from "../data/dummyData.js";

const DetailPage = () => {
  const { menuSlug } = useParams();
  const [menu, setMenu] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    getAllDetail((data) => {
      const selectedMenu = data.find(
        (menu) => menu.slug === menuSlug
      );
      setMenu(selectedMenu);
    }, setIsLoading);
  }, [menuSlug]);

  const handleAddToCart = () => {
    if (menu) {
      dispatch(addToCart(menu));
    }
  };

  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <Link to="/">Detail Pages</Link>
        <span>•</span>
        <span className="text-blue-800">Detail Menu</span>
      </div>
      {/* INTRODUCTION */}
      <div className="flex item-center justify-between">
        {/* TITLE */}
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-4xl lg:text-5xl font-bold">
            Unveiling the Magic Behind the Dish.
          </h1>
          <p className="mt-2 text-lg md:text-lg">
            Dive deeper into the flavors you love! Here, we reveal the
            inspiration, ingredients, and artistry behind each dish.
            From the first bite to the last, discover what makes your
            meal truly extraordinary. Every dish has a story—let us
            share it with you.
          </p>
        </div>
      </div>
      <div className="mb-8 flex flex-col md:flex-row">
        {isLoading ? (
          <>
            {/* Loading skeleton for the left card */}
            <div className="w-full md:p-3">
              <CardLoading classname="md:h-80" classnames="h-64" />
            </div>
            {/* Loading skeleton for the right card */}
            <div className="w-full md:w-9/12 pt-3 md:p-3">
              <CardLoading classname="p-5 h-full" classnames="h-4" />
            </div>
          </>
        ) : (
          <>
            {/* Actual content when data is fetched */}
            <div className="w-full md:p-3">
              <Card>
                <Card.Header
                  classname="md:h-80"
                  image={menu?.img}
                  title={menu?.name}
                />
                <Card.Body title={menu?.name} />
              </Card>
            </div>
            <div className="w-full md:w-9/12 pt-3 md:p-3">
              <Card classname="p-5">
                <Card.Body title={menu?.name} />
                <div className="flex mt-3">
                  <h1 className="text-sm font-medium leading-none">
                    Category:
                  </h1>
                  <p className="text-sm font-medium leading-none ml-auto">
                    {menu?.category}
                  </p>
                </div>

                <hr className="mt-3 border border-black/20" />

                <div className="mt-3">
                  <h1 className="text-sm font-medium leading-tight">
                    Description: {menu?.description}
                  </h1>
                </div>

                <hr className="mt-3 border border-black/20" />

                <div className="flex mt-3">
                  <h1 className="text-sm font-medium leading-none">
                    Price:
                  </h1>
                  <h1 className="text-sm font-medium leading-none ml-auto">
                    $ {menu?.price}
                  </h1>
                </div>
              </Card>
              <div className="mt-3 flex justify-end">
                <button
                  className="bg-green-700 text-white px-4 py-2 rounded-md shadow-md hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DetailPage;
