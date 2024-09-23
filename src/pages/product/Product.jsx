import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import ProductCard from "../../components/product-card/ProductCard";
import NotFound from "../page-not-found/PageNotFound";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

function Product() {
  const { productData, loading } = useSelector((state) => state.productData);
  console.log(productData);

  const { product } = useParams();
  const productName = product.split("-").join(" ");

  /* -------------------------- zoom effect --------------------------- */

  const [isZoomed, setIsZoomed] = useState(false);
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const handleMouseMove = (e) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const moveX = ((x / container.offsetWidth) * 100).toFixed(2);
    const moveY = ((y / container.offsetHeight) * 100).toFixed(2);
    setTransform({ x: moveX, y: moveY });
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  /* ------------------------------------------------------------------ */

  // refactor
  if (!productData) {
    return <div className="text-center">Loading...</div>;
  }

  const foundProduct = productData.products?.find(
    (item) => item.name.toLowerCase() === productName.toLowerCase()
  );

  if (!foundProduct) {
    return <NotFound />;
  }

  return (
    <div className="bg-[#F8F6F3]">
      {loading && (
        <div className="flex justify-center items-center min-h-[80vh]">
          <ClipLoader
            color={"black"}
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      <div className="container mx-auto px-36 py-16">
        <div className="flex">
          {/* Image Zoom Section */}
          <div className="basis-[50%] pr-6">
            <div
              className="relative overflow-hidden w-full h-[600px] cursor-crosshair"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
            >
              <img
                src={foundProduct.image}
                alt={foundProduct.name}
                className={`transition-transform duration-300 ease-in-out object-cover w-full h-full ${
                  isZoomed ? "scale-150" : "scale-100"
                }`}
                style={{
                  transformOrigin: `${transform.x}% ${transform.y}%`,
                }}
              />
            </div>
          </div>

          {/* Product Details Section */}
          <div className="basis-[50%] pl-6">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold">{foundProduct.name}</h1>
              <h3 className="text-xl font-bold">
                ${foundProduct.sellingPrice.toFixed(2)}
                <span className="font-normal text-gray-600 text-sm">
                  {" "}
                  + Free Shipping
                </span>
              </h3>
              <p className="text-gray-600">{foundProduct.description}</p>
              <div className="flex gap-4">
                <input
                  name="quantity"
                  type="number"
                  min={1}
                  value={quantity}
                  className="p-2 w-20 border"
                  onChange={handleQuantityChange}
                />
                <Button className="px-20">ADD TO CART</Button>
              </div>
              <hr />
              <p className="text-sm text-gray-600">
                Categories:{" "}
                <span className="text-[#6F9C3F]">
                  {productData.categories
                    .filter((category) =>
                      category.productsId.includes(foundProduct.id)
                    )
                    .map((category) => category.name)
                    .join(", ")}
                </span>
              </p>
            </div>
          </div>
        </div>

        <hr className="mt-16" />
        <div>
          <h2 className="text-gray-600 py-2 font-bold border-t-4 border-[#8BC34A] inline-block">
            Description
          </h2>
          <p className="text-gray-600">{foundProduct.description}</p>
        </div>

        <div className="my-24">
          <h2 className="text-3xl font-bold">Related products</h2>
          <div className="grid grid-cols-4 gap-4 mt-12">
            {productData.products
              .filter((p) => p.id !== foundProduct.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  id={relatedProduct.id}
                  name={relatedProduct.name}
                  image={relatedProduct.image}
                  sellingPrice={relatedProduct.sellingPrice}
                  rating={relatedProduct.rating}
                  onSale={relatedProduct.onSale}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
