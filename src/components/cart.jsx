const Cart = () => {
  return (
    <>
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

          <div className="bg-white mb-2 rounded-lg">
            <div className="flex flex-col sm:flex-row justify-between px-3 py-3 items-center">
              <div className="flex flex-row items-center mb-2 sm:mb-0">
                
                <img
                  src="https://placehold.co/50x50"
                  alt="Product"
                  className="w-12 h-12"
                />
                &nbsp;
                <h6>Title</h6>
              </div>

              <div className="mb-2 sm:mb-0">
                <p>₹ 10</p>
              </div>

              <div className="flex flex-row items-center mb-2 sm:mb-0">
                <button className="border border-gray-400 px-2 text-2xl rounded-md">
                  +
                </button>
                &nbsp;
                <p>{0}</p>
                &nbsp;
                <button className="border border-gray-400 px-2 text-2xl rounded-md">
                  -
                </button>
              </div>

              <div>
                <h1>₹ 10</h1>
              </div>
            </div>
          </div>
          {/* Card 1 Ends */}
        </div>
      </div>
    </>
  );
};

export default Cart;
