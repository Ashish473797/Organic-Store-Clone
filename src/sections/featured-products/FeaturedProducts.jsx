function FeaturedProducts({ children, title }) {
  return (
    <div className="py-36">
      <div className="container mx-auto px-36">
        <div className="flex items-center flex-col gap-6">
          <h2 className="text-4xl font-bold">{title}</h2>
          <div>
            <img
              src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png"
              alt="leaves"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 my-12">
          {children}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
