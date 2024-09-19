import { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../../components/button/Button"
import { useSelector } from "react-redux";


function Navbar() {

  let {siteData} = useSelector((state) => state.siteData)

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  if (!siteData?.navbar) {
    return <div></div>;
  }

  return (
    < >
      {/* Navbar */}
      <nav className="px-8 py-4 flex justify-between">
        <div className="flex gap-10 items-center">
          <Link to="/">
            <img src={siteData.siteLogo} className="w-[150px]" alt="site-logo" />
          </Link>

          <ul className="flex gap-10">
            {siteData.navbar.leftLinks.map((item) => (
              <li key={item.id}>
                <Link to={item.path} className="text-gray-700 hover:text-[#8BC34A]">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-10 items-center">
          {siteData.navbar.rightLinks.map((item) => (
            <NavLink key={item.id} to={item.path} className="text-gray-700 hover:text-[#8BC34A]">
              {item.name}
            </NavLink>
          ))}

          {/* Cart Icon with toggle functionality */}
          <div onClick={toggleDrawer} className="flex gap-3 items-center text-[#8BC34A] cursor-pointer">
            <p className="">$0.00</p>
            <div className="relative">
              <span className="absolute top-[-12px] right-[-12px] w-6 h-6 text-center rounded-full leading-6 bg-[#8BC34A] text-white text-sm">0</span>
              <i className="fa-solid fa-basket-shopping fa-lg"></i>
            </div>
          </div>

          {/* User Icon */}
          <i className="fa-solid fa-user fa-lg text-slate-700 cursor-pointer"></i>
        </div>
      </nav>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-[34%] h-full bg-white shadow-lg z-50 transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="px-6 py-4 flex justify-between items-center">
          <h2>Shopping Cart</h2>
          <i className="fa-solid fa-xmark text-xl text-gray-500 cursor-pointer" onClick={toggleDrawer}></i>
        </div>
        <hr/>
        <div className="h-full">

          {/* no product fount  */}
          <div className="h-full">
            <div className="h-[80%] flex justify-center items-center">
              <h2 className="text-gray-600">No product in the cart.</h2>
            </div>
            <div className="h-[20%] flex items-center px-4">
            <Button className="w-full">CONTINUE SHOPPING</Button>
            </div>
          </div>

          {/* product found  */}
          <div className="h-full">
            <div className="h-[72%] flex flex-col p-6">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <div>
                    <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-600x600.jpg" className="w-[80px]" alt="product" />
                  </div>
                  <div>
                    <h2 className="text-gray-600">Assorted Coffee</h2>
                    <p className="text-gray-500 mt-1">1 x $45.00</p>
                  </div>
                </div>
                <div>
                <i className="text-gray-400 text-xl cursor-pointer hover:text-gray-500 fa-regular fa-circle-xmark"></i>
                </div>
              </div>
            </div>
            <div className="h-[28%]">
              <div className="flex justify-between text-gray-600 mb-6 border border-t border-b py-4 px-6">
                <p>Subtotal:</p>
                <p>$100.00</p>
              </div>
              <div className="flex flex-col w-full gap-4 px-6">
                <Button className="w-full">VIEW CART</Button>
                <Button className="w-full">CHEKOUT</Button>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Backdrop (Overlay) */}
      {isDrawerOpen && (
        <div
          onClick={toggleDrawer}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </>
  );
}

export default Navbar;
