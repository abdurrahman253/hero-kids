const ProductDetailsSkeleton = () => {
  return (
    <section className="container mx-auto px-4 py-12 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        <div className="skeleton h-[420px] rounded-2xl"></div>

        <div className="space-y-5">
          <div className="skeleton h-8 w-3/4"></div>
          <div className="skeleton h-4 w-1/2"></div>
          <div className="skeleton h-5 w-1/3"></div>
          <div className="skeleton h-10 w-1/2"></div>
          <div className="skeleton h-14 w-full rounded-xl"></div>

          <div className="skeleton h-32 w-full rounded-xl"></div>
        </div>
      </div>

      <div className="mt-16 space-y-4">
        <div className="skeleton h-6 w-1/3"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-5/6"></div>
      </div>
    </section>
  );
};

export default ProductDetailsSkeleton;
