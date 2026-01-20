import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { getSingleProduct } from "@/actions/server/product";




const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;

  const product = await getSingleProduct(id);

  if (!product || !product.title) {
    return (
      <div className="text-center py-20 text-gray-500">
        Product not found
      </div>
    );
  }

  const {
    title,
    bangla,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
    description,
    info,
    qna,
  } = product;

  const discountedPrice = Math.round(
    price - (price * discount) / 100
  );

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Image */}
        <div className="bg-base-100 rounded-2xl shadow-md p-6 flex justify-center">
          <Image
            src={image}
            alt={title}
            width={450}
            height={450}
            className="object-contain"
            priority
          />
        </div>

        {/* Info */}
        <div className="space-y-6">

          <div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-gray-500 mt-1">{bangla}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center gap-1 text-yellow-500">
              <FaStar />
              <span className="font-medium">{ratings}</span>
            </div>
            <span className="text-gray-400">
              ({reviews} reviews)
            </span>
            <span className="text-gray-400">
              • {sold} sold
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-primary">
              ৳{discountedPrice}
            </span>
            {discount > 0 && (
              <>
                <span className="line-through text-gray-400">
                  ৳{price}
                </span>
                <span className="badge badge-error text-white">
                  -{discount}%
                </span>
              </>
            )}
          </div>

          {/* CTA */}
          <button className="btn btn-primary btn-lg w-full flex items-center gap-2">
            <BsCartPlus size={20} />
            Add to Cart
          </button>

          {/* Highlights */}
          <div className="bg-base-200 rounded-xl p-5 space-y-2">
            <h3 className="font-semibold">Why you’ll love it</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {info.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-16 space-y-6">
        <h2 className="text-2xl font-bold">Product Description</h2>
        {description.split("\n\n").map((para, i) => (
          <p key={i} className="text-gray-600 leading-relaxed">
            {para}
          </p>
        ))}
      </div>

      {/* Q&A */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {qna.map((item, index) => (
            <div
              key={index}
              className="collapse collapse-arrow bg-base-100 shadow"
            >
              <input type="checkbox" />
              <div className="collapse-title font-medium">
                {item.question}
              </div>
              <div className="collapse-content text-gray-600">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
