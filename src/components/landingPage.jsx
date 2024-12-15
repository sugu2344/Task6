import { useEffect, useState, useContext } from "react";
import cartContext from "../contexts/cartcontext";

const LandingPage = () => {
  const [products, setProducts] = useState([]);
const { addToCart, cartItems, removeFromCart } = useContext(cartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        // console.log(response, ".then1");
        return response.json();
      })
      .then((data) => {
        console.log(data, ".then2");
        setProducts(data);
      })
      .catch((error) => console.log("error in fetching", error));
  }, []);

  
  function handleCart(product) {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      removeFromCart(product.id); 
    } else {
      addToCart(product); 
    }
  }


  return (
    <div className="py-16 my-3 mx-3">
      <div className="bg-[#F7F7F2] px-5 py-10">
        <div className="flex flex-wrap gap-4 p-5 bg-[#EFF7F6]">
          {products.map((product) => {
            const isInCart = cartItems.some((item) => item.id === product.id);
            return (
              <div
                key={product.id}
                className="w-full sm:w-[45%] md:w-[30%] lg:w-[23%] border-2 bg-white p-4 flex flex-col min-h-[600px]"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-[180px] object-cover"
                />
                <div className="flex flex-col justify-between flex-grow text-center space-y-3 mt-3">
                  <h1 className="font-bold text-2xl">{product.title}</h1>
                  <p className="text-justify">{product.description}</p>
                  <p className="text-lg font-medium">₹ {product.price}</p>
                  <button
                    onClick={() => handleCart(product)}
                    className="border-2 p-2 rounded-xl hover:bg-black hover:text-white cursor-pointer"
                  >
                    {isInCart ? "Remove from Cart" : "Add to Cart"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;