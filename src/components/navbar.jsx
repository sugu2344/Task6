import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import cartContext from "../contexts/cartcontext";

const Navbar = () => {
  const navigate = useNavigate();
  const { cart } = useContext(cartContext);

  function HandleClick() {
    navigate("/cart");
  }
  function handleHome() {
    navigate("/");
  }
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="flex flex-row justify-between items-center bg-[#8CFF98] py-2 px-5 font-bold">
          <div>
            <p>Shopping-Cart</p>
          </div>
          <div>
            <ul className="flex flex-row justify-between items-center space-x-6 font-bold">
              {/* <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#footer">Footer</a>
              </li> */}
              <button onClick={handleHome}>Home</button>
              <button onClick={HandleClick}>Cart</button>
            </ul>
          </div>
          <div className="flex flex-row space-x-1">
            <div>
              <span
                onClick={HandleClick}
                className="material-symbols-outlined text-3xl font-bold cursor-pointer"
              >
                shopping_cart
              </span>
            </div>
            <div>
              <p>{cart}</p>
            </div>
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
