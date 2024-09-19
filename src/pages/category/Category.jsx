import { useState, useEffect} from "react";
import Button from "../../components/button/Button";
import ProductCard from "../../components/product-card/ProductCard";
import SidebarProductCard from "../../components/sidebar-productCard/SidebarProductCard";
import { Link, useParams } from "react-router-dom";
import PageNotFound from "../page-not-found/PageNotFound";
import { useSelector } from "react-redux";

function Category() {

  const { category } = useParams();

  const {productData} = useSelector((state) => state.productData);
 
  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(100);
  const priceGap = 10;

  useEffect(() => {
    const range = document.querySelector(".slider .progress");
    const minPercent = ((minPrice - 10) / (100 - 10)) * 100;
    const maxPercent = ((maxPrice - 10) / (100 - 10)) * 100;
    range.style.left = minPercent + "%";
    range.style.right = 100 - maxPercent + "%";
  }, [minPrice, maxPrice]);

  const handleMinPriceChange = (e) => {
    const value = parseInt(e.target.value);
    if (maxPrice - value >= priceGap) {
      setMinPrice(value);
    }
  };

  const handleMaxPriceChange = (e) => {
    const value = parseInt(e.target.value);
    if (value - minPrice >= priceGap) {
      setMaxPrice(value);
    }
  };

  const handleRangeChange = (e) => {
    const value = parseInt(e.target.value);
    if (e.target.className.includes("range-min")) {
      if (maxPrice - value >= priceGap) {
        setMinPrice(value);
      }
    } else {
      if (value - minPrice >= priceGap) {
        setMaxPrice(value);
      }
    }
  };

  const getProductById = (id) => {
    const product = productData.products.find((product) => product.id === id);

    if (product) {
      const categories = productData.categories
        .filter((cat) => cat.productsId.includes(id))
        .map((cat) => cat.name)
        .join(", ");

      return { ...product, categories };
    }

    return null;
  };

  if (category && productData?.categories) {
    const categoryNames = productData.categories.map((cat) => cat.name);
    if (!categoryNames.includes(category)) {
       return <PageNotFound />;
    }
  }

  return (
    <div className="bg-[#F8F6F3] py-16">
      <div className="container mx-auto px-36 flex">
        <div className="basis-[25%] border-r border-[#DDDDDD] pr-12">
          <div>
            {/* input search  */}
            <div className="flex gap-2 text-gray-500">
              <input
                name="search"
                type="text"
                className="p-2 border focus:outline-dashed w-full"
                placeholder="Search products..."
              />
              <Button icon="chevron-right" className="px-[12px]" />
            </div>

            {/* price filter  */}
            <div className="mt-12">
              <h2 className="mb-4 text-2xl font-bold">Filter by price</h2>
              <div className="slider">
                <div className="progress" />
              </div>
              <div className="range-input">
                <input
                  type="range"
                  className="range-min"
                  min={10}
                  max={100}
                  value={minPrice}
                  step={10}
                  onChange={handleRangeChange}
                />
                <input
                  type="range"
                  className="range-max"
                  min={10}
                  max={100}
                  value={maxPrice}
                  step={10}
                  onChange={handleRangeChange}
                />
              </div>
              <div className="price-input flex justify-end gap-2 mt-6 text-gray-500">
                <input
                  name="min"
                  type="number"
                  className="p-2 border w-16 rounded-sm focus:outline-dashed"
                  value={minPrice}
                  onChange={handleMinPriceChange}
                  readOnly
                />
                <input
                  name="max"
                  type="number"
                  className="p-2 border w-16 rounded-sm focus:outline-dashed"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                  readOnly
                />
              </div>
            </div>

            {/* category filter  */}
            <div className="my-12 flex flex-col gap-4 text-[#8BC34A] text-lg">
              <p>
                <Link to="/shop/groceries">
                  Groceries<span className="text-gray-500">(6)</span>
                </Link>
              </p>
              <p>
                <Link to="/shop/juice">
                  Juice<span className="text-gray-500">(6)</span>
                </Link>
              </p>
            </div>

            {/* sidebar products  */}
            <div className="flex flex-col gap-4">
              <SidebarProductCard
                id={1}
                name="Natural Extracted Edible Oil"
                image="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil.jpg"
                price={40}
                onSale={true}
              />
              <SidebarProductCard
                id={2}
                name="Handpicked Red Chillies"
                image="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-600x600.jpg"
                price={40}
                onSale={false}
              />
              <SidebarProductCard
                id={3}
                name="Wheat From Organic Farms"
                image="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/wheat.jpg"
                price={40}
                onSale={true}
              />
            </div>
          </div>
        </div>
        <div className="basis-[75%] pl-12">
          <div>
            <p className="text-gray-500 mb-6">Home / Shop{category && " / " + category.charAt(0).toUpperCase() + category.slice(1)}</p>
            <h1 className="text-5xl font-bold text-[#8BC34A] mb-12">
              {category
                ? category.charAt(0).toUpperCase() + category.slice(1)
                : "Shop"}
            </h1>
            {category && (
              <p className="text-gray-500 mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                dignissim, velit et luctus interdum, est quam scelerisque
                tellus, eget luctus mi diam vitae erat. Praesent porttitor lacus
                vitae dictum posuere. Suspendisse elementum metus ac dolor
                tincidunt, eu imperdiet nisi dictum.
              </p>
            )}

            <div className="flex justify-between text-gray-500">
              <div>Showing 1-9 of 10 results</div>
              <div>Default sorting</div>
            </div>
            <div className="grid grid-cols-3 py-8 gap-4">
              {category && productData?.categories
                ? productData.categories
                    .find((cat) => cat.name === category)
                    ?.productsId.map((productId) => {
                      const product = getProductById(productId);
                      return product ? (
                        <ProductCard
                          id={product.id}
                          key={product.id}
                          name={product.name}
                          image={product.image}
                          price={product.sellingPrice}
                          rating={product.rating}
                          onSale={product.onSale}
                          categories={product.categories} // Passing categories here
                        />
                      ) : null;
                    })
                : productData?.products?.map((product) => (
                    <ProductCard
                      id={product.id}
                      key={product.id}
                      name={product.name}
                      image={product.image}
                      price={product.sellingPrice}
                      rating={product.rating}
                      onSale={product.onSale}
                      categories={getProductById(product.id)?.categories} // Passing categories for all products
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
