import { ErrorBoundary } from 'react-error-boundary';
import ServiceCard from "../../components/service-card/ServiceCard";
import FreshCard from "../../components/fresh-card/FreshCard";
import Button from "../../components/button/Button";
import FeaturedProducts from "../../sections/featured-products/FeaturedProducts";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { lazy, Suspense } from "react";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="flex justify-center items-center min-h-[80vh]">
      <div>
        <h2>Something went wrong:</h2>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary} className="mt-4 p-2 bg-red-500 text-white">
          Try again
        </button>
      </div>
    </div>
  );
}

function Home() {
  const ProductCard = lazy(() => import("../../components/product-card/ProductCard"));

  const { productData, loading } = useSelector((state) => state.productData);
  const { siteData } = useSelector((state) => state.siteData);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <ClipLoader color={"black"} loading={true} size={100} aria-label="Loading Spinner" data-testid="loader" />
      </div>
    );
  }

  // refactor
  const getProductsById = (ids) => productData.products?.filter((product) => ids?.includes(product.id));

  const getProductCategories = (productId) => {
    const categories = productData.categories
      .filter((category) => category.productsId.includes(productId))
      ?.map((category) => category.name);
    return categories.join(", ");
  };
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {/* hero section */}
      <div className="h-[78vh] bg-[#FAFAF7] relative">
        <div className="h-full container mx-auto px-36 flex gap-8 items-center">
          <div className="basis-[50%]">
            <img
              src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero.png"
              alt="hero-section-image"
            />
          </div>
          <div className="basis-[50%] p-12 flex flex-col gap-8">
            <div>
              <img
                src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png"
                alt="leaves"
              />
            </div>
            <p className="text-lg text-slate-800 font-bold">Best Quality Products</p>
            <h1 className="text-6xl text-slate-800 font-bold">Join The Organic Movement!</h1>
            <p className="text-slate-800">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quis ipsam aliquid quasi dolorum laborum voluptatibus alias laboriosam non tempora!
            </p>
            <div>
              <Button icon="cart-shopping">SHOP NOW</Button>
            </div>
          </div>
        </div>
        <img
          src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/leaves-free-img.png"
          className="absolute bottom-0 right-0 w-[28%] opacity-25"
          alt="leaves"
        />
      </div>

      {/* service section */}
      <div className="bg-[#111111] py-12">
        <div className="container mx-auto px-36 grid grid-cols-4 gap-8">
          {siteData.serviceCard?.map((item) => (
            <ServiceCard key={item.id} title={item.title} description={item.description} icon={item.icon} />
          ))}
        </div>
      </div>

      {/* best selling products */}
      <FeaturedProducts title="Best Selling Products">
        {getProductsById(siteData.sellingProductsId)?.map((product) => (
          <Suspense fallback={<div>loading...</div>} key={product.id}>
            <ProductCard
              id={product.id}
              key={product.id}
              name={product.name}
              image={product.image}
              price={product.sellingPrice}
              rating={product.rating}
              onSale={product.onSale}
              categories={getProductCategories(product.id)}
            />
          </Suspense>
        ))}
      </FeaturedProducts>

      {/* fresh selling products */}
      <div className="pt-28 pb-12 bg-[#F8F6F3] relative">
        <img
          src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png"
          className="absolute top-[-30px] right-[46%] w-[160px]"
          alt="leaves"
        />
        <div className="container mx-auto px-36">
          <div className="grid grid-cols-3 gap-6">
            {siteData.freshArrivals?.map((item) => (
              <FreshCard key={item.id} title={item.title} description={item.description} image={item.image} />
            ))}
          </div>
        </div>
        <div className="bg-black relative">
          <div className="container mx-auto px-36 flex justify-between items-center py-12 mt-28 mb-12">
            <h2 className="text-white text-4xl">Get 25% Off On Your First Purchase!</h2>
            <div>
              <Button icon="cart-shopping">SHOP NOW</Button>
            </div>
          </div>
          <i className="fa-solid fa-sort-down absolute text-5xl bottom-[-16px] right-[50%]"></i>
        </div>
        <h2 className="text-center text-2xl">Try It For Free. No Registration Needed.</h2>
      </div>

      {/* trending products */}
      <FeaturedProducts title="Trending Products">
        {getProductsById(siteData.trendingProductsId)?.map((product) => (
          <Suspense fallback={<div>loading.............</div>} key={product.id}>
            <ProductCard
              id={product.id}
              key={product.id}
              name={product.name}
              image={product.image}
              price={product.sellingPrice}
              rating={product.rating}
              onSale={product.onSale}
              categories={getProductCategories(product.id)}
            />
          </Suspense>
        ))}
      </FeaturedProducts>
    </ErrorBoundary>
  );
}

export default Home;
