import { useDispatch, useSelector } from "react-redux";
import { setSidebarOpen } from "../redux/slices/cartSlice";
import useOutsideClick from "../hooks/useOutsideClick";

const Sidebar = () => {
  const { isSidebarOpen, cartItems, totalPrice } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const sidebarRef = useOutsideClick(() =>
    dispatch(setSidebarOpen(false))
  );

  return (
    <div
      ref={sidebarRef}
      className={`z-50 fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="p-4">
        <button
          className="bg-red-700 text-white px-2 py-1 rounded-md shadow-md float-right"
          onClick={() => dispatch(setSidebarOpen(false))}
        >
          close
        </button>
        <h2 className="mt-14 text-xl font-bold">Your Order List</h2>
        <ul className="px-4 mt-4 space-y-2">
          {cartItems.map((item, index) => (
            <li key={index} className="flex justify-between">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="px-4 mt-4 font-bold">
          Total: ${totalPrice.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
