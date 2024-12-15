import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import cartContext from "../contexts/cartcontext";

const Navbar = () => {
  const navigate = useNavigate();
  const { cartLength } = useContext(cartContext); 
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="flex flex-row justify-between items-center bg-[#8CFF98] py-2 px-5 font-bold">
          <p>Shopping-Cart</p>
          <div>
            <button onClick={() => navigate("/")}>Home</button>
            &nbsp; &nbsp;
            <button onClick={() => navigate("/cart")}>Cart</button>
          </div>
          <div className="flex flex-row space-x-1">
            <span
              onClick={() => navigate("/cart")}
              className="material-symbols-outlined text-3xl font-bold cursor-pointer"
            >
              shopping_cart
            </span>
            <p>{cartLength}</p>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
