import { useContext } from "react";
import cartContext from "../contexts/cartcontext";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(cartContext);

  return (
    <div className="py-16 my-5 mx-10">
      <div className="bg-[#F7F7F2] py-3 px-2">
        <div className="bg-[#Eb4511] text-white text-2xl py-2 px-2 rounded-lg">
          <h1>Your Cart</h1>
        </div>
        <div className="hidden sm:flex flex-row justify-between px-5 py-3 items-center">
          <h1>Product</h1>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total Price</p>
        </div>

        {cartItems.map((item) => (
          <div key={item.id} className="bg-white mb-2 rounded-lg">
            <div className="flex flex-col sm:flex-row justify-between px-3 py-3 items-center">
              <div className="flex flex-row items-center mb-2 sm:mb-0">
                <img src={item.image} alt={item.title} className="w-12 h-12" />
                &nbsp;
                <h6>{item.title}</h6>
              </div>

              <p className="mb-2 sm:mb-0">₹ {item.price}</p>

              <div className="flex flex-row items-center mb-2 sm:mb-0">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="border border-gray-400 px-2 text-2xl rounded-md"
                >
                  +
                </button>
                &nbsp;
                <p>{item.quantity}</p>
                &nbsp;
                <button
                  onClick={() =>
                    item.quantity > 1
                      ? updateQuantity(item.id, item.quantity - 1)
                      : removeFromCart(item.id)
                  }
                  className="border border-gray-400 px-2 text-2xl rounded-md"
                >
                  -
                </button>
              </div>

              <h1>₹ {item.price * item.quantity}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
