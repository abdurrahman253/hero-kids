"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { FiEye } from "react-icons/fi";

const ProductCard = ({ product }) => {
  const {
    _id,
    title,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
  } = product;

  const discountedPrice = Math.round(
    price - (price * discount) / 100
  );

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl">
      
      {/* Image */}
      <figure className="p-4">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="h-48 w-full object-contain"
        />
      </figure>

      {/* Body */}
      <div className="card-body p-5 space-y-3">
        
        {/* Title */}
        <h2 className="font-semibold text-lg leading-snug line-clamp-2">
          {title}
        </h2>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar />
            <span className="font-medium">{ratings}</span>
          </div>
          <span className="text-gray-400">({reviews} reviews)</span>
          <span className="text-gray-400">• {sold} sold</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-primary">
            ৳{discountedPrice}
          </span>
          {discount > 0 && (
            <span className="line-through text-gray-400 text-sm">
              ৳{price}
            </span>
          )}
          {discount > 0 && (
            <span className="badge badge-error badge-sm text-white">
              -{discount}%
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="space-y-2 pt-2">
          <button className="btn btn-primary btn-outline w-full flex items-center gap-2">
            <BsCartPlus size={18} />
            Add to Cart
          </button>

          <Link
            href={`/products/${_id}`}
            className="btn btn-ghost w-full flex items-center gap-2"
          >
            <FiEye size={18} />
            View Details
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
