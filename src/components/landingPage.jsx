import { useEffect, useState } from "react";

const LandingPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        // console.log(response, ".then1");
        return response.json();
      })
      .then((data) => {
        // console.log(data, ".then2");
        setProducts(data);
      })
      .catch((error) => console.log("error in fetching", error));
  }, []);
  return (
    <>
      <div className="py-16 my-3 mx-3">
        <div className="bg-[#F7F7F2] px-5 py-10">
          <div className="flex flex-wrap gap-4 p-5 bg-[#EFF7F6] ">
            {/* Card start */}
            {products.map((product) => {
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
                    <p className="text-justify flex justify-center">
                      {product.description}
                    </p>
                    <div className="flex justify-center mt-auto">
                      <p className="text-lg font-medium">₹ {product.price}</p>
                    </div>
                    <button className="border-2 p-2 rounded-xl hover:bg-black hover:text-white cursor-pointer ">
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
            {/* card end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
